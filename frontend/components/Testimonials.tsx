"use client"

import { dmSans, poppins } from "@/lib/fonts"
import Gradient from "./ui/gradient"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "./ui/carousel"


const testimonials = [
    {
        quote: "Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.",
        author: "Wanessa Souza",
        image: "/avatar-01.png"
    },
    {
        quote: "Excelente atendimento e produtos de alta qualidade. Recomendo!",
        author: "Maria Silva",
        image: "/placeholder.svg?height=40&width=40"
    },
    {
        quote: "Transformaram meus cabelos. Estou muito satisfeita com os resultados!",
        author: "Ana Oliveira",
        image: "/placeholder.svg?height=40&width=40"
    }
]

export default function Testimonials() {
    const [api, setApi] = useState<CarouselApi>()
    const [currentQuote, setCurrentQuote] = useState(0)

    useEffect(() => {
        if (!api) return;

        setCurrentQuote(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrentQuote(api.selectedScrollSnap())
        })
    }, [api])

    const goToSlide = (index: number) => {
        api?.scrollTo(index)
    }

    return (
        <div className="bg-gray-100 scroll-mt-20" id="testimonials">
            <section className="px-6 pt-20 flex flex-col gap-14">
                <h2 className={`${poppins.className} text-4xl font-bold lg:self-center lg:max-w-[480px] text-start lg:text-center max-w-60 leading-relaxed`}>
                    Depoimentos de quem já passou por aqui
                </h2>
                <div className="relative w-80 mx-auto h-80 lg:w-3/4">
                    <Carousel setApi={setApi}>
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="lg:basis-1/2">
                                    <Card className="bg-gray-50 shadow-md h-full rounded-sm">
                                        <CardContent className="p-7 leading-relaxed flex flex-col h-full justify-between gap-8">
                                            <blockquote className={`${dmSans.className}`}>
                                                <Image src="/icons/quotes-icon.svg" width={20} height={26} alt="Quotes" className="inline relative -top-1 mr-2" />
                                                {testimonial.quote}
                                            </blockquote>
                                            <div className="flex items-center justify-start gap-3">
                                                <Avatar>
                                                    <AvatarImage src={testimonial.image} />
                                                    <AvatarFallback>
                                                        {testimonial.author.split(" ").map((name) => name[0].toUpperCase())}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <p className="text-gray-600">{testimonial.author}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <div
                        className="flex justify-center mt-4 space-x-2 lg:mt-14"
                        role="tablist"
                        ria-label="Testimonial navigation"
                    >
                        {testimonials.map((_, index) => (
                            <Button
                                key={index}
                                variant="ghost"
                                size="sm"
                                className={`w-3 h-3 p-0 rounded-full transition-colors duration-200 ${index === currentQuote ? 'bg-primaryGreen' : 'bg-gray-300'
                                    }`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                                aria-selected={index === currentQuote}
                                role="tab"
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Gradient direction="r" />
        </div>
    )
}