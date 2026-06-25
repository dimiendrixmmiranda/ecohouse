import { BsGraphUpArrow } from "react-icons/bs"
import { FaFire, FaSun } from "react-icons/fa6"
import { MdOutlineEco, MdOutlineEnergySavingsLeaf } from "react-icons/md"

export default function Ferramentas() {
    const gerarCampo = (icone: React.ReactNode, titulo: string, descricao: string, borda: boolean = true) => {
        return (
            <li className={`flex flex-col gap-2 p-2 ${borda ? 'border-r border-zinc-500': ''}`}>
                <div className="text-4xl p-2 rounded-full bg-verde-3 w-fit text-branco">
                    {icone}
                </div>
                <h3 className="text-lg font-bold">{titulo}</h3>
                <span>{descricao}</span>
            </li>
        )
    }
    return (
        <section className="bg-verde-1/20 rounded-xl p-4 px-6">
            <ul className="grid grid-cols-5 gap-6">
                {gerarCampo(<MdOutlineEnergySavingsLeaf />, "Monitoramento Inteligente", "Acompanhe o consumo de cada cômodo e equipamento em tempo real.")}
                {gerarCampo(<FaFire />, "Mapa de Calor", "Visualize onde sua energia é mais utilizada e indentifique disperdícios.")}
                {gerarCampo(<MdOutlineEco />, "Economia Garantida", "Receba sugestões personalizadas para reduzir o consumo e economizar dinheiro.")}
                {gerarCampo(<FaSun />, "Simulador Solar", "Descubra quanto você pode economizar com energia solar e quanto terá retorno de investimento.")}
                {gerarCampo(<BsGraphUpArrow />, "Relatórios e Gráficos", "Relatórios detalhados para você entender seus hábitos de consumo.", false)}
            </ul>
        </section>
    )
}