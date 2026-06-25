"use client";

import Ferramentas from "@/components/ferramentas/Ferramentas";
import Funcionamento from "@/components/funcionamento/Funcionamento";
import Home from "@/components/home/Home";
import Sustentabilidade from "@/components/sustentabilidade/Sustentabilidade";
import Template from "@/components/template/Template";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Page() {

	return (
		<Template>
			<div className="w-full bg-branco min-h-screen text-black font-oswald max-w-[1440px] mx-auto flex flex-col gap-8 p-4">
				<Home />
				<Ferramentas />
				<Funcionamento />
				<div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
					<div className="gap-4 bg-verde-3 p-4 rounded-xl text-white flex flex-col">
						<span className="uppercase rounded-xl text-verde-1 border border-verde-1 px-4 w-fit">
							Destaque
						</span>
						<div className="text-shadow-[1px_1px_2px_black]">
							<h2 className="text-2xl font-bold">
								Mapa de calor da residência
							</h2>
							<p>Veja de forma visual quais cômodos consomem mais energia.</p>
						</div>
						<div className="grid grid-cols-[1fr_100px] gap-x-6">
							<div className="relative w-full h-[300px]">
								<Image alt="Planta baixa exemplo" src={'/assets/planta-baixa.png'} fill className="object-cover" />
							</div>
							<ul className="flex flex-col gap-2 text-shadow-[1px_1px_2px_black] w-full row-span-2">
								<li className="flex items-center gap-1 bg-verde-2 p-2 rounded-xl w-full">
									<div className="relative w-5 h-5 rounded-full bg-red-500" />
									<div>
										<h3 className="text-lg leading-4">Cozinha</h3>
										<span className="text-sm leading-4">180kWh</span>
									</div>
								</li>
								<li className="flex items-center gap-1 bg-verde-2 p-2 rounded-xl w-full">
									<div className="relative w-5 h-5 rounded-full bg-red-500" />
									<div>
										<h3 className="text-lg leading-4">Sala</h3>
										<span className="text-sm leading-4">180kWh</span>
									</div>
								</li>
								<li className="flex items-center gap-1 bg-verde-2 p-2 rounded-xl w-full">
									<div className="relative w-5 h-5 rounded-full bg-red-500" />
									<div>
										<h3 className="text-lg leading-4">Quarto</h3>
										<span className="text-sm leading-4">180kWh</span>
									</div>
								</li>
								<li className="flex items-center gap-1 bg-verde-2 p-2 rounded-xl w-full">
									<div className="relative w-5 h-5 rounded-full bg-red-500" />
									<div>
										<h3 className="text-lg leading-4">Banheiro</h3>
										<span className="text-sm leading-4">180kWh</span>
									</div>
								</li>
							</ul>
							<Link href={'/'} className="text-verde-1 flex items-center gap-2">
								<p>Saiba mais sobre o mapa de calor</p>
								<FaArrowRight />
							</Link>
						</div>
					</div>
					<div className="gap-4 bg-orange-600 p-4 rounded-xl text-white flex flex-col">
						<span className="uppercase rounded-xl text-orange-200 border border-orangetext-orange-600 px-4 w-fit">
							Novidade
						</span>
						<div className="text-shadow-[1px_1px_2px_black]">
							<h2 className="text-2xl font-bold">
								Simulador de Energia Solar
							</h2>
							<p>Descubra o tamanho ideal do seu sistema solar e o retorno do investimento.</p>
						</div>
						<div className="grid grid-cols-[1fr_100px] gap-x-6">
							<div className="relative w-full h-[300px] rounded-xl overflow-hidden">
								<Image alt="Casa com painéis solares" src={'/assets/casa.png'} fill className="object-cover" />
							</div>
							<ul className="flex flex-col gap-2 text-shadow-[1px_1px_2px_black] w-full">
								<li className="flex items-center gap-1 bg-orange-300 p-2 rounded-xl w-full">
									<div className="relative w-5 h-5 rounded-full bg-red-500" />
									<div>
										<h3 className="text-lg leading-4">Consumo mensal</h3>
										<span className="text-sm leading-4">487 kWh</span>
									</div>
								</li>
								<li className="flex items-center gap-1 bg-orange-300 p-2 rounded-xl w-full">
									<div className="relative w-5 h-5 rounded-full bg-red-500" />
									<div>
										<h3 className="text-lg leading-4">Painéis necessários</h3>
										<span className="text-sm leading-4">14 Painéis</span>
									</div>
								</li>
								<li className="flex items-center gap-1 bg-orange-300 p-2 rounded-xl w-full">
									<div className="relative w-5 h-5 rounded-full bg-red-500" />
									<div>
										<h3 className="text-lg leading-4">Economia mensal</h3>
										<span className="text-sm leading-4">R$420,00</span>
									</div>
								</li>
								<li className="flex items-center gap-1 bg-orange-300 p-2 rounded-xl w-full">
									<div className="relative w-5 h-5 rounded-full bg-red-500" />
									<div>
										<h3 className="text-lg leading-4">Retorno do investimento</h3>
										<span className="text-sm leading-4">4.9 anos</span>
									</div>
								</li>
							</ul>
							<Link href={'/'} className="text-orange-200 flex items-center gap-2">
								<p>Simular meu sistema solar</p>
								<FaArrowRight />
							</Link>
						</div>
					</div>
				</div>
				<Sustentabilidade />
			</div>
		</Template>
	)
}