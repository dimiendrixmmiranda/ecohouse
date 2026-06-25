import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiBox } from "react-icons/bi";

type MenuActive =
    | "recursos"
    | "funcionamento"
    | "beneficios"
    | "simulador"
    | "sobre"

export default function Header() {
    const [menuActive, setMenuActive] = useState<MenuActive | null>(null);
    const pathname = usePathname()

    function getLinkClass(path: string) {
        const ativo = pathname === path;

        return `
        flex items-center gap-1 p-2 py-1 text-sm lg:text-lg 
        ${ativo
                ? 'scale-105 border-b border-verde-2 text-verde-2'
                : 'hover:scale-105 hover:border-b hover:border-verde-2'
            }
    `;
    }

    console.log(pathname)

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
                        <Link href="/menu/recursos" className={getLinkClass('/menu/recursos')}>
                            <BiBox className="mt-[1px]" />
                            <span>Recursos</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/menu/funcionamento" className={getLinkClass('/menu/funcionamento')}>
                            <BiBox className="mt-[1px]" />
                            <span>Como Funciona</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/menu/beneficios" className={getLinkClass('/menu/beneficios')}>
                            <BiBox className="mt-[1px]" />
                            <span>Benefícios</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/menu/simulador" className={getLinkClass('/menu/simulador')}>
                            <BiBox className="mt-[1px]" />
                            <span>Simulador Solar</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/menu/sobre" className={getLinkClass('/menu/sobre')}>
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