'use client'

import Template from "@/components/template/Template";
import Image from "next/image";
import { BsLeaf } from "react-icons/bs";
import { LuTrees } from "react-icons/lu";

export default function Page() {
    return (
        <Template>
            <div className="text-white font-oswald bg-verde-3 min-h-[80vh] flex justify-center items-center">
                <div className="max-w-[1200px] w-full grid grid-cols-2 gap-4 rounded-xl overflow-hidden border border-zinc-400">
                    <div>
                        <div className="relative h-full min-h-[700px] p-8 flex flex-col gap-4">
                            <Image
                                src="/assets/casa-formulario.png"
                                alt="Casa sustentável"
                                fill
                                className="object-cover"
                            />

                            {/* Overlay escuro */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/30" />

                            {/* Glow verde */}
                            <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-verde-3/20 blur-3xl" />

                            {/* Conteúdo */}
                            <div className="relative z-10 flex items-center gap-5">
                                <div className="relative h-20 w-20 rounded-xl bg-white/10 backdrop-blur-md p-3">
                                    <Image
                                        src="/logo/logo-ecohouse.png"
                                        alt="EcoHouse"
                                        fill
                                        className="object-contain p-3"
                                    />
                                </div>
                                <div className="text-white">
                                    <h2 className="text-4xl font-bold">
                                        <span className="text-verde-1">Eco</span>House
                                    </h2>
                                    <p className="text-zinc-300 mt-2">
                                        Energia Inteligente, futuro sustentável.
                                    </p>
                                </div>
                            </div>
                            <div className="relative z-20 flex items-center gap-2 bg-verde-3 w-fit px-4 py-2 rounded-xl">
                                <BsLeaf />
                                <p>Sustentabilidade na Prática</p>
                            </div>
                            <div className="relative flex flex-col gap-4 max-w-[500px]">
                                <h2 className="font-bold text-5xl">Simule. Ecomonomize <b className="text-verde-2">Transforme</b></h2>
                                <span className="max-w-[320px] text-lg">Descubra o potencial da sua casa para economizar energia e construir um futuro mais sustentável.</span>
                            </div>
                            <div className="relative">
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-15 h-15 rounded-full bg-verde-1"></div>
                                        <div className="flex flex-col">
                                            <h3 className="text-lg font-bold">Simulação Precisa</h3>
                                            <span className="max-w-[300px] leading-5">Cálculos avançados para estimativas confiáveis do seu consumo.</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-15 h-15 rounded-full bg-verde-1"></div>
                                        <div className="flex flex-col">
                                            <h3 className="text-lg font-bold">Simulação Precisa</h3>
                                            <span className="max-w-[300px] leading-5">Cálculos avançados para estimativas confiáveis do seu consumo.</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-15 h-15 rounded-full bg-verde-1"></div>
                                        <div className="flex flex-col">
                                            <h3 className="text-lg font-bold">Simulação Precisa</h3>
                                            <span className="max-w-[300px] leading-5">Cálculos avançados para estimativas confiáveis do seu consumo.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="flex items-center gap-2 p-4 bg-verde-3/50 rounded-xl w-fit">
                                    <LuTrees  className="text-5xl"/>
                                    <p className="max-w-[230px] text-lg">Cada escolha consciente hoje, <b className="text-verde-1">constrói um amanhã melhor.</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        aqui
                    </div>
                </div>
            </div>
        </Template>
    )
}