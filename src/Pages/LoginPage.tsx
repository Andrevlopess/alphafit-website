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
            <div className="flex justify-center items-center gap-12 px-6 flex-wrap-reverse">
                <form>
                    <div className="flex flex-col bg-zinc-901 gap-6 py-4 px-6">
                        <label className="text-xl lg:text-3xl font-black text-white">
                            Bem vindo de volta
                        </label>
                        <div className="flex flex-col items-start justify-center gap-2">
                            <label className="text-xl font-bold text-white">
                                Email
                            </label>
                            <input
                            required
                                type="text"
                                className=" rounded-sm border-2 outline-none bg-transparent text-white text-semibold px-4 py-2 w-full"
                            />
                        </div>
                        <div className=" rounded-sm flex flex-col items-start justify-center gap-2">
                            <label className="text-xl font-bold text-white">
                                Senha
                            </label>
                            <input
                                required
                                autoComplete="on"
                                type="password"
                                className="border-2 outline-none bg-transparent text-white text-semibold px-4 py-2 w-full"
                            />
                        </div>
                        <button>
                            <label className="text-zinc-300 text-sm text-center underline">Esqueceu a senha?</label>
                        </button>
                        <button 
                        type="submit"
                        className="flex items-center justify-center  py-4 bg-zinc-100 shadow-xl rounded-sm hover:opacity-80">
                            <label className="text-zinc-950 font-bold text-2xl ">Login</label>
                        </button>

                        <button className="flex gap-6 border-2 items-center justify-center py-4 shadow-xl rounded-sm flex-wrap-reverse px-6  hover:opacity-80">
                            <label className="text-zinc-50 font-bold text-xl">Fazer login com google</label>
                            <img src={GoogleLogo} className="h-10 w-10" />
                        </button>

                        <button
                            className=" hover:opacity-80"
                            onClick={() => nav("/signup")}
                        >
                            <label className="text-zinc-300 text-sm text-center">
                                Ainda não tem uma conta? <span className="text-red-500">Registre-se</span>
                            </label>
                        </button>
                    </div>
                </form>



                <animated.div
                    style={spring}
                    className="flex flex-col gap-4 md:w-1/3 md:px-0 px-12">
                    <label className="text-xl font-extrabold text-white ">andre's <span className="text-red-600">gym</span></label>
                    <label className="text-4xl lg:text-7xl font-black text-white">
                        Login
                    </label>
                    <label className="text-xl lg:text-3xl font-black text-white">
                        Faça o login para acessar a sua conta e ver seus planos.
                    </label>
                    <button
                        onClick={() => nav("/")}
                        className="flex items-center gap-2  hover:opacity-80">
                        <BsArrowLeft size={25} color="#ccc" />
                        <label className="text-md lg:text-lg font-semibold text-zinc-300">
                            voltar
                        </label>
                    </button>
                </animated.div>



            </div>
            <Footer />
        </div>
    )
}