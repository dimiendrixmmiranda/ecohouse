'use client'
import Usuario from "@/interfaces/Usuario";
import { useEffect, useState } from "react";

export function useUsuario() {

    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function carregarUsuario() {
            try {
                const response =
                    await fetch("/api/auth/me");
                const data =
                    await response.json();
                setUsuario(data);
            } catch {
                setUsuario(null);
            } finally {
                setLoading(false);
            }
        }
        carregarUsuario();
    }, [])
    
    return {
        usuario,
        loading
    }
}