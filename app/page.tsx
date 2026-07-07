"use client";

import Ferramentas from "@/components/ferramentas/Ferramentas";
import Funcionamento from "@/components/funcionamento/Funcionamento";
import Home from "@/components/home/Home";
import Sustentabilidade from "@/components/sustentabilidade/Sustentabilidade";
import Template from "@/components/template/Template";
import Image from "next/image";
import Link from "next/link";
import { BsGraphUpArrow, BsPiggyBank } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { FaSolarPanel } from "react-icons/fa6";
import { LuClock11 } from "react-icons/lu";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { TbLeaf2 } from "react-icons/tb";

export default function Page() {

	return (
		<Template>
			<div className="w-full bg-branco min-h-screen text-black font-oswald max-w-[1440px] mx-auto flex flex-col gap-8 p-4">
				<Home />
				<Ferramentas />
				<Funcionamento />
				<div className="flex items-center justify-between">
					<div className="flex flex-col gap-2 text-verde-3">
						<div>
							<h2 className="text-5xl font-bold ">
								Transforme energia em economia.
							</h2>
							<h2 className="text-5xl font-bold">
								Transforme hoje, o amanhã agradece
							</h2>
						</div>
						<div>
							<p className="text-lg">
								Visiualize o consumo da sua residência, simule energia solar e economize de forma inteligente.
							</p>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<div className="bg-white rounded-xl flex p-2 w-fit text-verde-3 shadow-[0px_0px_2px_black]">
							<div className="rounded-xl text-6xl p-2">
								<TbLeaf2 />
							</div>
							<div className="leading-5 flex flex-col my-auto">
								<h3 className="text-sm">Impacto Positivo</h3>
								<h4 className="text-xl font-bold -mt-1">+120</h4>
								<span className="text-sm -mt-1">Toneladas de CO2 evitadas</span>
							</div>
						</div>
						<div className="bg-white rounded-xl flex p-2 w-fit text-verde-3 shadow-[0px_0px_2px_black]">
							<div className="rounded-xl text-6xl p-2 text-yellow-600">
								<MdOutlineEnergySavingsLeaf />
							</div>
							<div className="leading-5 flex flex-col my-auto">
								<h3 className="text-sm">Impacto Positivo</h3>
								<h4 className="text-xl font-bold -mt-1">+120</h4>
								<span className="text-sm -mt-1">Toneladas de CO2 evitadas</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
					<div className="gap-4 bg-verde-3/80 p-4 rounded-xl text-white flex flex-col">
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
							<Link href={'/'} className="flex items-center gap-2 text-white border border-verde-1 w-fit p-2 rounded-xl bg-verde-3">
								<p>Saiba mais sobre o mapa de calor</p>
								<FaArrowRight />
							</Link>
						</div>
					</div>
					<div className="gap-4 bg-orange-600/10 border border-orange-600 p-4 rounded-xl text-white flex flex-col">
						<span className="uppercase rounded-xl text-orange-600 border border-orange-600 px-4 w-fit">
							Novidade
						</span>
						<div className="text-black">
							<h2 className="text-2xl font-bold">
								Simulador de Energia Solar
							</h2>
							<p>Descubra o tamanho ideal do seu sistema solar e o retorno do investimento.</p>
						</div>
						<div className="grid grid-cols-[1fr_150px] gap-x-6 gap-4">
							<div className="relative w-full h-[300px] rounded-xl overflow-hidden">
								<Image alt="Casa com painéis solares" src={'/assets/casa.png'} fill className="object-cover" />
							</div>
							<ul className="flex flex-col gap-2 w-full">
								<li className="grid grid-cols-[40px_1fr] gap-1 bg-orange-600/10 border border-orange-600 text-black p-2 rounded-xl w-full">
									<div className="relative w-10 h-10 my-auto rounded-full text-orange-600 flex items-center justify-center text-xl">
										<BsGraphUpArrow />
									</div>
									<div>
										<h3 className="text-sm leading-4">Consumo mensal</h3>
										<span className="text-lg leading-4">487 kWh</span>
									</div>
								</li>
								<li className="grid grid-cols-[40px_1fr] gap-1 bg-orange-600/10 border border-orange-600 text-black p-2 rounded-xl w-full">
									<div className="relative w-10 h-10 my-auto rounded-full text-orange-600 flex items-center justify-center text-xl">
										<FaSolarPanel />
									</div>
									<div>
										<h3 className="text-sm leading-4">Painéis Necessários</h3>
										<span className="text-lg leading-4">14 Painéis</span>
									</div>
								</li>
								<li className="grid grid-cols-[40px_1fr] gap-1 bg-orange-600/10 border border-orange-600 text-black p-2 rounded-xl w-full">
									<div className="relative w-10 h-10 my-auto rounded-full text-orange-600 flex items-center justify-center text-xl">
										<BsPiggyBank />
									</div>
									<div>
										<h3 className="text-sm leading-4">Economia Mensal</h3>
										<span className="text-lg leading-4">R$420,00</span>
									</div>
								</li>
								<li className="grid grid-cols-[40px_1fr] gap-1 bg-orange-600/10 border border-orange-600 text-black p-2 rounded-xl w-full">
									<div className="relative w-10 h-10 my-auto rounded-full text-orange-600 flex items-center justify-center text-xl">
										<LuClock11 />
									</div>
									<div>
										<h3 className="text-sm leading-4">Retorno do Investimento</h3>
										<span className="text-lg leading-4">4,9 anos</span>
									</div>
								</li>
							</ul>
							<Link href={'/'} className="text-orange-600 flex items-center gap-2 border border-orange-600 p-2 rounded-xl w-fit hover:bg-orange-600 transition-all duration-300 hover:text-white hover:scale-105">
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