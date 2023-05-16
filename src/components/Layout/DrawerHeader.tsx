import { useLocation, useNavigate } from "react-router-dom"
import { BsXLg } from 'react-icons/bs'
import { useSpring, animated } from '@react-spring/web'
import AlphaLogo from '../../assets/alphaLogo.svg'


type Props = {
    isOpen: boolean;
    close: (isOpen: boolean) => void
}
export default function DrawerHeader({ close, isOpen }: Props) {

    const nav = useNavigate()
    const location = useLocation()

    const props = useSpring({
        from: { top: -100 },
        to: { top: 0 },
    })


    return (
        <animated.div
            style={props}
            className="absolute top-0 w-full flex flex-col dark:bg-zinc-900 z-50 bg-zinc-100 border-b-2 px-6 py-4 gap-12"
        >
            <div className="flex justify-between">
                <button
                    onClick={() => nav("/")}
                >
                    <img src={AlphaLogo} className="h-14 w-14" />
                </button>
                <button
                    onClick={() => close(!isOpen)}
                >
                    <BsXLg className="dark:invert" color="#000" size={25} />
                </button>
            </div>

            <div className="flex gap-4 justify-center">
                <button
                    className={location.pathname === "/planos" ? `dark:shadow-underline-dark shadow-underline-light` : undefined}
                    onClick={() => nav("/planos")}
                >
                    <label className="text-md font-bold">
                        Planos
                    </label>
                </button>
                <button
                    className={location.pathname === "/sobre-nos" ? `dark:shadow-underline-dark shadow-underline-light` : undefined}
                    onClick={() => nav("/sobre-nos")}
                >
                    <label className="text-md font-bold">
                        Sobre nós
                    </label>
                </button>
                <button
                    className={location.pathname === "/contato" ? `dark:shadow-underline-dark shadow-underline-light` : undefined}
                    onClick={() => nav("/contato")}
                >
                    <label className="text-md font-bold">
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

        </animated.div>

    )
}