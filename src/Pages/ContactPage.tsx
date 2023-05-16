import { useNavigate } from "react-router-dom";
import { plans } from "../Utils/Plans";
import PlanCard from "../components/Cards/PlansCard";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import { animated, useSpring } from '@react-spring/web'
import { BsArrowLeft } from "react-icons/bs";

export default function ContactPage() {

    const nav = useNavigate()
    const [spring] = useSpring(
        () => ({
            from: {
                opacity: 0,
                x: 50
            },
            to: {
                opacity: 1,
                x: 0
            },
        }),
    )

    return (
        <div className="font-archivo dark:bg-zinc-900 bg-zinc-100 transition">
            <Header />
            <div className="px-6 py-4 flex flex-col  gap-12 md:gap-24 my-12 md:my-24">
                <div className="flex justify-center items-center gap-12 flex-wrap ">
                    <animated.div
                        style={spring}
                        className="flex flex-col gap-4 md:w-1/3 md:px-0 px-12 items-end">
                        <label className="text-xl font-extrabold text-zinc-900 dark:text-white ">alpha <span className="text-violet-600">fit</span></label>
                        <label className="text-4xl lg:text-7xl font-black text-zinc-900 dark:text-white">
                            Contato
                        </label>
                        <label className="text-xl lg:text-3xl font-black text-zinc-900 dark:text-white text-right">
                            Fale conosco e tire duas dúvidas
                        </label>
                        <button
                            onClick={() => nav("/")}
                            className="flex items-center gap-2  hover:opacity-90">
                            <BsArrowLeft size={25} color="#333" className="dark:invert" />
                            <label className="text-md lg:text-lg font-semibold text-zinc-700 dark:text-zinc-300">
                                voltar
                            </label>
                        </button>
                    </animated.div>

                    <div className="flex flex-col dark:bg-zinc-901 gap-12 py-4 px-6 shadow-2xl rounded-md">
                        <label className="text-xl lg:text-4xl font-black text-zinc-900 dark:text-white">
                            Entre em contato com a gente
                        </label>
                        <div className="flex flex-col items-start justify-center gap-2">
                            <label className="text-xl font-bold text-zinc-900 dark:text-white">
                                Nome
                            </label>
                            <input
                                type="text"
                                className=" rounded-sm border-2 border-zinc-900 dark:border-white outline-none bg-transparent text-zinc-900 dark:text-white text-semibold px-4 py-2 w-full"
                            />
                        </div>
                        <div className=" rounded-sm flex flex-col items-start justify-center gap-2">
                            <label className="text-xl font-bold text-zinc-900 dark:text-white">
                                Email
                            </label>
                            <input
                                type="email"
                                className="border-2 border-zinc-900 dark:border-white outline-none bg-transparent text-zinc-900 dark:text-white text-semibold px-4 py-2 w-full"
                            />
                        </div>
                        <div className=" rounded-sm flex flex-col items-start justify-center gap-2">
                            <label className="text-xl font-bold text-zinc-900 dark:text-white">
                                Deixe sua mensagem
                            </label>
                            <textarea
                                className="border-2 border-zinc-900 dark:border-white outline-none bg-transparent text-zinc-900 dark:text-white text-semibold px-4 py-2 w-full h-36"
                            />
                        </div>
                        <button className="flex items-center justify-center  py-4 bg-zinc-900 dark:bg-zinc-100 shadow-xl rounded-sm">
                            <label className="dark:text-zinc-900 text-white font-bold text-2xl">Enviar</label>
                        </button>
                        <button>
                            <label className="text-zinc-800 dark:text-zinc-300 text-sm text-center underline">Veja as perguntas frequentes</label>
                        </button>
                    </div>
                </div>

                <div className="border-t w-full" />

                <div className="flex flex-col justify-center items-center gap-12 md:gap-36 my-12">
                    <label className="text-4xl lg:text-6xl font-black text-zinc-900 dark:text-white">
                        Planos referência
                    </label>

                    <div className="grid md:grid-cols-2 gap-16">
                        {plans.map(plan => {
                            return (
                                <PlanCard plan={plan} key={plan.id} />
                            )
                        })}
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}