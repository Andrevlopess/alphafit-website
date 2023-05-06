import { useNavigate } from "react-router-dom"
import DrawerHeader from "./DrawerHeader"
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Header() {


    const nav = useNavigate()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className="flex justify-between items-center border-b-2 border-white text-white ">
            <text className="text-xl font-extrabold px-6 py-4">andre's <span className="text-red-600">gym</span></text>

            {isOpen &&
                <DrawerHeader close={setIsOpen} isOpen={isOpen}/>
            }
            <button
                className="sm:hidden px-6 py-4"
                onClick={() => setIsOpen(!isOpen)}
            >
                <AiOutlineMenu color="#fff" size={25} />
            </button>

            <div className="sm:flex gap-10 hidden sm:show px-6 py-4">
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