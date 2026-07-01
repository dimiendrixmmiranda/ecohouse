'use client'
import Template from "@/components/template/Template";
import { useLocalidades } from "@/hooks/useLocalidades";
import { useState } from "react";
import { FaRegSave } from "react-icons/fa";
import { FaCheck, FaLeaf } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { LuSofa } from "react-icons/lu";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { RiSofaLine } from "react-icons/ri";

export default function Page() {
    const {
        estados,
        cidades,
        loadingEstados,
        loadingCidades,
        buscarCidades,
    } = useLocalidades();

    const [visible, setVisible] = useState(false);

    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [nomeDaResidencia, setNomeDaResidencia] = useState("")
    const [tipoDeResidencia, setTipoDeResidencia] = useState("")
    const [qtdeDeMoradores, setQtdeDeMoradores] = useState("")
    const [tarifaDeEnergia, setTarifaDeEnergia] = useState("")

    const [nomeDoComodo, setNomeDoComodo] = useState("")

    return (
        <Template>
            <div className="text-black max-w-[1440px] mx-auto p-4 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-4xl">Simulador de Consumo de Energia</h2>
                    <p>Preencha as infromações da sua casa para simular o consumo.</p>
                </div>
                <div className="border border-verde-3 rounded-xl p-4 grid grid-cols-4">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-verde-3 flex justify-center items-center text-white text-shadow-[1px_1px_2px_black]">
                            {/* <FaCheck /> */}
                            <p>1</p>
                        </div>
                        <div className="flex flex-col my-auto">
                            <h3 className="font-bold text-xl leading-5">1.Residência</h3>
                            <span className="text-sm">Informações da sua casa.</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-verde-3 flex justify-center items-center text-white text-shadow-[1px_1px_2px_black]">
                            {/* <FaCheck /> */}
                            <p>2</p>
                        </div>
                        <div className="flex flex-col my-auto">
                            <h3 className="font-bold text-xl leading-5">2.Cômodos</h3>
                            <span className="text-sm">Adicione os comodos.</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-verde-3 flex justify-center items-center text-white text-shadow-[1px_1px_2px_black]">
                            {/* <FaCheck /> */}
                            <p>3</p>
                        </div>
                        <div className="flex flex-col my-auto">
                            <h3 className="font-bold text-xl leading-5">3.Equipamentos</h3>
                            <span className="text-sm">Adicione os aparelhos.</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-verde-3 flex justify-center items-center text-white text-shadow-[1px_1px_2px_black]">
                            {/* <FaCheck /> */}
                            <p>4</p>
                        </div>
                        <div className="flex flex-col my-auto">
                            <h3 className="font-bold text-xl leading-5">4.Simulação</h3>
                            <span className="text-sm">Revise e simule.</span>
                        </div>
                    </div>
                </div>
                <div className="border border-zinc-400 rounded-xl p-4">
                    <div className="flex items-center gap-2">
                        <IoHomeOutline className="text-verde-3 text-2xl" />
                        <h3 className="font-bold text-xl">Informações da Residência</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4 xl:grid-cols-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="nomeDaResidencia">Nome da Residência</label>
                            <input className="border border-zinc-300 rounded-lg h-[30px] p-2" type="text" name="nomeDaResidencia" id="nomeDaResidencia" value={nomeDaResidencia} onChange={(e) => setNomeDaResidencia(e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="tipoDeResidencia">Tipo de Residência</label>
                            <input className="border border-zinc-300 rounded-lg h-[30px] p-2" type="text" name="tipoDeResidencia" id="tipoDeResidencia" value={tipoDeResidencia} onChange={(e) => setTipoDeResidencia(e.target.value)} />
                        </div>
                        {/* Estado */}
                        <div className="flex flex-col gap-1">
                            <label>Estado</label>
                            <select
                                value={estado}
                                onChange={(e) => {
                                    const uf = e.target.value;

                                    setEstado(uf);
                                    setCidade("");
                                    buscarCidades(uf);
                                }}
                                className="border border-zinc-300 rounded-lg p-3"
                            >
                                <option value="">
                                    {loadingEstados
                                        ? "Carregando estados..."
                                        : "Selecione um estado"}
                                </option>

                                {estados.map((estado) => (
                                    <option
                                        key={estado.id}
                                        value={estado.sigla}
                                    >
                                        {estado.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* Cidade */}
                        <div className="flex flex-col gap-1">
                            <label>Cidade</label>
                            <select
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                                disabled={!estado || loadingCidades}
                                className="border border-zinc-300 rounded-lg p-3 disabled:opacity-50"
                            >
                                <option value="">
                                    {!estado
                                        ? "Selecione um estado primeiro"
                                        : loadingCidades
                                            ? "Carregando cidades..."
                                            : "Selecione uma cidade"}
                                </option>

                                {cidades.map((cidade) => (
                                    <option
                                        key={cidade.id}
                                        value={cidade.nome}
                                    >
                                        {cidade.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="qtdeDeMoradores">Quantidade de Moradores</label>
                            <input className="border border-zinc-300 rounded-lg h-[30px] p-2" type="text" name="qtdeDeMoradores" id="qtdeDeMoradores" value={qtdeDeMoradores} onChange={(e) => setQtdeDeMoradores(e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="tarifaDeEnergia">Tarifa de Energia (R$/kWh)</label>
                            <input className="border border-zinc-300 rounded-lg h-[30px] p-2" type="text" name="tarifaDeEnergia" id="tarifaDeEnergia" value={tarifaDeEnergia} onChange={(e) => setTarifaDeEnergia(e.target.value)} />
                        </div>
                        <div className="w-full h-full flex justify-center items-center p-3">
                            <button className="flex items-center gap-2 bg-verde-2 w-full h-full justify-center rounded-xl text-white font-bold text-2xl text-shadow-[1px_1px_2px_black] border border-verde-3">
                                <FaRegSave className="drop-shadow-[1px_1px_2px_black]" />
                                <span>Salvar</span>
                            </button>
                        </div>
                        <div className="bg-verde-1/40 rounded-xl flex items-center p-4 gap-2">
                            <div className="rounded-full bg-verde-3/30 p-2 text-xl">
                                <FaLeaf />
                            </div>
                            <span className="text-zinc-600 text-sm max-w-[400px] leading-5 line-clamp-2">A tarifa informada será usada para calcular o valor estimado do consumo.</span>
                        </div>
                    </div>
                </div>
                <div className="border border-zinc-400 rounded-xl p-4 flex justify-between w-full">
                    <div className="flex items-center gap-2">
                        <LuSofa className="text-verde-3 text-2xl" />
                        <h3 className="font-bold text-xl">Cômodos da Residência</h3>
                    </div>
                    <div>
                        <button onClick={() => setVisible(true)} className="flex items-center gap-1 bg-verde-2 p-2 rounded-xl font-bold text-white text-shadow-[1px_1px_2px_black] cursor-pointer">
                            <GoPlus className="text-white text-lg"/>
                            <p>Adicionar Comodo</p>
                        </button>
                    </div>
                    <Dialog header={<div><h2 className="font-oswald text-2xl font-bold">Adicionar Cômodo</h2></div>} visible={visible} className="w-[90%] max-w-[700px] bg-zinc-200 p-4 rounded-xl text-black shadow-[0_0_2px_1px_black]" onHide={() => { if (!visible) return; setVisible(false); }}>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <p className="font-bold">Nome do cômodo:</p>
                                <div className="relative">
                                    <input className="w-full h-[40px] p-2 pl-12 rounded-lg border border-zinc-400" type="text" name="nomeDoComod" id="nomeDoComodo" value={nomeDoComodo} onChange={(e) => setNomeDoComodo(e.target.value)} />
                                    <div className="absolute top-0 left-0 text-3xl p-1 border-r border-zinc-400">
                                        <RiSofaLine />
                                    </div>
                                </div>
                                <span>Digite o nome do cômodo que deseja adicionar</span>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold">Ícone do cômodo:</p>
                                <ul className="grid grid-cols-10">
                                    <li>
                                        <button className="border border-verde-3 text-verde-3 bg-verde-3/20 text-4xl p-2 rounded-xl">
                                            <RiSofaLine />
                                        </button>
                                    </li>
                                    <li>
                                        <button className="border border-zinc-400 text-zinc-700 bg-zinc-200 text-4xl p-2 rounded-xl">
                                            <RiSofaLine />
                                        </button>
                                    </li>
                                    <li>
                                        <button className="border border-zinc-400 text-zinc-700 bg-zinc-200 text-4xl p-2 rounded-xl">
                                            <RiSofaLine />
                                        </button>
                                    </li>
                                    <li>
                                        <button className="border border-zinc-400 text-zinc-700 bg-zinc-200 text-4xl p-2 rounded-xl">
                                            <RiSofaLine />
                                        </button>
                                    </li>
                                    <li>
                                        <button className="border border-zinc-400 text-zinc-700 bg-zinc-200 text-4xl p-2 rounded-xl">
                                            <RiSofaLine />
                                        </button>
                                    </li>
                                    <li>
                                        <button className="border border-zinc-400 text-zinc-700 bg-zinc-200 text-4xl p-2 rounded-xl">
                                            <RiSofaLine />
                                        </button>
                                    </li>
                                    <li>
                                        <button className="border border-zinc-400 text-zinc-700 bg-zinc-200 text-4xl p-2 rounded-xl">
                                            <RiSofaLine />
                                        </button>
                                    </li>
                                    <li>
                                        <button className="border border-zinc-400 text-zinc-700 bg-zinc-200 text-4xl p-2 rounded-xl">
                                            <RiSofaLine />
                                        </button>
                                    </li>
                                    <li>
                                        <button className="border border-zinc-400 text-zinc-700 bg-zinc-200 text-4xl p-2 rounded-xl">
                                            <RiSofaLine />
                                        </button>
                                    </li>
                                    <li>
                                        <button className="border border-zinc-400 text-zinc-700 bg-zinc-200 text-4xl p-2 rounded-xl">
                                            <RiSofaLine />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold">Sugestões de cômodos:</p>
                                <ul className="flex flex-wrap gap-2">
                                    <li>
                                        <button className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl">
                                            <p>Escritório</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl">
                                            <p>Área Gourmet</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl">
                                            <p>Garagem</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl">
                                            <p>Closet</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl">
                                            <p>Dispensa</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl">
                                            <p>Varanda</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl">
                                            <p>Quintal</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl">
                                            <p>Sala</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl">
                                            <p>Cozinha</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl">
                                            <p>Banheiro</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl">
                                            <p>Quarto</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl">
                                            <p>Lavanderia</p>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex items-center gap-2 bg-verde-3 text-white p-2 rounded-xl">
                                <FaLeaf className="text-4xl" />
                                <div>
                                    <h3 className="font-bold text-lg leading-5">Dica</h3>
                                    <span>
                                        Você pode editar ou excluir os cômodos a qualquer momento.
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <button className="border border-zinc-400 rounded-xl p-1 text-xl">
                                    Cancelar
                                </button>
                                <button className="border border-zinc-400 rounded-xl p-1 text-xl bg-verde-3 text-white">
                                    Adicionar Cômodo
                                </button>
                            </div>
                        </div>
                    </Dialog>
                </div>
                <div className="border border-zinc-400 rounded-xl p-4 flex justify-between w-full">
                    <div className="flex items-center gap-2">
                        <LuSofa className="text-verde-3 text-2xl" />
                        <h3 className="font-bold text-xl">Cômodos da Residência</h3>
                    </div>
                    </div>
            </div>
        </Template>
    )
}