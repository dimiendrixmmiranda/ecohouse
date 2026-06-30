'use client'
import Template from "@/components/template/Template";
import Image from "next/image";
import { useState } from "react";
import { FaCalculator, FaHeart, FaHouseChimney, FaLeaf, FaRegSun } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import { ImShield } from "react-icons/im";
import { IoIosOutlet } from "react-icons/io";
import { SlEnergy } from "react-icons/sl";
import { TbTargetArrow } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";

export default function Page() {
    const [activeStep, setActiveStep] = useState<number | null>(null);
    const steps = [
        {
            icon: <FaHouseChimney />,
            title: "Análise Inteligente",
            description: "Analisamos o consumo da sua casa e identificamos oportunidades de economia.",
        },
        {
            icon: <VscGraph />,
            title: "Visualização Clara",
            description: "Apresentamos relatórios e gráficos fáceis de entender para o seu dia a dia.",
        },
        {
            icon: <FaRegSun />,
            title: "Simulação Solar",
            description: "Simule sistemas fotovoltaicos e veja o potencial de economia com energia solar.",
        },
        {
            icon: <TbTargetArrow />,
            title: "Metas e Acompanhamento",
            description: "Defina metas, acompanhe seu progresso e reduza sua conta de energia",
        },
    ];
    return (
        <Template>
            <div className="flex flex-col gap-8 max-w-[1440px] mx-auto font-oswald">
                <div className="flex flex-col gap-4 p-4 lg:grid lg:grid-cols-2 xl:p-8">
                    <div className="text-black flex flex-col gap-2 font-oswald">
                        <span className="uppercase font-bold text-verde-2">Sobre nós</span>
                        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Tecnologia e sustentabilidade para um futuro melhor</h2>
                        <p className="md:text-xl">O EcoHouse nasceu com o propósito de ajudar pessoas a entenderem e reduzirem o consumo de energia em suas residências, promovendo economia e contribuindo para um planeta mais sustentável.</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-lg bg-verde-1 flex justify-center items-center">
                                    <FaLeaf className="text-verde-3" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold leading-5">+10 mil</h3>
                                    <span>Usuários Ativos</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-lg bg-verde-1 flex justify-center items-center">
                                    <SlEnergy />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold leading-5">2GWh</h3>
                                    <span>Economia Gerada</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative w-full h-[400px] rounded-xl overflow-hidden z-10">
                            <Image alt="Imagem casa" src={'/assets/casa-2.png'} fill className="object-cover" />
                        </div>
                        <div className="bg-white rounded-xl w-full text-black grid grid-cols-[80px_1fr] gap-6 absolute z-[999] -bottom-5 right-8 p-4 max-w-[400px] shadow-[0px_0px_2px_1px_black]">
                            <div className="text-4xl flex justify-center items-center rounded-full bg-verde-1 w-[80px] h-[80px] my-auto">
                                <FaLeaf className="text-verde-3" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Nosso compromisso</h3>
                                <span>Acreditamos que pequenas mudanças no consumo de energia podem gerar grandes impactos no mundo.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-black bg-verde-1/10 py-4 flex flex-col gap-2 justify-center items-center w-full">
                    <h3 className="uppercase font-bold text-verde-2 text-lg">Nossa Missão</h3>
                    <h2 className="font-black text-4xl">Como ajudamos você</h2>
                    <span className="text-lg max-w-[400px] text-center leading-6">
                        Transformamos dados em insights simples e práticos para que você tome melhores decisões e economize energia.
                    </span>
                    <div className="flex w-full mt-4">
                        <ul className="flex justify-between items-start w-full">
                            {steps.map((step, index) => (
                                <li
                                    key={index}
                                    className="relative flex flex-col items-center w-full"
                                    onMouseEnter={() => setActiveStep(index)}
                                    onMouseLeave={() => setActiveStep(null)}
                                >
                                    {/* Linha */}
                                    {index < steps.length - 1 && (
                                        <div className="absolute top-18 left-1/2 w-full px-10">
                                            <div className="h-[2px] bg-zinc-200 rounded-full overflow-hidden">
                                                <div
                                                    className={`
                                                    h-full bg-verde-3 transition-all duration-500
                                                    ${activeStep !== null &&
                                                            index < activeStep
                                                            ? "w-full"
                                                            : "w-0"
                                                        }
                                            `}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* Número */}
                                    <div
                                        className={`
                                        w-7 h-7 rounded-full flex items-center justify-center text-white z-10
                                        transition-all duration-300
                                        ${activeStep !== null &&
                                                index <= activeStep
                                                ? "bg-verde-3"
                                                : "bg-verde-2"
                                            }
                                `}
                                    >
                                        {index + 1}
                                    </div>

                                    {/* Ícone */}
                                    <div
                                        className={`
                                        mt-4 p-4 rounded-full text-4xl z-10
                                        transition-all duration-300
                                        ${activeStep !== null &&
                                                index <= activeStep
                                                ? "bg-verde-2 text-branco scale-110"
                                                : "text-verde-3 border border-verde-3"
                                            }
                                `}
                                    >
                                        {step.icon}
                                    </div>

                                    <div className="mt-4 text-center max-w-52">
                                        <h3 className="font-bold">{step.title}</h3>
                                        <p className="text-sm text-zinc-500">
                                            {step.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="text-black py-4 flex flex-col gap-2 justify-center items-center w-full">
                    <h3 className="uppercase font-bold text-verde-2 text-lg">Nossos valores</h3>
                    <h2 className="font-black text-4xl">O que nos move</h2>
                    <div className="grid grid-cols-4 gap-8 mt-4">
                        <div className="flex flex-col justify-center items-center gap-2 border border-verde-3 rounded-xl p-4 text-center hover:scale-105 duration-300 transition-all cursor-pointer">
                            <div className="rounded-full text-4xl p-4 bg-verde-1 text-verde-3 border border-verde-3 w-fit">
                                <FaLeaf />
                            </div>
                            <h3 className="text-2xl font-bold">Sustentabilidade</h3>
                            <span>Promovemos o uso consciente de energia para preservar nossso planeta.</span>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 border border-verde-3 rounded-xl p-4 text-center hover:scale-105 duration-300 transition-all cursor-pointer">
                            <div className="rounded-full text-4xl p-4 bg-verde-1 text-verde-3 border border-verde-3 w-fit">
                                <ImShield />
                            </div>
                            <h3 className="text-2xl font-bold">Transparência</h3>
                            <span>Acreditamos em informações claras e acessíveis para todos.</span>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 border border-verde-3 rounded-xl p-4 text-center hover:scale-105 duration-300 transition-all cursor-pointer">
                            <div className="rounded-full text-4xl p-4 bg-verde-1 text-verde-3 border border-verde-3 w-fit">
                                <HiUsers />
                            </div>
                            <h3 className="text-2xl font-bold">Inovação</h3>
                            <span>Utilizamos tecnologia para gerar soluções inteligentes e eficientes.</span>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 border border-verde-3 rounded-xl p-4 text-center hover:scale-105 duration-300 transition-all cursor-pointer">
                            <div className="rounded-full text-4xl p-4 bg-verde-1 text-verde-3 border border-verde-3 w-fit">
                                <FaHeart />
                            </div>
                            <h3 className="text-2xl font-bold">Inovação</h3>
                            <span>Utilizamos tecnologia para gerar soluções inteligentes e eficientes.</span>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-cover bg-center mx-4 rounded-xl overflow-hidden p-4 text-shadow-[1px_1px_2px_black] flex flex-col gap-4 mb-6 md:p-8"
                    style={{
                        backgroundImage: "url('/assets/fundo-casa-verde.png')",
                    }}
                >
                    <h3 className="uppercase font-bold text-verde-2 text-lg">Vem com a gente</h3>
                    <h2 className="font-black text-4xl xl:text-5xl xl:max-w-[600px]">Juntos, podemos fazer a diferença!</h2>
                    <span className="text-lg max-w-[400px] leading-6">
                        Cada escolha consciente conta. Comece hoje mesmo a transformar o consumo da sua conta e faça parte dessa mudança.
                    </span>
                    <button className="bg-verde-3 text-2xl text-shadow-[1px_1px_2px_black] pt-1 pb-2 rounded-xl w-fit px-8">Comece agora</button>
                </div>
            </div>
        </Template>
    )
}