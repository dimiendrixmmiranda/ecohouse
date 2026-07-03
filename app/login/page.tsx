'use client'

import Template from "@/components/template/Template";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsLeaf } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { LuTrees } from "react-icons/lu";

export default function Page() {
    const router = useRouter();

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
                                    <LuTrees className="text-5xl" />
                                    <p className="max-w-[230px] text-lg">Cada escolha consciente hoje, <b className="text-verde-1">constrói um amanhã melhor.</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <h3>Bem vindo de volta! 👋</h3>
                                <span>
                                    Entre na sua conta para continuar cuidando do seu lar e do planeta.
                                </span>
                            </div>
                            <div>
                                <button onClick={() => setModo('login')} className={`${modo == 'login' ? 'bg-verde-1' : ''}`}>
                                    Entrar
                                </button>
                                <button onClick={() => setModo('create')} className={`${modo == 'create' ? 'bg-verde-1' : ''}`}>
                                    Cadastre-se
                                </button>
                            </div>
                        </div>
                        {
                            modo === 'login' ? (
                                <div>
                                    <div>
                                        <div>
                                            <label htmlFor="email">Email</label>
                                            <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div>
                                            <label htmlFor="senha">senha</label>
                                            <input type="text" name="senha" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
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
                                        <button>
                                            <FaArrowRight />
                                            <p>Entrar na minha conta</p>
                                        </button>
                                    </div>
                                </div>
                            ) : ''
                        }
                        {
                            modo === 'create' ? (
                                <div>
                                    <div>
                                        <div>
                                            <label htmlFor="nome">Nome</label>
                                            <input type="text" name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                                        </div>
                                        <div>
                                            <label htmlFor="email">Email</label>
                                            <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <select
                                            id="sexo"
                                            name="sexo"
                                            value={sexo}
                                            onChange={(e) => setSexo(e.target.value)}
                                        >
                                            <option value="">Selecione</option>
                                            <option value="masculino">Masculino</option>
                                            <option value="feminino">Feminino</option>
                                            <option value="prefiro-nao-dizer">Prefiro não dizer</option>
                                        </select>
                                        <div>
                                            <label htmlFor="dataDeNascimento">Data de Nascimento</label>
                                            <input type="date" name="dataDeNascimento" id="dataDeNascimento" value={dataDeNascimento} onChange={(e) => setDataDeNascimento(e.target.value)} />
                                        </div>
                                        <div>
                                            <label htmlFor="senha">Senha</label>
                                            <input type="text" name="senha" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                                        </div>
                                        <div>
                                            <label htmlFor="confirmarSenha">Confirmar Senha</label>
                                            <input type="text" name="confirmarSenha" id="confirmarSenha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={criarConta}>
                                            <FaArrowRight />
                                            <p>Criar Minha conta</p>
                                        </button>
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