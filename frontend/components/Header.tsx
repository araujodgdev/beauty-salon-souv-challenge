"use client"

import { dmSans, poppins } from "@/lib/fonts"
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import NavbarContent from "./ui/navbar-content"
import { useState } from "react"



export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMobileMenu = () => setIsOpen(false);

    return (
        <header className="flex items-center bg-gray-50 p-6 lg:px-32 lg:justify-between fixed w-screen border-b-2 bg-opacity-[0.9] backdrop-blur-md z-50">
            <h2 className={`text-dark ${poppins.className} font-bold text-2xl`}>
                beauty<span className="text-primaryGreen">salon</span>.
            </h2>

            {/*Mobile Menu*/}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden absolute top-6 right-6">
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                        <Menu className="size-6 text-primaryGreen" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-screen">
                   <NavbarContent closeMobileMenu={closeMobileMenu} className={`h-screen flex flex-col items-center justify-center gap-16 text-3xl font-bold ${poppins.className}`} />
                </SheetContent>
            </Sheet>

            {/*Desktop NavBar*/}
            <NavbarContent className={`hidden lg:flex lg:items-center lg:justify-between lg:w-[438px] ${dmSans.className}`}/>
        </header>
    )
}