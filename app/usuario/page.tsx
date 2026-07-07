'use client'

import Template from "@/components/template/Template";
import { useRouter } from "next/navigation";

export default function Page() {

    const router = useRouter();

    const logout = async () => {
        await fetch("/api/auth/logout", {
            method: "POST"
        });

        router.push("/login");
    }

    return (
        <Template>
            <div>
                <button
                    onClick={logout}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                    Sair
                </button>
            </div>
        </Template>
    );
}