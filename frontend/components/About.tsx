import Gradient from "@/components/ui/gradient";
import { dmSans, poppins } from "@/lib/fonts";
import Image from "next/image";

export default function About() {
    return (
        <div className="scroll-mt-20" id="about">
            <section className="pt-20 lg:flex lg:gap-10">
                <Image src="/about-us-img.png" width={773} height={446} alt="Três mulheres brancas sorrindo, lado a lado, de frente a um fundo branco. A da esquerda segurando uma escova de cabelo, e as demais segurando uma tesoura próximo ao cabelo." className="lg:max-w-[600px]" />
                <div className={`${dmSans.className} flex flex-col items-start px-6 text-gray-600 gap-6 lg:max-w-[700px]`}>
                    <h2 className={`${poppins.className} font-bold text-3xl lg:text-4xl mt-10 text-black`}>
                        Sobre nós
                    </h2>
                    <div className="flex flex-col lg:justify-start lg:items-center gap-6 lg:max-w-[600px]">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus. </p>
                        <p>In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec luctus, nunc finibus elementum suscipit, tortor augue vulputate sapien, vitae feugiat enim augue sed.</p>
                        <p>Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat, nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend dolor. Nullam eget dui at sem ullamcorper luctus.</p>
                    </div>
                </div>
            </section>
            <Gradient direction="r" />
        </div>
    )
}