"use client"

import { dmSans, poppins } from "@/lib/fonts";
import { Button } from "./button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from "./input";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./calendar";

const reservationSchema = z.object({
    name: z.string().min(3, {
        message: 'Nome muito curto'
    }).max(50),
    email: z.string().email({
        message: 'Email inválido'
    }),
    phone: z.string(),
    date: z.date({
        required_error: 'Data é obrigatória'
    }),
})

export default function ReservationForm() {
    const form = useForm<z.infer<typeof reservationSchema>>({
        resolver: zodResolver(reservationSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            date: new Date(),
        }
    });

    function onSubmit(values: z.infer<typeof reservationSchema>) {
        console.log(values)
    }


    return (
        <Dialog>
            <DialogTrigger className={`bg-primary text-primary-foreground shadow hover:bg-dark mt-4 rounded px-[28px] py-[16px] ${dmSans.className} font-medium text-base bg-primaryGreen`}>
                <p>Agendar um horário</p>
            </DialogTrigger>
            <DialogContent className="max-w-80 ">
                <DialogHeader className="self-start text-start">
                    <DialogTitle className={`${poppins.className} font-bold`}>Escolha uma data</DialogTitle>
                    <DialogDescription>Preencha para fazer uma nova reserva</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nome Completo</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>Digite seu nome e sobrenome</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>Você receberá um link de confirmação nesse email</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Telefone</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription>Digite seu número de celular ou Whatsapp.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Escolha uma data</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button variant="outline" className={cn("w-full pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground")}
                                                >
                                                    {field.value ? (format(field.value, "PPP")) : <span>Escolha uma data</span>}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={((date) => date < new Date())}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="bg-primaryGreen">Enviar</Button>

                    </form>
                </Form>
                <DialogFooter>

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}