import { dmSans, poppins } from "@/lib/fonts";
import Card from "./ui/my-card";
import Gradient from "./ui/gradient";

export default function Services() {
    return (
        <div className="bg-gray-100 scroll-mt-20" id="services">
            <section className="flex flex-col items-center  px-6 pt-20 lg:justify-center">
                <h2 className={`${poppins.className} font-bold text-3xl self-start lg:self-center lg:text-4xl`}>
                    Serviços
                </h2>
                <p className={`${dmSans.className} mt-5 max-w-80 leading-relaxed lg:text-center self-start lg:self-center lg:max-w-[500px] lg:text-lg`}>
                    Com mais de 10 anos no mercado, o <span className={`${poppins.className} text-primaryGreen`}>Beautysalon</span> já conquistou clientes de inúmeros países com seus tratamentos exclusivos e totalmente naturais
                </p>
                <div className="flex flex-col items-center justify-center gap-7 mt-16 lg:flex-row">
                    <Card icon="/icons/hair-icon.svg" title="Terapia Capilar" content="Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos." />
                    <Card icon="/icons/scissor-icon.svg" title="Cortes" content="A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos." />
                    <Card icon="/icons/products-icon.svg" title="Tratamentos" content="O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo 
de cabelo."/>

                </div>
            </section>
            <Gradient direction="l" />
        </div>
    )
}