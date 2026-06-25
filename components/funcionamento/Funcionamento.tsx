'use client'
import { useState } from "react";
import { FaCalculator, FaHouseChimney } from "react-icons/fa6";
import { IoIosOutlet } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";

export default function Funcionamento() {
    const [activeStep, setActiveStep] = useState<number | null>(null);
    const steps = [
        {
            icon: <FaHouseChimney />,
            title: "Cadastre sua casa",
            description: "Adicione os cômodos da sua residência.",
        },
        {
            icon: <IoIosOutlet />,
            title: "Adicione seus equipamentos",
            description: "Informe os aparelhos e o tempo médio de utilização.",
        },
        {
            icon: <FaCalculator />,
            title: "Nós calculamos para você",
            description: "O EcoHouse calcula o consumo, custos e desperdícios.",
        },
        {
            icon: <VscGraph />,
            title: "Visualize e economize",
            description: "Acompanhe seus dados e reduza sua conta de luz.",
        },
    ];

    return (
        <section className="flex flex-col gap-4">
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-4xl font-oswald">Como Funciona?</h2>
                <span>Em poucos passos, você tem controle total de energia da sua casa.</span>
            </div>
            <div>
                <ul className="flex justify-between items-start">
                    {steps.map((step, index) => (
                        <li
                            key={index}
                            className="relative flex flex-col items-center w-full"
                            onMouseEnter={() => setActiveStep(index)}
                            onMouseLeave={() => setActiveStep(null)}
                        >
                            {/* Linha */}
                            {index < steps.length - 1 && (
                                <div className="absolute top-14 left-1/2 w-full px-10">
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
                                        : "bg-verde-1/20 text-zinc-700"
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
        </section>
    )
}