import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiBox } from "react-icons/bi";

type MenuActive =
    | "recursos"
    | "como-funciona"
    | "beneficios"
    | "simulador"
    | "sobre"

export default function Header() {
    const [menuActive, setMenuActive] = useState<MenuActive | null>(null);
    return (
        <header className="bg-cinza p-2 font-oswald flex items-center gap-4 md:grid md:grid-cols-[auto_auto_36px]">
            <Link href={'/'} className="flex items-center gap-2">
                <div className="relative w-12 h-9 lg:w-14 lg:h-12">
                    <Image alt="Logo da Ecohouse" src={'/logo/logo-ecohouse.png'} fill className="object-cover" />
                </div>
                <h2 className="font-koulen font-bold text-3xl mt-1 text-shadow-[2px_2px_3px_black] lg:text-4xl">EcoHouse</h2>
            </Link>

            <div>
                <ul className="flex items-center gap-4">
                    <li>
                        <Link href={'/'} onClick={() => setMenuActive('recursos')} className={`flex items-center gap-1 p-2 py-1 text-sm lg:text-lg ${menuActive === "recursos" ? 'border-b-2 border-verde-3 scale-105 transition-all duration-300': ''}`}>
                            <BiBox className="mt-[1px]" />
                            <span>Recursos</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} onClick={() => setMenuActive('como-funciona')} className={`flex items-center gap-1 p-2 py-1 text-sm lg:text-lg ${menuActive === "como-funciona" ? 'border-b-2 border-verde-3 scale-105 transition-all duration-300': ''}`}>
                            <BiBox className="mt-[1px]" />
                            <span>Como Funciona</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} onClick={() => setMenuActive('beneficios')} className={`flex items-center gap-1 p-2 py-1 text-sm lg:text-lg ${menuActive === "beneficios" ? 'border-b-2 border-verde-3 scale-105 transition-all duration-300': ''}`}>
                            <BiBox className="mt-[1px]" />
                            <span>Benefícios</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} onClick={() => setMenuActive('simulador')} className={`flex items-center gap-1 p-2 py-1 text-sm lg:text-lg ${menuActive === "simulador" ? 'border-b-2 border-verde-3 scale-105 transition-all duration-300': ''}`}>
                            <BiBox className="mt-[1px]" />
                            <span>Simulador Solar</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/'} onClick={() => setMenuActive('sobre')} className={`flex items-center gap-1 p-2 py-1 text-sm lg:text-lg ${menuActive === "sobre" ? 'border-b-2 border-verde-3 scale-105 transition-all duration-300': ''}`}>
                            <BiBox className="mt-[1px]" />
                            <span>Sobre</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="flex justify-center items-center">
                <div className="w-8 h-8 rounded-full bg-zinc-700"></div>
            </div>
        </header>
    )
}