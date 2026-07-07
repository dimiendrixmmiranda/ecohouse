'use client'

import Template from "@/components/template/Template";
import { useUsuario } from "@/hooks/useUsuarios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsCalendar2Date, BsLeaf } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaArrowRight, FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import { GiCurledLeaf, GiPadlock } from "react-icons/gi";
import { GoShieldCheck } from "react-icons/go";
import { LuTrees } from "react-icons/lu";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { PiGenderIntersexLight } from "react-icons/pi";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function Page() {
    const router = useRouter();

    const [mostrarSenha, setMostrarSenha] = useState(false);

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [lembrar, setLembrar] = useState(false)

    const [nome, setNome] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [sexo, setSexo] = useState('')
    const [modo, setModo] = useState<'login' | 'create'>('login')
    const [dataDeNascimento, setDataDeNascimento] = useState('')

    const criarConta = async () => {
        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nome,
                    email,
                    senha,
                    sexo,
                    dataDeNascimento,
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                alert(data.message)
                return
            }

            // Cadastro realizado com sucesso
            router.push("/usuario")

        } catch (error) {
            console.error(error)
            alert("Erro ao criar conta.")
        }
    }

    const login = async () => {
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                senha
            })
        });

        const data = await response.json();

        if (response.ok) {
            router.push("/usuario");
        } else {
            alert(data.message);
        }
    }

    return (
        <Template>
            <div className="text-white font-oswald bg-verde-3 min-h-[80vh] flex justify-center items-center">
                <div className="max-w-[1200px] w-full grid grid-cols-2 rounded-xl overflow-hidden border border-zinc-400 m-8">
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

                            <div className="relative flex flex-col gap-4 max-w-[500px]">
                                <h2 className="font-bold text-5xl">Simule. Ecomonomize <b className="text-verde-2">Transforme</b></h2>
                                <span className="max-w-[340px] text-lg">Descubra o potencial da sua casa para economizar energia e construir um futuro mais sustentável.</span>
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
                            <div className="relative mt-4">
                                <div className="flex items-center gap-2 p-4 bg-verde-3/50 rounded-xl w-full">
                                    <div className="flex items-center gap-2">
                                        <LuTrees className="text-5xl" />
                                        <p className="max-w-[230px] text-lg">Cada escolha consciente hoje, <b className="text-verde-1">constrói um amanhã melhor.</b></p>
                                    </div>
                                    <div className="relative z-20 flex items-center gap-2 bg-verde-3 w-fit p-2 rounded-xl">
                                        <BsLeaf />
                                        <p>Sustentabilidade na Prática</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="p-8 bg-white text-black">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <h3 className="font-bold text-2xl">Bem vindo de volta! 👋</h3>
                                <span className="max-w-[200px] w-full leading-5">
                                    Entre na sua conta para continuar cuidando do seu lar e do planeta.
                                </span>
                            </div>
                            <div className="flex justify-center items-center gap-2 border-2 border-zinc-400 p-2 rounded-xl text-white">
                                <button onClick={() => {
                                    setModo('login')
                                    setSenha('')
                                    setEmail('')
                                }} className={`px-4 rounded-md text-lg py-1  ${modo == 'login' ? 'bg-verde-1 text-shadow-[1px_1px_2px_black]' : 'text-black border border-zinc-400'}`}>
                                    Entrar
                                </button>
                                <button onClick={() => {
                                    setModo('create')
                                    setSenha('')
                                    setEmail('')
                                }} className={`px-4 rounded-md text-lg py-1  ${modo == 'create' ? 'bg-verde-1 text-shadow-[1px_1px_2px_black]' : 'text-black border border-zinc-400'}`}>
                                    Cadastre-se
                                </button>
                            </div>
                        </div>
                        {
                            modo === 'login' ? (
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-4 mt-6">
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="email" className="text-lg font-bold">Email</label>
                                            <div className="w-full flex relative">
                                                <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-zinc-400 rounded-xl p-2 pl-10 w-full" />
                                                <CiMail className="absolute top-[50%] left-2 text-2xl text-zinc-400" style={{ transform: 'translate(0,-50%)' }} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="senha" className="text-lg font-bold">Senha</label>
                                            <div className="w-full flex relative">
                                                <input type={`${mostrarSenha ? 'text' : 'password'}`} name="senha" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} className="border border-zinc-400 rounded-xl p-2 pl-10 w-full" />
                                                <GiPadlock className="absolute top-[50%] left-2 text-2xl text-zinc-400" style={{ transform: 'translate(0,-50%)' }} />
                                                <button
                                                    type="button"
                                                    onClick={() => setMostrarSenha(!mostrarSenha)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-zinc-500 hover:text-verde-2 transition"
                                                >
                                                    {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    id="lembrar"
                                                    name="lembrar"
                                                    checked={lembrar}
                                                    onChange={(e) => setLembrar(e.target.checked)}
                                                />
                                                <label htmlFor="lembrar">
                                                    Lembrar de mim
                                                </label>
                                            </div>
                                            <div>
                                                <Link href={'/'}>Esqueceu sua senha?</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="flex items-center justify-center text-shadow-[1px_1px_2px_black] py-2 gap-2 text-2xl bg-verde-1 w-full rounded-xl text-white" onClick={login}>
                                            <FaArrowRight className="drop-shadow-[1px_1px_2px_black]" />
                                            <p>Entrar na minha conta</p>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-[1fr_auto_1fr] gap-4">
                                        <div className="w-full h-1 bg-zinc-400 my-auto"></div>
                                        <span className="flex-nowrap w-full text-center">Ou continue com</span>
                                        <div className="w-full h-1 bg-zinc-400 my-auto"></div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="rounded-xl border border-zinc-400 p-2 flex items-center gap-1 justify-center text-zinc-400">
                                            <FaGoogle />
                                            <span>Google</span>
                                        </div>
                                        <div className="rounded-xl border border-zinc-400 p-2 flex items-center gap-1 justify-center text-zinc-400">
                                            <FaGithub />
                                            <span>Github</span>
                                        </div>
                                        <div className="rounded-xl border border-zinc-400 p-2 flex items-center gap-1 justify-center text-zinc-400">
                                            <FaFacebook />
                                            <span>Facebook</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[70px_1fr_120px] gap-4 bg-verde-1/20 p-4 rounded-xl">
                                        <div className="rounded-lg text-verde-3 bg-verde-1 p-4 text-4xl">
                                            <GiCurledLeaf />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Novo por aqui?</h4>
                                            <span>
                                                Crie sua conta e comece agora a economizar energia e dinheiro!
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <button className="bg-verde-1 w-full my-auto p-2 text-lg rounded-xl text-white text-shadow-[1px_1px_2px_black]">
                                                Cadastre-se
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : ''
                        }
                        {
                            modo === 'create' ? (
                                <div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="nome" className="text-lg font-bold">Nome</label>
                                            <div className="w-full flex relative">
                                                <input type="text" name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} className="border border-zinc-400 rounded-xl p-2 pl-10 w-full" />
                                                <MdDriveFileRenameOutline className="absolute top-[50%] left-2 text-2xl text-zinc-400" style={{ transform: 'translate(0,-50%)' }} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="email" className="text-lg font-bold">Email</label>
                                            <div className="w-full flex relative">
                                                <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-zinc-400 rounded-xl p-2 pl-10 w-full" />
                                                <CiMail className="absolute top-[50%] left-2 text-2xl text-zinc-400" style={{ transform: 'translate(0,-50%)' }} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="sexo" className="text-lg font-bold">Sexo</label>
                                            <div className="w-full flex relative">
                                                <select
                                                    id="sexo"
                                                    name="sexo"
                                                    value={sexo}
                                                    onChange={(e) => setSexo(e.target.value)}
                                                    className="border border-zinc-400 rounded-xl p-2 pl-8 w-full"
                                                >
                                                    <option value="">Selecione</option>
                                                    <option value="masculino">Masculino</option>
                                                    <option value="feminino">Feminino</option>
                                                    <option value="prefiro-nao-dizer">Prefiro não dizer</option>
                                                </select>
                                                <PiGenderIntersexLight className="absolute top-[50%] left-2 text-2xl text-zinc-400" style={{ transform: 'translate(0,-50%)' }} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label htmlFor="dataDeNascimento" className="text-lg font-bold">Data de Nascimento</label>
                                            <div className="w-full flex relative">
                                                <input type="date" name="dataDeNascimento" id="dataDeNascimento" value={dataDeNascimento} onChange={(e) => setDataDeNascimento(e.target.value)} className="border border-zinc-400 rounded-xl p-2 pl-10 w-full" />
                                                <BsCalendar2Date className="absolute top-[50%] left-2 text-2xl text-zinc-400" style={{ transform: 'translate(0,-50%)' }} />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="flex flex-col gap-1">
                                                <label htmlFor="senha" className="text-lg font-bold">Senha</label>
                                                <div className="w-full flex relative">
                                                    <input type="text" name="senha" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} className="border border-zinc-400 rounded-xl p-2 pl-10 w-full" />
                                                    <GiPadlock className="absolute top-[50%] left-2 text-2xl text-zinc-400" style={{ transform: 'translate(0,-50%)' }} />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <label htmlFor="confirmarSenha" className="text-lg font-bold">Confirmar Senha</label>
                                                <div className="w-full flex relative">
                                                    <input type="text" name="confirmarSenha" id="confirmarSenha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} className="border border-zinc-400 rounded-xl p-2 pl-10 w-full" />
                                                    <GiPadlock className="absolute top-[50%] left-2 text-2xl text-zinc-400" style={{ transform: 'translate(0,-50%)' }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center mt-2">
                                            <button onClick={criarConta} className="flex items-center justify-center gap-2 bg-verde-1 w-full my-auto p-2 text-2xl rounded-xl text-white text-shadow-[1px_1px_2px_black]">
                                                <FaArrowRight className="drop-shadow-[1px_1px_2px_black] mt-[1px]" />
                                                <p>Criar Minha conta</p>
                                            </button>
                                        </div>
                                        <div className="grid grid-cols-[70px_1fr] gap-4 bg-verde-1/20 p-4 rounded-xl mt-3">
                                            <div className="rounded-lg text-verde-3 bg-verde-1 p-4 text-4xl">
                                                <GoShieldCheck />
                                            </div>
                                            <div className="flex flex-col">
                                                <h4 className="font-bold text-lg">Seus dados são protegidos</h4>
                                                <span className="leading-4">
                                                    Utilizamos suas informações apenas para personalizar suas simulações e nunca compartilhamos com terceiros
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : ''
                        }
                    </div>
                </div>
            </div>
        </Template>
    )
}