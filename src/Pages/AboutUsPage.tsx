import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import BrasilMap from '../assets/BrasilMap.svg'
import { fundadores } from "../Utils/Fundadores";
import FundadorCard from "../components/Cards/FundadorCard";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { faq } from "../Utils/FAQ";
import FaqCard from "../components/Cards/FAQCard";
export default function AboutUsPage() {

    const nav = useNavigate()

    return (
        <div className="font-archivo dark:bg-zinc-900 bg-zinc-100 flex flex-col gap-24 transition">
            <Header />
            <div className="flex items-center flex-col gap-8 border-b-2 md:mx-12 md:p-12 mx-4 p-4">
                <label className="text-4xl lg:text-7xl font-extrabold text-zinc-900 dark:text-white">Alpha <span className="text-violet-600">fit</span></label>
                <label className="text-xl lg:text-3xl font-black text-zinc-900 dark:text-white">
                    Desde 2010 acreditando na sua evolução!
                </label>
            </div>
            <div className="flex flex-col justify-center items-center gap-24 md:mx-12 md:p-12 mx-4 p-4">
                <label className="text-xl lg:text-3xl font-black text-zinc-900 dark:text-white">
                   A <span className="text-violet-500">segunda</span>  maior academia de São Paulo e a <span className="text-violet-500">quinta</span> maior do Brasil
                </label>
                <img src={BrasilMap} className="drop-shadow-lg" />
            </div>
            <div className="dark:bg-zinc-900 bg-zinc-100 flex flex-col md:gap-24 gap-6 md:mx-12 md:p-12 mx-4 p-4 justify-center items-center">
                <label className="text-xl lg:text-3xl font-black text-zinc-900 dark:text-white text-center">
                    Conheça os fundadores da Aplha <span className="text-violet-600">fit</span>
                </label>
                <div className="grid lg:grid-cols-2 gap-6 rounded-sm">
                    {
                        fundadores.map(fundador => {
                            return (
                                <FundadorCard fundador={fundador} key={fundador.id}/>
                            )
                        })
                    }

                </div>
            </div>
            <div className="flex justify-between dark:bg-zinc-901 bg-zinc-300 py-6 px-12 mx-6 rounded-sm flex-wrap gap-6">
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
            <div className="flex flex-col justify-center items-center px-6 md:px-12 gap-12 md:gap-36">
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

            <Footer />
        </div>
    )
}