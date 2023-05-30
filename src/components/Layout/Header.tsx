import { useNavigate } from "react-router-dom"
import DrawerHeader from "./DrawerHeader"
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useLocation } from "react-router-dom";
import AlphaLogo from '../../assets/alphaLogo.svg'

export default function Header() {

    const location = useLocation()

    const nav = useNavigate()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    //  
    return (
        <div className={`flex justify-between items-center border-b dark:border-white text-zinc-900 dark:text-white border-zinc-300 transition backdrop-blur-lg px-6 py-4`}>
            <button
                onClick={() => nav("/")}
            >
               <img src={AlphaLogo} className="h-14 w-14"/>
            </button>

            {isOpen &&
                <DrawerHeader close={setIsOpen} isOpen={isOpen} />
            }

            <button
                className="sm:hidden px-6 py-4"
                onClick={() => setIsOpen(!isOpen)}
            >
                <AiOutlineMenu className="dark:invert" color="#000" size={25} />
            </button>

            <div className="sm:flex gap-10 hidden sm:show  py-4">
                <button
                    className={location.pathname === "/planos" ? `dark:shadow-underline-dark shadow-underline-light` : undefined}
                    onClick={() => nav("/planos")}
                >
                    <label className="text-md font-bold hover:opacity-90">
                        Planos
                    </label>
                </button>
                <button
                    className={location.pathname === "/sobre-nos" ? `dark:shadow-underline-dark shadow-underline-light` : undefined}
                    onClick={() => nav("/sobre-nos")}
                >
                    <label className="text-md font-bold hover:opacity-90">
                        Sobre nós
                    </label>
                </button>
                <button
                    className={location.pathname === "/contato" ? `dark:shadow-underline-dark shadow-underline-light` : undefined}
                    onClick={() => nav("/contato")}
                >
                    <label className="text-md font-bold hover:opacity-90">
                        Contato
                    </label>
                </button>
                <button
                    onClick={() => nav("/login")}
                    className="dark:border-white border-zinc-900 shadow-sm border-2 py-2 px-4 rounded-md hover:opacity-90 hover:shadow-inner"

                >
                    <label className="text-md font-bold">
                        Login
                    </label>
                </button>
            </div>
        </div>
    )
}