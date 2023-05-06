import Header from "../components/Layout/Header";
import { BsArrowRight } from 'react-icons/bs'
import { features } from "../Utils/Features";
import FeatureCard from "../components/Cards/FeaturesCard";
import ExerciseIllustration from '../assets/ExerciseIllustration.svg'

export default function Home() {
    return (
        <div className="font-inter bg-zinc-900 flex flex-col gap-6">
            <Header />
            <div className="flex p-20 items-start flex-col gap-6">
                <div className=" flex flex-col">
                    <text className="text-7xl font-black text-white">
                        Seu novo modo de
                    </text>
                    <span className="text-7xl font-black text-red-600">evoluir</span>
                </div>
                <text className="text-4xl font-bold text-white">Venha conhecer nossas academias!</text>
                <button className="flex justify-between px-6 py-4 bg-zinc-200 rounded-sm gap-6 shadow-2xl items-center">
                    <text className="text-xl font-bold">
                        Ver Planos
                    </text>
                    <BsArrowRight size={25} />
                </button>
            </div>
            <div className="border bg-zinc-300 my-2 mx-6" />

            <div className="grid md:grid-cols-3 px-6">
                {
                    features.map(feature => {
                        return (
                            <FeatureCard feature={feature} />
                        )
                    })
                }
            </div>


            <div className="border bg-zinc-300 my-2 mx-6" />

            <div className="flex px-6 items-center justify-between">
                <div className="flex flex-col gap-36">
                    <div className="border-l-4 border-red-600 flex flex-col px-4">
                            <text className="text-xl text-white font-bold">Mais de</text>
                            <text className="text-6xl text-red-600 font-extrabold">50 mil</text>
                            <text className="text-xl text-white font-bold">alunos já passaram por nossas academias</text>
                    </div>
                    <div className="border-l-4 border-red-600 flex flex-col px-4">
                            <text className="text-6xl text-red-600 font-extrabold">20 unidades</text>
                            <text className="text-xl text-white font-bold">espalhadas por 17 estados do Brasil</text>
                    </div>
                </div>
                <img src={ExerciseIllustration}/>
            </div>

            <div className="flex flex-col items-center justify-center ">
                <text className="text-5xl font-extrabold text-white">Modalidades andre's <span className="text-red-600">gym</span></text>
            </div>
        </div>
    )
}