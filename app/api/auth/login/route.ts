import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { email, senha } = await request.json();

        if (!email || !senha) {
            return NextResponse.json(
                { message: "Preencha todos os campos." },
                { status: 400 }
            );
        }

        const usuario = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (!usuario) {
            return NextResponse.json(
                { message: "E-mail ou senha inválidos." },
                { status: 401 }
            );
        }

        const senhaCorreta = await bcrypt.compare(
            senha,
            usuario.senha
        );

        if (!senhaCorreta) {
            return NextResponse.json(
                { message: "E-mail ou senha inválidos." },
                { status: 401 }
            );
        }

        const token = jwt.sign(
            {
                id: usuario.id,
                email: usuario.email
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: "7d"
            }
        );

        const response = NextResponse.json({
            message: "Login realizado com sucesso."
        });

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 7,
            path: "/"
        });

        return response;

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