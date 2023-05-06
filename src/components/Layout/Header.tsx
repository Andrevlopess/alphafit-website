import { useNavigate } from "react-router-dom"

export default function Header() {


    const nav = useNavigate()

    return (
        <div className="flex justify-between items-center border-b-2 border-white text-white px-6 py-4">
            <text className="text-xl font-extrabold">andre's <span className="text-red-600">gym</span></text>
            <div className="flex gap-10">
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
                <button
                onClick={() => nav("/login")}
                className="bg-zinc-700 py-2 px-4 rounded-md"
                >
                    <text className="text-md font-bold">
                        Login
                    </text>
                </button>
            </div>
        </div>
    )
}