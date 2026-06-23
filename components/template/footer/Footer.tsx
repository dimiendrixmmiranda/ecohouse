import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaArrowRight, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="p-2 font-oswald lg:grid lg:grid-cols-[300px_1fr_1fr_1fr_250px] gap-6 lg:p-6 max-w-[1440px] mx-auto 2xl:gap-10">
            <div className="flex flex-col gap-4">
                <Link href={'/'} className="flex items-center gap-2">
                    <div className="relative w-14 h-10">
                        <Image alt="Logo da Ecohouse" src={'/logo/logo-ecohouse.png'} fill className="object-cover" />
                    </div>
                    <div>
                        <h2 className="font-koulen leading-5 font-bold text-3xl mt-2 text-shadow-[2px_2px_3px_black]">EcoHouse</h2>
                        <span className="text-sm -mt-4">Energia inteligente para o seu lar</span>
                    </div>
                </Link>
                <div>
                    <span>
                        "A EcoHouse é a plataforma completa para você entender, monitorar e economizar energia na sua residência"
                    </span>
                </div>
                <div>
                    <ul className="grid grid-cols-4">
                        <li className="flex justify-center items-center text-3xl">
                            <Link href={'/'}><FaFacebook /></Link>
                        </li>
                        <li className="flex justify-center items-center text-3xl">
                            <Link href={'/'}><AiFillInstagram /></Link>
                        </li>
                        <li className="flex justify-center items-center text-3xl">
                            <Link href={'/'}><FaLinkedin /></Link>
                        </li>
                        <li className="flex justify-center items-center text-3xl">
                            <Link href={'/'}><FaGithub /></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Produto</h3>
                <ul>
                    <li>
                        <Link href={'/'} className="flex items-center hover:scale-105 hover:text-verde-1 transition-all duration-300">Recursos</Link>
                    </li>
                    <li>
                        <Link href={'/'} className="flex items-center hover:scale-105 hover:text-verde-1 transition-all duration-300">Simulador Solar</Link>
                    </li>
                    <li>
                        <Link href={'/'} className="flex items-center hover:scale-105 hover:text-verde-1 transition-all duration-300">Mapa de Calor</Link>
                    </li>
                    <li>
                        <Link href={'/'} className="flex items-center hover:scale-105 hover:text-verde-1 transition-all duration-300">Atualizações</Link>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Empresa</h3>
                <ul>
                    <li>
                        <Link href={'/'} className="flex items-center hover:scale-105 hover:text-verde-1 transition-all duration-300">Sobre Nós</Link>
                    </li>
                    <li>
                        <Link href={'/'} className="flex items-center hover:scale-105 hover:text-verde-1 transition-all duration-300">Missão</Link>
                    </li>
                    <li>
                        <Link href={'/'} className="flex items-center hover:scale-105 hover:text-verde-1 transition-all duration-300">Sustentabilidade</Link>
                    </li>
                    <li>
                        <Link href={'/'} className="flex items-center hover:scale-105 hover:text-verde-1 transition-all duration-300">Contato</Link>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Suporte</h3>
                <ul>
                    <li>
                        <Link href={'/'} className="flex items-center hover:scale-105 hover:text-verde-1 transition-all duration-300">Central de Ajuda</Link>
                    </li>
                    <li>
                        <Link href={'/'} className="flex items-center hover:scale-105 hover:text-verde-1 transition-all duration-300">Tutoriais</Link>
                    </li>
                    <li>
                        <Link href={'/'} className="flex items-center hover:scale-105 hover:text-verde-1 transition-all duration-300">Privacidade</Link>
                    </li>
                    <li>
                        <Link href={'/'} className="flex items-center hover:scale-105 hover:text-verde-1 transition-all duration-300">Temos de uso</Link>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="font-bold text-xl">Fique por dentro!</h3>
                <span>Receba dicas de economia e novidades do EcoHouse</span>
                <div className="relative">
                    <input type="email" name="email" id="email" className="h-[30px] rounded-xl bg-zinc-300 w-full text-zinc-800 p-2" />
                    <button className="absolute right-0 top-0 bg-verde-2 rounded-r-xl h-[30px] w-[30px] flex justify-center items-center"><FaArrowRight /></button>
                </div>
            </div>
            <div className="col-span-5 flex justify-center items-center text-center">
                <span>© 2026 EcoHouse. Todos os direitos reservados ©</span>
            </div>
        </footer>
    )
}