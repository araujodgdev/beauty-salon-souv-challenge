import { dmSans, poppins } from "@/lib/fonts";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Contact() {
    return (
        <div className="bg-gray-100 scroll-mt-20 pb-20" id="contact">
            <section className="flex flex-col items-center px-6 pt-20 lg:flex-row lg:px-[250px] lg:justify-between">
                <div className="flex flex-col items-start gap-4 max-w-80">
                    <h2 className={`${poppins.className} text-3xl font-bold`}>
                        Entre em contato com a gente!   
                    </h2>
                    <p className={`${dmSans.className} text-base text-gray-600`}>
                        Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.
                    </p>
                    <Button className="bg-primaryGreen mt-4 px-10 py-8">    
                        <Image src="/icons/whatsapp-icon.svg" width={24} height={24} alt="Whatsapp Icon" />
                        <span className={`${dmSans.className} font-medium text-base ml-2`}>Entrar em contato</span>
                    </Button>
                </div>
                <div role="group" className="self-start ml-3 mt-16 mr-20">
                    <ul className="flex flex-col gap-8">
                        <li>
                            <Image src="/icons/phone-icon.svg" width={24} height={24} alt="Phone Icon" className="inline" />
                            <span className={`${dmSans.className} text-base text-gray-600 ml-3`}>11 99845-6754</span>
                        </li>
                        <li>
                            <Image src="/icons/map-pin-icon.svg" width={24} height={24} alt="Map Pin Icon" className="inline" />
                            <span className={`${dmSans.className} text-base text-gray-600 ml-3`}>R. Amauri Souza, 346</span>
                        </li>
                        <li>
                            <Image src="/icons/mail-icon.svg" width={24} height={24} alt="Email Icon" className="inline" />
                            <span className={`${dmSans.className} text-base text-gray-600 ml-3`}>contato@beautysalon.com</span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}