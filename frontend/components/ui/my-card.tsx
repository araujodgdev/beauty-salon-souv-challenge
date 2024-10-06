import { dmSans, poppins } from "@/lib/fonts";
import Image from "next/image";

export default function MyCard({icon, title, content}: {icon: string, title: string, content: string}) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 py-8 px-6 border-b-4 border-primaryGreen w-[330px] h-[372px] shadow-lg ring-offset-8 ">
            <Image src={icon} width={80} height={80} alt="" />
            <h2 className={`${poppins.className} text-2xl font-bold`}>{title}</h2>
            <p className={`${dmSans.className} text-gray-600 max-w-[280px] text-center leading-relaxed`}>{content}</p>
        </div>
    )
}