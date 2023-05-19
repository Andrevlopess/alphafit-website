import { useNavigate } from "react-router-dom"
import AlphaLogo from '../../assets/alphaLogo.svg'

export default function Footer() {

    const nav = useNavigate()

    return (
        <div className="flex flex-col border-t-2 items-center justify-center text-zinc-900 dark:text-white gap-12 py-6">
            <button
                onClick={() => nav("/")}
            >
                <img src={AlphaLogo} className="h-14 w-14" />
            </button>
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
            <label className="text-md text-zinc-400">Todos os direitos reservados
                <span className="text-md text-violet-500"> andre vitor lopes </span>
                 &copy;</label>
        </div>
    )
}