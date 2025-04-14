import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Por favor, introduce una dirección de email válida" }),
  attendance: z.enum(["yes", "no", "maybe"], {
    required_error: "Por favor, selecciona tu estado de asistencia",
  }),
  guests: z.string().min(1, { message: "Por favor, selecciona el número de invitados" }),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const RsvpForm: React.FC = () => {
  const { toast } = useToast();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      attendance: "yes",
      guests: "1",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: FormData) => {
      return apiRequest("POST", "/api/rsvps", {
        ...data,
        guests: parseInt(data.guests),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/rsvps"] });
      toast({
        title: "Confirmación Enviada",
        description: "¡Gracias por tu confirmación! Las Emperatrices esperan tu llegada.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Hubo un error al enviar tu confirmación. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    mutate(data);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="rsvp" className="py-16 md:py-24 px-4 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-12 roman-border"></div>
      
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl text-primary mb-4">DECLARA TU ASISTENCIA</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="font-lato text-lg max-w-2xl mx-auto">
            Por decreto de las emperatrices cumpleañeras, se solicita tu presencia. Por favor, confirma tu asistencia.
          </p>
        </div>
        
        <div className="bg-background border-2 border-secondary p-8 rounded-sm shadow-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block font-cinzel text-muted mb-2">TU NOMBRE</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="w-full p-3 border-2 border-muted rounded-sm focus:border-primary focus:outline-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block font-cinzel text-muted mb-2">TU PERGAMINO DE MENSAJES (EMAIL)</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="w-full p-3 border-2 border-muted rounded-sm focus:border-primary focus:outline-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="attendance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block font-cinzel text-muted mb-2">¿TE UNIRÁS A LAS FESTIVIDADES?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="space-x-6 flex flex-wrap"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="yes" />
                          <label htmlFor="yes">Sí, asistiré</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="no" />
                          <label htmlFor="no">No, debo declinar</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="maybe" id="maybe" />
                          <label htmlFor="maybe">Quizás, si Júpiter lo permite</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="guests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block font-cinzel text-muted mb-2">NÚMERO DE INVITADOS EN TU GRUPO</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full p-3 border-2 border-muted rounded-sm focus:border-primary focus:outline-none">
                          <SelectValue placeholder="Seleccionar número de invitados" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">Solo yo (1)</SelectItem>
                        <SelectItem value="2">Yo y un acompañante (2)</SelectItem>
                        <SelectItem value="3">Un pequeño grupo (3)</SelectItem>
                        <SelectItem value="4">Mi séquito (4+)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block font-cinzel text-muted mb-2">MENSAJE PARA LAS EMPERATRICES CUMPLEAÑERAS</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={4}
                        className="w-full p-3 border-2 border-muted rounded-sm focus:border-primary focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="text-center mt-8">
                <Button
                  type="submit"
                  disabled={isPending}
                  className="bg-primary text-primary-foreground font-cinzel py-3 px-10 rounded-sm transform hover:scale-105 transition-transform duration-300"
                >
                  {isPending ? "ENVIANDO..." : "ENVIAR TU CONFIRMACIÓN A ROMA"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-12 roman-border"></div>
    </section>
  );
};

export default RsvpForm;
