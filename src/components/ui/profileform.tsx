import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useToast } from "@/components/ui/use-toast";

import axios from "axios";

const { VITE_PUSHOVER_API_TOKEN } = import.meta.env;
const { VITE_PUSHOVER_USER_KEY } = import.meta.env;

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

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name muss mind. zwei Buchstaben haben.",
  }),
  phone: z.string().min(5, {
    message: "Telefonnummer muss mind. 5 Zahlen haben.",
  }),
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
        title: "Rückruf erfolgreich angefordert.",
        description: "Wir rufen Sie bald zurück.",
      });
    } catch (error) {
      console.error("Error sending push notification:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
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
              <FormLabel className="text-white ">Telefon</FormLabel>
              <FormControl>
                <Input placeholder="Telefonnummer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-mbblue hover:bg-[#005f8d]"
        >
          Rückruf anfordern
        </Button>
      </form>
    </Form>
  );
}
