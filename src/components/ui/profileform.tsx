import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod/mini";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./button";

const { VITE_PUSHOVER_API_TOKEN, VITE_PUSHOVER_USER_KEY } = import.meta.env;

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9]){5,}$/
);

const formSchema = z.object({
  name: z
    .string()
    .check(
      z.minLength(3, "Geben Sie Ihren Vor- und Nachnamen ein."),
      z.maxLength(50, "Kürzen Sie den Namen auf höchstens 50 Zeichen.")
    ),
  phone: z
    .string()
    .check(
      z.minLength(1, "Geben Sie Ihre Telefonnummer ein."),
      z.regex(
        phoneRegex,
        "Geben Sie eine gültige Telefonnummer ein, zum Beispiel 08061 123456."
      )
    ),
  website: z.optional(z.string()),
});

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      website: "",
    },
  });

  const { toast } = useToast();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Das versteckte Feld füllen nur Spam-Bots aus. Sie sehen dieselbe
      // Bestätigung wie ein Mensch, gesendet wird aber nichts.
      if (!values.website) {
        const antwort = await fetch(
          "https://api.pushover.net/1/messages.json",
          {
            method: "POST",
            body: new URLSearchParams({
              token: VITE_PUSHOVER_API_TOKEN,
              user: VITE_PUSHOVER_USER_KEY,
              message: `Rückruf gewünscht von:\nName: ${values.name}\nTelefonnummer: ${values.phone}`,
            }),
          }
        );
        const ergebnis = await antwort.json();
        if (ergebnis.status !== 1) throw new Error(`Status ${antwort.status}`);
      }

      toast({
        title: "Rückruf angefordert",
        description: "Wir melden uns so schnell wie möglich bei Ihnen.",
      });
      form.reset();
    } catch (error) {
      console.error("Rückruf konnte nicht gesendet werden:", error);

      toast({
        variant: "destructive",
        duration: Infinity,
        title: "Rückruf nicht gesendet",
        description:
          "Prüfen Sie Ihre Verbindung und versuchen Sie es erneut, oder rufen Sie uns an: +49 8061 93 98 333.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Maria Muster"
                  autoComplete="name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefon</FormLabel>
              <FormControl>
                <Input
                  placeholder="08061 123456"
                  type="tel"
                  autoComplete="tel"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Für Menschen unsichtbar, füllen nur Spam-Bots aus */}
        <input
          {...form.register("website")}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px]"
        />
        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="w-full sm:w-auto"
        >
          Rückruf anfordern
        </Button>
      </form>
    </Form>
  );
}
