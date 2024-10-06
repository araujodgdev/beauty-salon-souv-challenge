import Image from "next/image";
import Gradient from "@/components/ui/gradient";
import ReservationPicker from "./ui/reservation-form";
import { poppins } from "@/lib/fonts";

export default function Home() {
    return (
        <div className="bg-gray-100 pt-28 lg:pt-40" id="home">
            <section className="flex flex-col-reverse items-center justify-center lg:flex-row lg:justify-between lg:w-screen lg:px-32 ">
                <section className="flex flex-col items-center justify-center gap-4 text-center max-w-[330px] lg:max-w-[400px] mt-8 lg:items-start lg:text-start">
                    <h1 className={`${poppins.className} text-3xl font-bold leading-relaxed lg:leading-relaxed lg:text-4xl`}>
                        Saúde natural para os seus cabelos
                    </h1>
                    <p className="text-gray-600">Um salão exclusivo em São Paulo, especializado em tratamentos naturais.</p>
                    <ReservationPicker />
                </section>
                <Image src='/hero-img.png' priority width={658} height={443} alt="Mulher escovando o cabelo de uma cliente em um sação de beleza com cadeiras ao fundo" />
            </section>
            <Gradient direction="l" />
        </div>
    )
}