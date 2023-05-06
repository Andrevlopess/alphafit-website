import { useNavigate } from "react-router-dom"

export default function Footer() {

    const nav = useNavigate()

    return (
        <div className="flex flex-col border-t-2 items-center justify-center text-white gap-12 py-6">
            <text className="text-xl font-extrabold border-b-2 pb-2">andre's <span className="text-red-600">gym</span></text>
            <div className="flex gap-12">
                <button
                    onClick={() => nav("/planos")}
                >
                    <text className="text-md font-bold">
                        Planos
                    </text>
                </button>
                <button
                    onClick={() => nav("/sobre-nos")}
                >
                    <text className="text-md font-bold">
                        Sobre nós
                    </text>
                </button>
                <button
                    onClick={() => nav("/contato")}
                >
                    <text className="text-md font-bold">
                        Contato
                    </text>
                </button>
            </div>
            <text className="text-sm text-zinc-400">Todos os direitos reservados andre vitor lopes &copy;</text>
        </div>
    )
}