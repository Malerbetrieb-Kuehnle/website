import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
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

const { VITE_PUSHOVER_API_TOKEN } = import.meta.env;
const { VITE_PUSHOVER_USER_KEY } = import.meta.env;

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9]){5,}$/
);

const formSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Geben Sie Ihren Vor- und Nachnamen ein.",
    })
    .max(50, {
      message: "Kürzen Sie den Namen auf höchstens 50 Zeichen.",
    }),
  phone: z
    .string()
    .min(1, "Geben Sie Ihre Telefonnummer ein.")
    .regex(phoneRegex, "Geben Sie eine gültige Telefonnummer ein, zum Beispiel 08061 123456."),
});

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const { toast } = useToast();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      const response = await axios.post(
        "https://api.pushover.net/1/messages.json",
        {
          token: VITE_PUSHOVER_API_TOKEN,
          user: VITE_PUSHOVER_USER_KEY,
          message: `Rückruf gewünscht von:\nName: ${values.name}\nTelefonnummer: ${values.phone}`,
        }
      );

      console.log("Push notification sent successfully:", response.data);

      toast({
        title: "Rückruf angefordert",
        description: "Wir melden uns so schnell wie möglich bei Ihnen.",
      });
      form.reset();
    } catch (error) {
      console.error("Error sending push notification:", error);

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
              <FormLabel className="text-white">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Maria Muster"
                  autoComplete="name"
                  className="text-foreground"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-[#ffc9c0]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Telefon</FormLabel>
              <FormControl>
                <Input
                  placeholder="08061 123456"
                  type="tel"
                  autoComplete="tel"
                  className="text-foreground"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-[#ffc9c0]" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="bg-mblime text-foreground hover:bg-white"
        >
          Rückruf anfordern
        </Button>
      </form>
    </Form>
  );
}
