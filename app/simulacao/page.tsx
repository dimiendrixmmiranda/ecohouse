'use client'
import Template from "@/components/template/Template";
import { useLocalidades } from "@/hooks/useLocalidades";
import { useEffect, useMemo, useState } from "react";
import { FaRegSave, FaSave } from "react-icons/fa";
import { FaCar, FaCheck, FaDeleteLeft, FaLeaf, FaPlus, FaShower } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { IoHomeOutline, IoShirtOutline } from "react-icons/io5";
import { LuSofa } from "react-icons/lu";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { RiPlantLine, RiSofaLine } from "react-icons/ri";
import { GiBroom, GiCookingPot } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { PiTelevisionSimple } from "react-icons/pi";
import { MdCancel, MdOutlineMonitor } from "react-icons/md";
import { IconType } from "react-icons";
import { createExhaustiveParamsProxy } from "next/dist/server/app-render/instant-validation/instant-samples";
import Comodo from "@/interfaces/Comodo";
import { cp } from "fs";
import { BiLeaf } from "react-icons/bi";

interface CriarComodoDTO {
    nome: string;
    icone: string;
}

export const CATEGORIAS_EQUIPAMENTOS = [
    {
        id: "iluminacao",
        nome: "Iluminação",
        icone: "💡"
    },
    {
        id: "climatizacao",
        nome: "Climatização",
        icone: "❄️"
    },
    {
        id: "eletrodomesticos",
        nome: "Eletrodomésticos",
        icone: "🍳"
    },
    {
        id: "eletronicos",
        nome: "Eletrônicos",
        icone: "📺"
    },
    {
        id: "lavanderia",
        nome: "Lavanderia",
        icone: "👕"
    },
    {
        id: "cozinha",
        nome: "Cozinha",
        icone: "🍽️"
    },
    {
        id: "banheiro",
        nome: "Banheiro",
        icone: "🚿"
    },
    {
        id: "escritorio",
        nome: "Escritório",
        icone: "💻"
    },
    {
        id: "lazer",
        nome: "Lazer",
        icone: "🎮"
    },
    {
        id: "seguranca",
        nome: "Segurança",
        icone: "🔒"
    },
    {
        id: "areaExterna",
        nome: "Área Externa",
        icone: "🌳"
    },
    {
        id: "outros",
        nome: "Outros",
        icone: "📦"
    }
];

export default function Page() {
    const {
        estados,
        cidades,
        loadingEstados,
        loadingCidades,
        buscarCidades,
    } = useLocalidades();

    const ICONES_COMODOS: { id: string; icon: IconType }[] = [
        { id: "sofa", icon: RiSofaLine },
        { id: "limpeza", icon: GiBroom },
        { id: "escritorio", icon: SiGoogleclassroom },
        { id: "cozinha", icon: GiCookingPot },
        { id: "banheiro", icon: FaShower },
        { id: "lavanderia", icon: IoShirtOutline },
        { id: "tv", icon: PiTelevisionSimple },
        { id: "computador", icon: MdOutlineMonitor },
        { id: "garagem", icon: FaCar },
        { id: "jardim", icon: RiPlantLine },
    ];

    const EQUIPAMENTOS = [
        {
            categoria: "iluminacao",
            itens: [
                "Lâmpada LED",
                "Lâmpada Fluorescente",
                "Abajur",
                "Refletor LED",
            ],
        },
        {
            categoria: "eletronicos",
            itens: [
                "Televisão",
                "Videogame",
                "Home Theater",
                "Roteador",
            ],
        },
        {
            categoria: "cozinha",
            itens: [
                "Geladeira",
                "Micro-ondas",
                "Air Fryer",
                "Liquidificador",
                "Cafeteira",
            ],
        },
        {
            categoria: "climatizacao",
            itens: [
                "Ar-condicionado",
                "Ventilador",
                "Aquecedor",
            ],
        },
    ];

    const [visible, setVisible] = useState(false);
    const [visibleAdicionarEquipamento, setVisibleAdicionarEquipamento] = useState(false)
    const [comodoAtual, setComodoAtual] = useState<Comodo | null>(null)

    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [nomeDaResidencia, setNomeDaResidencia] = useState("")
    const [tipoDeResidencia, setTipoDeResidencia] = useState("")
    const [qtdeDeMoradores, setQtdeDeMoradores] = useState("")
    const [tarifaDeEnergia, setTarifaDeEnergia] = useState("")

    const [nomeDoComodo, setNomeDoComodo] = useState("")
    const [iconeComodo, setIconeComodo] = useState("sofa")

    const [nomeDoEquipamento, setNomeDoEquipamento] = useState('')
    const [categoria, setCategoria] = useState("");
    const [equipamento, setEquipamento] = useState("");
    const [potencia, setPotencia] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [horasDeUsoPorDia, setHorasDeUsoPorDia] = useState("");
    const [diasDeUsoPorMes, setDiasDeUsoPorMes] = useState("");
    const [observacao, setObservacao] = useState('')

    const [loading, setLoading] = useState(false);

    const [comodos, setComodos] = useState<Comodo[]>([])
    const IconeSelecionado = useMemo(() => {
        return ICONES_COMODOS.find(
            ({ id }) => id === iconeComodo
        )?.icon;
    }, [iconeComodo]);

    const equipamentosDaCategoria = useMemo(() => {
        return (
            EQUIPAMENTOS.find(
                (item) => item.categoria === categoria
            )?.itens ?? []
        );
    }, [categoria]);

    function identificarIcone(icone: string) {
        return ICONES_COMODOS.filter(icon => icon.id === icone)[0].icon
    }

    useEffect(() => {
        buscarComodos();
    }, []);

    async function criarComodo(data: CriarComodoDTO) {
        const response = await fetch("/api/comodos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const resultado = await response.json();

        if (!response.ok) {
            throw new Error(resultado.message);
        }

        return resultado;
    }

    const adicionarComodo = async () => {
        try {
            setLoading(true);

            await criarComodo({
                nome: nomeDoComodo,
                icone: iconeComodo
            });

            alert("Cômodo criado com sucesso!");

            setNomeDoComodo("");
            setIconeComodo("sofa");

            await buscarComodos();

            setVisible(false);

        } catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            }
        } finally {
            setLoading(false);
        }
    }

    async function buscarComodos() {
        const response = await fetch("/api/comodos");
        if (!response.ok) {
            throw new Error("Erro ao buscar cômodos");
        }
        const dados = await response.json();
        console.log(dados)
        setComodos(dados);
    }

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
                            <label className="font-bold" htmlFor="nomeDaResidencia">Nome da Residência</label>
                            <input className="border border-zinc-300 rounded-lg h-[30px] p-2" type="text" name="nomeDaResidencia" id="nomeDaResidencia" value={nomeDaResidencia} onChange={(e) => setNomeDaResidencia(e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-bold" htmlFor="tipoDeResidencia">Tipo de Residência</label>
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
                            <label className="font-bold" htmlFor="qtdeDeMoradores">Quantidade de Moradores</label>
                            <input className="border border-zinc-300 rounded-lg h-[30px] p-2" type="text" name="qtdeDeMoradores" id="qtdeDeMoradores" value={qtdeDeMoradores} onChange={(e) => setQtdeDeMoradores(e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-bold" htmlFor="tarifaDeEnergia">Tarifa de Energia (R$/kWh)</label>
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
                <div className="border border-zinc-400 rounded-xl p-4 grid grid-cols-[1fr_200px] w-full">
                    <div className="flex items-center gap-2">
                        <LuSofa className="text-verde-3 text-2xl" />
                        <h3 className="font-bold text-xl">Cômodos da Residência</h3>
                    </div>
                    <div>
                        <button onClick={() => setVisible(true)} className="flex items-center gap-1 bg-verde-2 p-2 rounded-xl font-bold text-white text-shadow-[1px_1px_2px_black] cursor-pointer">
                            <GoPlus className="text-white text-lg" />
                            <p>Adicionar Comodo</p>
                        </button>
                    </div>
                    <Dialog header={<div><h2 className="font-oswald text-2xl font-bold">Adicionar Cômodo</h2></div>} visible={visible} className="w-[90%] max-w-[700px] bg-zinc-200 p-4 rounded-xl text-black shadow-[0_0_2px_1px_black]" onHide={() => { if (!visible) return; setVisible(false); }}>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <p className="font-bold">Nome do cômodo:</p>
                                <div className="relative">
                                    <input className="w-full h-[40px] p-2 pl-12 rounded-lg border border-zinc-400" type="text" name="nomeDoComod" id="nomeDoComodo" value={nomeDoComodo} onChange={(e) => setNomeDoComodo(e.target.value)} />
                                    <div className="absolute top-0 left-0 text-2xl p-2 border-r border-zinc-400">
                                        {IconeSelecionado && <IconeSelecionado />}
                                    </div>
                                    <button onClick={() => setNomeDoComodo('')} className="absolute bg-red-600 top-0 right-0 text-3xl h-full rounded-lg px-3 text-white drop-shadow-[1px_1px_2px_black]">
                                        <FaDeleteLeft />
                                    </button>
                                </div>
                                <span>Digite o nome do cômodo que deseja adicionar</span>
                            </div>
                            {/* Icone comodo */}
                            <div className="flex flex-col gap-2">
                                <p className="font-bold">Ícone do cômodo:</p>

                                <ul className="grid grid-cols-5 gap-3">
                                    {ICONES_COMODOS.map(({ id, icon: Icon }) => (
                                        <li key={id}>
                                            <button
                                                type="button"
                                                onClick={() => setIconeComodo(id)}
                                                className={`
                                                        flex justify-center items-center
                                                        text-4xl
                                                        p-2
                                                        rounded-xl
                                                        transition-all
                                                        duration-200
                                                        border
                                                        ${iconeComodo === id
                                                        ? "border-verde-3 bg-verde-3/20 text-verde-3"
                                                        : "border-zinc-400 bg-zinc-200 text-zinc-700 hover:border-verde-3 hover:text-verde-3"
                                                    }
                                                `}
                                            >
                                                <Icon />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Sugestoes comodo */}
                            <div className="flex flex-col gap-2">
                                <p className="font-bold">Sugestões de cômodos:</p>
                                <ul className="flex flex-wrap gap-2">
                                    <li>
                                        <button onClick={() => setNomeDoComodo('Escritorio')} className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl hover:bg-verde-3 hover:text-white duration-300 transition-all">
                                            <p>Escritório</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => setNomeDoComodo('Área Gourmet')} className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl hover:bg-verde-3 hover:text-white duration-300 transition-all">
                                            <p>Área Gourmet</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => setNomeDoComodo('Garagem')} className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl hover:bg-verde-3 hover:text-white duration-300 transition-all">
                                            <p>Garagem</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => setNomeDoComodo('Closet')} className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl hover:bg-verde-3 hover:text-white duration-300 transition-all">
                                            <p>Closet</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => setNomeDoComodo('Dispensa')} className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl hover:bg-verde-3 hover:text-white duration-300 transition-all">
                                            <p>Dispensa</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => setNomeDoComodo('Varanda')} className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl hover:bg-verde-3 hover:text-white duration-300 transition-all">
                                            <p>Varanda</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => setNomeDoComodo('Quintal')} className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl hover:bg-verde-3 hover:text-white duration-300 transition-all">
                                            <p>Quintal</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => setNomeDoComodo('Sala')} className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl hover:bg-verde-3 hover:text-white duration-300 transition-all">
                                            <p>Sala</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => setNomeDoComodo('Cozinha')} className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl hover:bg-verde-3 hover:text-white duration-300 transition-all">
                                            <p>Cozinha</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => setNomeDoComodo('Banheiro')} className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl hover:bg-verde-3 hover:text-white duration-300 transition-all">
                                            <p>Banheiro</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => setNomeDoComodo('Quarto')} className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl hover:bg-verde-3 hover:text-white duration-300 transition-all">
                                            <p>Quarto</p>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => setNomeDoComodo('Lavanderia')} className="border border-verde-3 text-verde-3 px-2 py-1 rounded-xl hover:bg-verde-3 hover:text-white duration-300 transition-all">
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
                                <button className="border border-zinc-400 rounded-xl p-1 text-xl bg-verde-3 text-white" onClick={adicionarComodo}>
                                    Adicionar Cômodo
                                </button>
                            </div>
                        </div>
                    </Dialog>
                    <div className="col-span-2">
                        {
                            comodos.length <= 0 ? (
                                <div>
                                    <h2>Nenhum comodo disponivel</h2>
                                </div>
                            ) : (
                                <ul className="grid gap-4 xl:grid-cols-2">
                                    {
                                        comodos.map(comodo => {
                                            const Icone = identificarIcone(comodo.icone)
                                            console.log(comodo)
                                            return (
                                                <li className="flex items-center w-full gap-4 bg-verde-1/20 p-2 rounded-xl">
                                                    <Icone className="text-3xl" />
                                                    <div>
                                                        <h3 className="text-xl leading-5">Cômodo: <b className="capitalize">{comodo.nome}</b>(0)</h3>
                                                        <span className="text-sm leading-4">Gerencie os equipamentos deste cômodo</span>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <button className="flex items-center bg-verde-3 text-white text-lg px-4 py-2 rounded-xl" onClick={() => {
                                                            setComodoAtual(comodo)
                                                            setVisibleAdicionarEquipamento(true)
                                                        }}>
                                                            <FaPlus />
                                                            <span>Adicionar equipamento</span>
                                                        </button>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            )
                        }
                    </div>
                </div>
                <div className="border border-zinc-400 rounded-xl p-4 flex flex-col justify-between w-full">
                    <div className="flex items-center gap-2">
                        <LuSofa className="text-verde-3 text-2xl" />
                        <h3 className="font-bold text-xl">Equipamentos por Cômodo</h3>
                    </div>
                </div>
                <Dialog header={<div><h2 className="font-oswald text-2xl font-bold">Adicionar Equipamento ao Comodo <b className="capitalize">{comodoAtual?.nome}</b></h2></div>} visible={visibleAdicionarEquipamento} className="w-[90%] max-w-[700px] bg-zinc-100 p-4 text-black shadow-[0_0_2px_1px_black]" onHide={() => { if (!visibleAdicionarEquipamento) return; setVisibleAdicionarEquipamento(false); }}>
                    <div className="flex flex-col gap-4 mt-4 p-2">
                        <div className="flex items-center gap-2 bg-verde-3/20 rounded-lg p-2">
                            <div className="rounded-full p-2 bg-verde-3 text-white">
                                <BiLeaf />
                            </div>
                            <p className="text-lg">Informe os dados do equipamento para calcular o consumo estimado.</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col">
                                <label className="font-bold" htmlFor="nomeDoEquipamento">Nome do Equipamento *</label>
                                <input className="rounded-lg border border-zinc-400 p-2" placeholder="Ex: Televisão 55" type="text" name="nomeDoEquipamento" id="nomeDoEquipamento" value={nomeDoEquipamento} onChange={(e) => setNomeDoEquipamento(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="font-bold">Categoria *</label>

                                <select
                                    value={categoria}
                                    onChange={(e) => {
                                        setCategoria(e.target.value);
                                        setEquipamento("");
                                    }}
                                    className="border border-zinc-400 rounded-lg p-2"
                                >
                                    <option value="">
                                        Selecione uma categoria
                                    </option>

                                    {CATEGORIAS_EQUIPAMENTOS.map((categoria) => (
                                        <option
                                            key={categoria.id}
                                            value={categoria.id}
                                        >
                                            {categoria.icone} {categoria.nome}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="font-bold">Equipamento *</label>
                                <select
                                    value={equipamento}
                                    disabled={!categoria}
                                    onChange={(e) => setEquipamento(e.target.value)}
                                    className="border border-zinc-400 rounded-lg p-2 disabled:opacity-50"
                                >
                                    <option value="">
                                        {!categoria
                                            ? "Escolha uma categoria primeiro"
                                            : "Selecione um equipamento"}
                                    </option>

                                    {equipamentosDaCategoria.map((item) => (
                                        <option
                                            key={item}
                                            value={item}
                                        >
                                            {item}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="flex flex-col">
                                    <label className="font-bold" htmlFor="potencia">Potência (W) *</label>
                                    <input className="rounded-lg border border-zinc-400 p-2" placeholder="Ex: Televisão 55" type="text" name="potencia" id="potencia" value={potencia} onChange={(e) => setPotencia(e.target.value)} />
                                    <span className="text-zinc-600 text-sm">Informe a potência em watts (W)</span>
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-bold" htmlFor="quantidade">Quabtidade *</label>
                                    <input className="rounded-lg border border-zinc-400 p-2" placeholder="Ex: Televisão 55" type="text" name="quantidade" id="quantidade" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
                                    <span className="text-zinc-600 text-sm">Quantidade desse equipamento</span>
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-bold" htmlFor="horasDeUsoPorDia">Horas de uso por dia *</label>
                                    <input className="rounded-lg border border-zinc-400 p-2" placeholder="Ex: Televisão 55" type="text" name="horasDeUsoPorDia" id="horasDeUsoPorDia" value={horasDeUsoPorDia} onChange={(e) => setHorasDeUsoPorDia(e.target.value)} />
                                    <span className="text-zinc-600 text-sm">Média de horas por dia</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label className="font-bold" htmlFor="diasDeUsoPorMes">Dias de Uso por mês *</label>
                                    <input className="rounded-lg border border-zinc-400 p-2" placeholder="Ex: Televisão 55" type="text" name="diasDeUsoPorMes" id="diasDeUsoPorMes" value={diasDeUsoPorMes} onChange={(e) => setDiasDeUsoPorMes(e.target.value)} />
                                    <span className="text-zinc-600 text-sm">Média de dias por mês</span>
                                </div>
                                <div className="flex items-center gap-2 bg-verde-2/20 rounded-xl px-2 py-1">
                                    <div className="rounded-full p-2 text-verde-3 bg-verde-3/20 text-3xl">
                                        <BiLeaf />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[.8em]">Consumo estimado mensal</span>
                                        <h4 className="font-bold text-lg -mt-1">14,40kWh</h4>
                                        <span className="text-[.6em] -mt-1">Cálculo: (120 W x 1 x 4h x 30 dias) / 1000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-bold" htmlFor="observacao">Observações (Opcional)</label>
                                <textarea className="rounded-lg border border-zinc-400 p-2 h-[200px]" placeholder="Alguma informação adicional sobre este equipamento..." name="observacao" id="observacao" value={observacao} onChange={(e) => setObservacao(e.target.value)}/>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button className="border border-verde-3 rounded-xl flex justify-center items-center gap-2 text-xl py-1 font-bold text-verde-3">
                                    <MdCancel />
                                    <p>Cancelar</p>
                                </button>
                                <button className="border border-zinc-700 rounded-xl flex justify-center items-center gap-2 text-xl py-1 font-bold bg-verde-3 text-white">
                                    <FaSave />
                                    <p>Adicionar Equipamento</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </div>
        </Template>
    )
}