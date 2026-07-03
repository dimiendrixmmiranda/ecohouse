import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

    try {

        const body = await request.json();

        const {
            nome,
            email,
            senha,
            dataDeNascimento,
            sexo
        } = body;

        if (!nome || !email || !senha || !dataDeNascimento || !sexo) {
            return NextResponse.json(
                { message: "Preencha todos os campos." },
                { status: 400 }
            );
        }

        const usuario = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (usuario) {
            return NextResponse.json(
                {
                    message: "E-mail já cadastrado."
                },
                {
                    status: 409
                }
            )
        }

        const senhaHash = await bcrypt.hash(
            senha,
            10
        )

        const novoUsuario =
            await prisma.user.create({
                data: {
                    nome,
                    email,
                    senha: senhaHash,
                    dataDeNascimento: new Date(
                        dataDeNascimento
                    ),
                    sexo
                }
            })
        return NextResponse.json(
            {
                message: "Usuário criado com sucesso.",
                id: novoUsuario.id
            },
            {
                status: 201
            }
        )
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                message: "Erro interno."
            },
            {
                status: 500
            }
        )
    }
}