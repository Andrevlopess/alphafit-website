import { plans } from "../Utils/PLans";
import PlanCard from "../components/Cards/PlansCard";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

export default function ContactPage() {
    return (
        <div className="font-inter bg-zinc-900">
            <Header />
            <div className="px-6 py-4 flex flex-col shadow-2xl gap-12 md:gap-36 my-12 md:my-36">
                <div className="flex flex-col justify-center items-center gap-12">
                    <text className="text-4xl lg:text-7xl font-black text-white">
                        Fale conosco
                    </text>
                    <div className="flex flex-col bg-zinc-901 gap-12 py-4 px-6">
                        <text className="text-xl lg:text-4xl font-black text-white">
                            Entre em contato com a gente
                        </text>
                        <div className="flex flex-col items-start justify-center gap-2">
                            <text className="text-xl font-bold text-white">
                                Nome
                            </text>
                            <input
                                type="text"
                                className=" rounded-sm border-2 outline-none bg-transparent text-white text-semibold px-4 py-2 w-full"
                            />
                        </div>
                        <div className=" rounded-sm flex flex-col items-start justify-center gap-2">
                            <text className="text-xl font-bold text-white">
                                Email
                            </text>
                            <input
                                type="email"
                                className="border-2 outline-none bg-transparent text-white text-semibold px-4 py-2 w-full"
                            />
                        </div>
                        <div className=" rounded-sm flex flex-col items-start justify-center gap-2">
                            <text className="text-xl font-bold text-white">
                                Deixe sua mensagem
                            </text>
                            <textarea
                                className="border-2 outline-none bg-transparent text-white text-semibold px-4 py-2 w-full"
                            />
                        </div>
                        <button className="flex items-center justify-center  py-4 bg-zinc-100 shadow-xl rounded-sm">
                            <text className="text-zinc-950 font-bold text-2xl">Enviar</text>
                        </button>
                        <button>
                            <text className="text-zinc-300 text-sm text-center">Veja as perguntas frequentes</text>
                        </button>
                    </div>
                </div>

                <div className="border-t w-full" />

                <div className="flex flex-col justify-center items-center gap-12 md:gap-36 my-12">
                    <text className="text-4xl lg:text-6xl font-black text-white">
                        Planos referência
                    </text>

                    <div className="grid md:grid-cols-2 gap-16">
                        {plans.map(plan => {
                            return (
                                <PlanCard plan={plan} />
                            )
                        })}
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}