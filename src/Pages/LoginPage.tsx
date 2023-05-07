import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import GoogleLogo from '../assets/google-g-2015.svg'
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useSpring, animated } from '@react-spring/web'

export default function LoginPage() {

    const nav = useNavigate()

    const [spring] = useSpring(
        () => ({
            from: {
                opacity: 0,
                x: -50
            },
            to: {
                opacity: 1,
                x: 0
            },
        }),
    )

    return (
        <div className="font-inter bg-zinc-900 flex flex-col gap-12">
            <Header />
            <div className="flex justify-center items-center gap-12 px-6">
                <div className="flex flex-col bg-zinc-901 gap-6 py-4 px-6">
                    <text className="text-xl lg:text-3xl font-black text-white">
                        Bem vindo de volta
                    </text>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <text className="text-xl font-bold text-white">
                            Email
                        </text>
                        <input
                            type="text"
                            className=" rounded-sm border-2 outline-none bg-transparent text-white text-semibold px-4 py-2 w-full"
                        />
                    </div>
                    <div className=" rounded-sm flex flex-col items-start justify-center gap-2">
                        <text className="text-xl font-bold text-white">
                            Senha
                        </text>
                        <input
                            type="password"
                            className="border-2 outline-none bg-transparent text-white text-semibold px-4 py-2 w-full"
                        />
                    </div>
                    <button>
                        <text className="text-zinc-300 text-sm text-center">Esqueceu a senha?</text>
                    </button>
                    <button className="flex items-center justify-center  py-4 bg-zinc-100 shadow-xl rounded-sm">
                        <text className="text-zinc-950 font-bold text-2xl">Login</text>
                    </button>

                    <button className="flex gap-6 border-2 items-center justify-center py-4 shadow-xl rounded-sm flex-wrap-reverse px-6">
                        <text className="text-zinc-50 font-bold text-xl">Fazer login com google</text>
                        <img src={GoogleLogo} className="h-10 w-10" />
                    </button>

                    <button
                        onClick={() => nav("/")}
                    >
                        <text className="text-zinc-300 text-sm text-center">
                            Ainda não tem uma conta? <span className="text-red-500">Registre-se</span>
                        </text>
                    </button>
                </div>


                <animated.div
                    style={spring}
                    className="flex flex-col gap-4 md:w-1/3 ">
                    <text className="text-xl font-extrabold text-white ">andre's <span className="text-red-600">gym</span></text>
                    <text className="text-4xl lg:text-7xl font-black text-white">
                        Login
                    </text>
                    <text className="text-xl lg:text-3xl font-black text-white">
                        Faça o login para acessar a sua conta e ver seus planos.
                    </text>
                    <button
                        onClick={() => nav("/")}
                        className="flex items-center gap-2">
                        <BsArrowLeft size={25} color="#ccc" />
                        <text className="text-md lg:text-lg font-semibold text-zinc-300">
                            voltar
                        </text>
                    </button>
                </animated.div>



            </div>
            <Footer />
        </div>
    )
}