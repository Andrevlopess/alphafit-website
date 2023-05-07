import { plans } from "../Utils/Plans";
import PlanCard from "../components/Cards/PlansCard";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

export default function ContactPage() {
    return (
        <div className="font-inter bg-zinc-900">
            <Header />
            <div className="px-6 py-4 flex flex-col shadow-2xl gap-12 md:gap-24 my-12 md:my-24">
                <div className="flex flex-col justify-center items-center gap-12">
                    <label className="text-4xl lg:text-7xl font-black text-white">
                        Fale conosco
                    </label>
                    <div className="flex flex-col bg-zinc-901 gap-12 py-4 px-6">
                        <label className="text-xl lg:text-4xl font-black text-white">
                            Entre em contato com a gente
                        </label>
                        <div className="flex flex-col items-start justify-center gap-2">
                            <label className="text-xl font-bold text-white">
                                Nome
                            </label>
                            <input
                                type="text"
                                className=" rounded-sm border-2 outline-none bg-transparent text-white text-semibold px-4 py-2 w-full"
                            />
                        </div>
                        <div className=" rounded-sm flex flex-col items-start justify-center gap-2">
                            <label className="text-xl font-bold text-white">
                                Email
                            </label>
                            <input
                                type="email"
                                className="border-2 outline-none bg-transparent text-white text-semibold px-4 py-2 w-full"
                            />
                        </div>
                        <div className=" rounded-sm flex flex-col items-start justify-center gap-2">
                            <label className="text-xl font-bold text-white">
                                Deixe sua mensagem
                            </label>
                            <textarea
                                className="border-2 outline-none bg-transparent text-white text-semibold px-4 py-2 w-full h-36"
                            />
                        </div>
                        <button className="flex items-center justify-center  py-4 bg-zinc-100 shadow-xl rounded-sm">
                            <label className="text-zinc-950 font-bold text-2xl">Enviar</label>
                        </button>
                        <button>
                            <label className="text-zinc-300 text-sm text-center underline">Veja as perguntas frequentes</label>
                        </button>
                    </div>
                </div>

                <div className="border-t w-full" />

                <div className="flex flex-col justify-center items-center gap-12 md:gap-36 my-12">
                    <label className="text-4xl lg:text-6xl font-black text-white">
                        Planos referência
                    </label>

                    <div className="grid md:grid-cols-2 gap-16">
                        {plans.map(plan => {
                            return (
                                <PlanCard plan={plan} key={plan.id}/>
                            )
                        })}
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}