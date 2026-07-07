export default interface Usuario{
    id: string
    nome: string
    email: string
    dataDeNascimento: Date
    sexo: string
    imagem: string | null
    criadoEm: Date
    atualizadoEm: number
}