import Header from "../components/Layout/Header";
import { BsArrowRight } from 'react-icons/bs'
import { features, modalidades } from "../Utils/Features";
import FeatureCard from "../components/Cards/FeaturesCard";
import ExerciseIllustration from '../assets/ExerciseIllustration.svg'
import { Depoiments } from "../Utils/Depoiments";
import DepoimentCard from "../components/Cards/DepoimentsCard";
import { faq } from "../Utils/FAQ";
import FaqCard from "../components/Cards/FAQCard";
import Footer from "../components/Layout/Footer";
import { useInView, animated } from '@react-spring/web'
import { useNavigate } from "react-router-dom";
import FAB from "../components/FAB";


export default function Home() {

    const nav = useNavigate()

    const [ref, spring] = useInView(
        () => ({
            from: {
                opacity: 0,
                y: 100,
            },
            to: {
                opacity: 1,
                y: 0,
            },
        }),
        {once:true}
    )

    return (
        <div className="font-inter dark:bg-zinc-900 bg-zinc-100 flex flex-col justify-center transition">
            <FAB />
            <Header />
            <div className="flex md:px-20 px-12 items-start flex-col gap-6 h-screen justify-center bg-hero-banner bg-cover bg-no-repeat">
                <div className=" flex flex-col">
                    <label className="text-5xl lg:text-7xl font-black text-zinc-900 dark:text-white">
                        Seu novo modo de
                    </label>
                    <span className="text-5xl lg:text-7xl font-black text-red-500">evoluir</span>
                </div>
                <label className="text-2xl lg:text-4xl font-bold text-zinc-900 dark:text-white">Venha conhecer nossas academias!</label>
                <button
                    onClick={() => nav("/planos")}
                    className="hover:opacity-90 dark:hover:bg-zinc-800 hover:bg-zinc-200 flex justify-between px-6 py-4 border-2 border-zinc-900 rounded-sm gap-6 shadow-2xl items-center w-full sm:w-72 dark:border-zinc-100">
                    <label className="text-xl font-bold text-zinc-900 dark:text-white">
                        Ver Planos
                    </label>
                    <BsArrowRight size={25} className="dark:invert" />
                </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 dark:bg-zinc-901 bg-zinc-200 mx-6 py-6 rounded-sm my-12">
                {
                    features.map(feature => {
                        return (
                            <FeatureCard feature={feature} key={feature.id} />
                        )
                    })
                }
            </div>

            <div className="flex px-12 items-center justify-between flex-wrap gap-36 md:gap-0 my-12">
                <animated.div
                    style={spring}
                    className="flex"
                    ref={ref}
                >
                    <div className="flex flex-col gap-12 lg:gap-36">
                        <div className="border-l-4 border-red-600 flex flex-col px-4">
                            <label className="text-xl text-zinc-900 dark:text-white font-bold">Mais de</label>
                            <label className="text-5xl sm:text-6xl text-red-600 font-extrabold">50 mil</label>
                            <label className="text-xl text-zinc-900 dark:text-white font-bold">alunos já passaram por nossas academias</label>
                        </div>
                        <div className="border-l-4 border-red-600 flex flex-col px-4">
                            <label className="text-5xl sm:text-6xl text-red-600 font-extrabold">20 unidades</label>
                            <label className="text-xl text-zinc-900 dark:text-white font-bold">espalhadas por 17 estados do Brasil</label>
                        </div>
                    </div>
                </animated.div>
                <img src={ExerciseIllustration} />
            </div>

            <div className="flex flex-col items-center justify-center  gap-12 md:gap-36 px-6 text-center my-12">

                <div className="flex flex-col items-center justify-center gap-4">
                    <label className="text-lg font-semibold text-zinc-400">Modalidades</label>
                    <label className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">Modalidades andre's <span className="text-red-600">gym</span></label>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 dark:bg-zinc-901 bg-zinc-200 py-6 rounded-sm">
                    {
                        modalidades.map(modalidade => {
                            return (
                                <FeatureCard feature={modalidade} key={modalidade.id} />
                            )
                        })
                    }
                </div>

            </div>

            <div className="flex flex-col justify-center items-center gap-12 md:gap-36 px-6">
                <div className="flex flex-col items-center justify-center gap-4">
                    <label className="text-lg font-semibold text-zinc-400">Depoimentos</label>
                    <label className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white text-center">O que nossos alunos dizem?</label>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 dark:bg-zinc-901 bg-zinc-200 py-6 rounded-sm px-4">
                    {
                        Depoiments.map(depoiment => {
                            return (
                                <DepoimentCard depoiment={depoiment} key={depoiment.id} />
                            )
                        })
                    }
                </div>
            </div>

            <div className="flex flex-col justify-center items-center px-6 md:px-12 gap-12 md:gap-36 my-12">
                <div className="flex flex-col items-center justify-center gap-4">
                    <label className="text-lg font-semibold text-zinc-400">FAQ's</label>
                    <label className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white text-center">Perguntas frequentes</label>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    {
                        faq.map(faq => {
                            return (
                                <FaqCard faq={faq} key={faq.id} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex justify-between dark:bg-zinc-901 bg-zinc-300 py-6 px-12 mx-6 rounded-sm my-12 flex-wrap gap-6">
                <div className="flex flex-col justify-center items-start">
                    <label className="text-2xl md:text-4xl font-black text-zinc-900 dark:text-white">Planos que cabem no seu bolso!</label>
                    <label className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white ">Veja qual plano é melhor pra você</label>
                </div>
                <button
                    onClick={() => nav("/planos")}
                    className="flex justify-between px-6 py-4 bg-zinc-200 rounded-sm gap-6 shadow-2xl items-center w-full sm:w-72">
                    <label className="text-xl font-bold">
                        Ver Planos
                    </label>
                    <BsArrowRight size={25} />
                </button>
            </div>
            <Footer />

        </div>
    )
}