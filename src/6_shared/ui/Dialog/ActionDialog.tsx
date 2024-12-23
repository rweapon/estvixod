"use client";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@shared/ui/Form/Form";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@shared/ui/Dialog/components";
import { Button } from "@shared/ui/Button/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@shared/ui/Input/Input";
import { useEffect, useState } from "react";

type Props = {
  location?: "hero" | "action";
};

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "Имя должно содержать хотя бы 1 букву",
  }),
  phone: z.string().min(11, {
    message: "Телефон должен содержать 11 цифр.",
  }),
});

export default function ActionDialog({ location = "hero" }: Props) {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const { reset } = form;
  const { isSubmitting, isSubmitSuccessful } = form.formState;

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, reset]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="text-base font-bold p-8 leading-normal"
        >
          {location === "hero" ? "КОНСУЛЬТАЦИЯ" : "ОСТАВИТЬ ЗАЯВКУ"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="space-y-0.5 ">
          <DialogTitle className="text-2xl font-sans text-center">
            Оставить заявку
          </DialogTitle>
          <DialogDescription className="text-base md:text-lg text-paragraph-100">
            Заполните форму, мы свяжемся с вами!
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        required
                        type="text"
                        autoComplete="given-name webauthn"
                        placeholder="Имя"
                        className="text-base md:text-lg p-6"
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
                    <FormControl>
                      <Input
                        required
                        type="tel"
                        pattern="^[\d\+\-\.\(\)\/\s]*$"
                        autoComplete="tel webauthn"
                        placeholder="Телефон"
                        className="text-base md:text-lg p-6"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              variant="secondary"
              className="w-full text-base md:text-lg p-6"
              type="submit"
            >
              Отправить
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
