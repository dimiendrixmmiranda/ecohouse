import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

function obterUsuario(token: string) {
    return jwt.verify(
        token,
        process.env.JWT_SECRET!
    ) as {
        id: string;
        email: string;
    };
}

export async function POST(request: NextRequest) {

    const token = request.cookies.get("token")?.value;

    if (!token) {
        return NextResponse.json(
            { message: "Não autenticado." },
            { status: 401 }
        );
    }

    try {

        const payload = obterUsuario(token);

        const { nome, icone } = await request.json();

        if (!nome || !icone) {
            return NextResponse.json(
                { message: "Preencha todos os campos." },
                { status: 400 }
            );
        }

        const comodo = await prisma.comodo.create({
            data: {
                nome,
                icone,
                usuarioId: payload.id
            }
        });

        return NextResponse.json(
            comodo,
            { status: 201 }
        );

    } catch (error) {

        console.error(error);

        return NextResponse.json(
            { message: "Erro interno." },
            { status: 500 }
        );
    }
}

export async function GET(request: NextRequest) {

    const token = request.cookies.get("token")?.value;

    if (!token) {
        return NextResponse.json([]);
    }

    try {

        const payload = obterUsuario(token);

        const comodos = await prisma.comodo.findMany({
            where: {
                usuarioId: payload.id
            },
            orderBy: {
                criadoEm: "asc"
            }
        });

        return NextResponse.json(comodos);

    } catch (error) {

        console.error(error);

        return NextResponse.json(
            { message: "Erro interno." },
            { status: 500 }
        );
    }
}