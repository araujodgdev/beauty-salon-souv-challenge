import { dmSans, poppins } from "@/lib/fonts";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="bg-primaryGreen scroll-mt-20 w-screen pt-20 pb-16" id="services">
            <section className="flex flex-col items-start px-8 lg:flex-row lg:px-[250px] lg:justify-between">
                <div role="group" className={`${dmSans.className}`}>
                    <h2 className={`${poppins.className} font-bold text-2xl`}>
                        beauty<span className="text-gray-50">salon</span>.
                    </h2>
                    <p className="text-gray-50 mt-6">©2021 Beautysalon.</p>
                    <p className="text-gray-50 mt-3">Todos os direitos reservados.</p>
                </div>
                <div role="group" className="mt-8">
                    <ul className="flex gap-8">
                        <li>
                            <a href="#"><Image src="/icons/instagram-icon.svg" width={24} height={24} alt="Instagram Icon" /></a>
                        </li>   
                        <li>
                            <a href="#"><Image src="/icons/facebook-icon.svg" width={24} height={24} alt="Facebook Icon" /></a>
                        </li>   
                        <li>
                            <a href="#"><Image src="/icons/youtube-icon.svg" width={24} height={24} alt="Youtube Icon" /></a>
                        </li>   
                    </ul>
                </div>
            </section>
        </div>
    )
}