import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import GoogleLogo from '../assets/google-g-2015.svg'
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

    const nav = useNavigate()

    return (
        <div className="font-inter bg-zinc-900 flex flex-col gap-12">
            <Header />
            <div className="flex flex-col justify-center items-center gap-12 px-6">
                <text className="text-4xl lg:text-7xl font-black text-white">
                    Login
                </text>
                <div className="flex flex-col bg-zinc-901 gap-6 py-4 px-6">
                    <text className="text-xl lg:text-4xl font-black text-white">
                        Faça seu login para acessar sua conta
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
                    
                    <button className="flex gap-6 border-2 items-center justify-center py-4 shadow-xl rounded-sm flex-wrap-reverse">
                        <text className="text-zinc-50 font-bold text-xl">Fazer login com google</text>
                        <img src={GoogleLogo} className="h-10 w-10"/>
                    </button>

                    <button
                    onClick={() => nav("/")}
                    >
                        <text className="text-zinc-300 text-sm text-center">
                        Ainda não tem uma conta? <span className="text-red-500">Registre-se</span>
                        </text>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}