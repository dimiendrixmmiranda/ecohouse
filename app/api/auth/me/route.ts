import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

function obterUsuario(token: string) {
    return jwt.verify(
        token,
        process.env.JWT_SECRET!
    ) as {
        id: string;
        email: string;
    };
}
export async function GET(request: NextRequest) {

    const token = request.cookies.get("token")?.value;

    if (!token) {
        return NextResponse.json(null);
    }

    try {

        const payload = obterUsuario(token);

        const usuario = await prisma.user.findUnique({
            where: {
                id: payload.id
            },
            select: {
                id: true,
                nome: true,
                email: true,
                dataDeNascimento: true,
                sexo: true,
                imagem: true,
                criadoEm: true
            }
        });

        return NextResponse.json(usuario);

    } catch {
        return NextResponse.json(null);
    }
}

export async function PUT(request: NextRequest) {

    const token = request.cookies.get("token")?.value;

    if (!token) {
        return NextResponse.json(
            { message: "Não autenticado." },
            { status: 401 }
        );
    }

    try {

        const payload = obterUsuario(token);

        const body = await request.json();

        const {
            nome,
            email,
            dataDeNascimento,
            sexo,
            imagem,
            senha,
            novaSenha
        } = body;

        const usuario = await prisma.user.findUnique({
            where: {
                id: payload.id
            }
        });

        if (!usuario) {
            return NextResponse.json(
                { message: "Usuário não encontrado." },
                { status: 404 }
            );
        }

        let senhaHash = usuario.senha;

        if (novaSenha) {

            const senhaCorreta = await bcrypt.compare(
                senha,
                usuario.senha
            );

            if (!senhaCorreta) {
                return NextResponse.json(
                    {
                        message: "Senha atual incorreta."
                    },
                    {
                        status: 400
                    }
                );
            }

            senhaHash = await bcrypt.hash(
                novaSenha,
                10
            );
        }

        const usuarioAtualizado =
            await prisma.user.update({
                where: {
                    id: usuario.id
                },
                data: {
                    nome,
                    email,
                    sexo,
                    imagem,
                    senha: senhaHash,
                    dataDeNascimento: new Date(
                        dataDeNascimento
                    )
                },
                select: {
                    id: true,
                    nome: true,
                    email: true,
                    dataDeNascimento: true,
                    sexo: true,
                    imagem: true
                }
            });

        return NextResponse.json(
            usuarioAtualizado
        );

    } catch (error) {

        console.error(error);

        return NextResponse.json(
            {
                message: "Erro interno."
            },
            {
                status: 500
            }
        );
    }
}