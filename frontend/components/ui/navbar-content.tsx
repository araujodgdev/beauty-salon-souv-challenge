"use client"

import Scrollspy from "react-scrollspy";


export default function NavbarContent({ className, closeMobileMenu }: { className?: string, closeMobileMenu?: () => void }) {
    return (<nav>
        <ul>
            <Scrollspy
                items={["home", "about", "services", "testimonials", "contact"]}
                currentClassName="underline underline-offset-[34px] decoration-primaryGreen"
                className={className}
                offset={-100}
            >
                <li>
                    <a onClick={closeMobileMenu} href="#home">Início</a>
                </li>
                <li>
                    <a onClick={closeMobileMenu} href="#about">Sobre</a>
                </li>
                <li>
                    <a onClick={closeMobileMenu} href="#services">Serviços</a>
                </li>
                <li>
                    <a onClick={closeMobileMenu} href="#testimonials">Depoimentos</a>
                </li>
                <li>
                    <a onClick={closeMobileMenu} href="#contact">Contato</a>
                </li>
            </Scrollspy>
        </ul>
    </nav>)
}