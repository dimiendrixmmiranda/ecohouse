import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaFire, FaUsers } from "react-icons/fa";

export default function Sustentabilidade() {
    return (
        <div className="rounded-xl bg-gradient-to-l from-verde-1 via-verde-2 to-verde-3 p-4 text-white grid grid-cols-[auto_1fr] gap-4">
            <div className="flex items-center gap-2">
                <div className="relative w-14 h-14">
                    <Image alt="Arvore" src={'/assets/arvore.png'} fill unoptimized className="object-cover" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-2xl font-bold">
                        Economize dinheiro, energia e ajude o planeta.
                    </h3>
                    <span>
                        Pequenas mudanças hoje, um futuro sustentável amanhã.
                    </span>
                </div>
            </div>
            <div>
                <ul className="grid grid-cols-3">
                    <li className="flex items-center gap-2">
                        <FaUsers className="text-6xl" />
                        <div>
                            <h3 className="text-2xl font-bold">
                                +1200
                            </h3>
                            <span>Famílias Atendidas</span>
                        </div>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaFire className="text-6xl" />
                        <div>
                            <h3 className="text-2xl font-bold">
                                -85.000kWh
                            </h3>
                            <span>Economizados</span>
                        </div>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaUsers className="text-6xl" />
                        <div>
                            <h3 className="text-2xl font-bold">
                                +120 Toneladas
                            </h3>
                            <span>De CO2 evitados</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="col-span-2 mx-auto">
                <Link href={'/'} className="flex items-center gap-2 bg-branco text-verde-2 rounded-xl p-2 px-6 w-fit border border-verde-1 hover:bg-verde-3 hover:text-branco hover:scale-105 duration-300 transition-all">
                    <span>Começar agora Gratuitamente!</span>
                    <FaArrowRight />
                </Link>
            </div>
        </div>
    )
}