import { useNavigate } from "react-router-dom"

export default function Footer() {

    const nav = useNavigate()

    return (
        <div className="flex flex-col border-t-2 items-center justify-center text-zinc-900 dark:text-white gap-12 py-6">
            <label className="text-xl font-extrabold border-b-2 pb-2">alpha <span className="text-violet-600">fit</span></label>
            <div className="flex gap-12">
                <button
                    onClick={() => nav("/planos")}
                >
                    <label className="text-md font-bold">
                        Planos
                    </label>
                </button>
                <button
                    onClick={() => nav("/sobre-nos")}
                >
                    <label className="text-md font-bold">
                        Sobre nós
                    </label>
                </button>
                <button
                    onClick={() => nav("/contato")}
                >
                    <label className="text-md font-bold">
                        Contato
                    </label>
                </button>
            </div>
            <label className="text-sm text-zinc-400">Todos os direitos reservados andre vitor lopes &copy;</label>
        </div>
    )
}