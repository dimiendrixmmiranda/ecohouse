import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaRegPlayCircle } from "react-icons/fa";
import { SiAffinity } from "react-icons/si";

export default function Home() {
    return (
        <section className="grid grid-cols-2 gap-4 2xl:grid-cols-[600px_1fr]">
            <div className="flex flex-col gap-4">
                <span className="uppercase text-verde-2 font-semibold bg-verde-1/10 px-2 w-fit">Plataforma Inteligente de Energia</span>
                <h2 className="text-6xl font-bold">Entenda. Economize. Transforme sua <b className="text-verde-1">Energia.</b></h2>
                <p className="text-lg max-w-[500px]">
                    O EcoHouse ajuda você a monitorar o consumo de energia da sua casa, identificar disperdícios e descobrir as melhores formas de economizar todos os meses.
                </p>
                <div>
                    <ul className="flex flex-col gap-2">
                        <li className="flex items-center gap-2 text-lg">
                            <FaCheckCircle className="text-verde-2"/>
                            <span>Análise completa do consumo</span>
                        </li>
                        <li className="flex items-center gap-2 text-lg">
                            <FaCheckCircle className="text-verde-2"/>
                            <span>Mapas de calor por cômodo</span>
                        </li>
                        <li className="flex items-center gap-2 text-lg">
                            <FaCheckCircle className="text-verde-2"/>
                            <span>Simulador de energia solar</span>
                        </li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 mx-4">
                    <Link href={'/simulacao'} className="flex items-center gap-2 border border-verde-2 p-2 rounded-xl bg-verde text-branco bg-verde-2 hover:bg-branco hover:text-verde-2 transition-all duration-300">
                        <SiAffinity />
                        <span>Começar Gratuitamente</span>
                    </Link>
                    <Link href={'/'} className="flex items-center gap-2 border border-verde-2 p-2 rounded-xl hover:bg-verde-2 hover:text-white transition-all duration-300">
                        <FaRegPlayCircle />
                        <span>Ver demonstração</span>
                    </Link>
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-4">
                    <div className="flex">
                        <div className="w-12 h-12 rounded-full border border-amber-600 bg-green-400"></div>
                        <div className="w-12 h-12 rounded-full border border-amber-600 bg-green-400 -ml-2.5"></div>
                        <div className="w-12 h-12 rounded-full border border-amber-600 bg-green-400 -ml-2.5"></div>
                    </div>
                    <div className="text-lg max-w-[300px]">
                        <p className="leading-">Mais de 1200 famílias ja estão economizando com o EcoHouse 💚</p>
                    </div>
                </div>
            </div>
            <div className="relative w-auto h-auto rounded-xl overflow-hidden">
                <Image alt="Template do Ecohouse" src={'/assets/template.png'} fill className="object-cover" />
            </div>
        </section>
    )
}