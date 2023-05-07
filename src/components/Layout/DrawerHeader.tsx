import { useLocation, useNavigate } from "react-router-dom"
import { BsXLg } from 'react-icons/bs'
import { useSpring, animated } from '@react-spring/web'


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
        className="absolute top-0 w-full flex flex-col bg-zinc-900 border-b-2 px-6 py-4 gap-12"
        >
                <div className="flex justify-between">
                    <button
                        onClick={() => nav("/")}
                    >
                        <label className="text-xl font-extrabold">andre's <span className="text-red-600">gym</span></label>
                    </button>
                    <button
                        onClick={() => close(!isOpen)}
                    >
                        <BsXLg color={"#fff"} size={25} />
                    </button>
                </div>

                <div className="flex gap-4 justify-center">
                    <button
                        className={location.pathname === "/planos" ? `shadow-underline` : undefined}
                        onClick={() => nav("/planos")}
                    >
                        <label className="text-md font-bold">
                            Planos
                        </label>
                    </button>
                    <button
                        className={location.pathname === "/sobre-nos" ? `shadow-underline` : undefined}
                        onClick={() => nav("/sobre-nos")}
                    >
                        <label className="text-md font-bold">
                            Sobre nós
                        </label>
                    </button>
                    <button
                        className={location.pathname === "/contato" ? `shadow-underline` : undefined}
                        onClick={() => nav("/contato")}
                    >
                        <label className="text-md font-bold">
                            Contato
                        </label>
                    </button>
                    <button
                        onClick={() => nav("/login")}
                        className="bg-zinc-700 py-2 px-4 rounded-md"
                    >
                        <label className="text-md font-bold">
                            Login
                        </label>
                    </button>
                </div>

        </animated.div>

    )
}