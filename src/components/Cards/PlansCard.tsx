import { IPlan } from "../../Types/Types"
import { BsCheck2 } from 'react-icons/bs'

type Props = {
    plan: IPlan
}

export default function PlanCard({ plan }: Props) {

    return (
        <div className="flex flex-col border-t-8 border-red-500 gap-12 items-center p-8 bg-zinc-800 justify-between shadow-2xl">
            <div className="flex flex-col gap-12">
                <text className="text-2xl md:text-3xl font-extrabold text-white text-center">
                    {plan.title}
                </text>
                <div className="flex flex-col justify-center items-center gap-2">
                    <text className="text-lg md:text-xl font-extrabold text-white text-center">
                        de <span className="line-through">{plan.prevPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span> por
                    </text>
                    <text className="text-2xl md:text-4xl font-extrabold text-white text-center">
                        {`R$ ${plan.atualPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
                    </text>
                </div>
                <div className="border w-full" />

                <div className="flex flex-col items-start gap-6">
                    {plan.benefits.map(benefit => {
                        return (
                            <div className="flex items-center gap-6">
                                <BsCheck2 color="green" size={25} />
                                <text className="text-md md:text-lg font-semibold text-white">
                                    {benefit}
                                </text>
                            </div>
                        )
                    })}
                </div>

            </div>


            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col justify-center items-center gap-2">
                    {plan.details.map(detail => {
                        return (
                            <text className="text-sm text-zinc-300">
                                {detail}
                            </text>
                        )
                    })}
                </div>
                <button className="flex items-center justify-center  py-4 bg-zinc-100 shadow-xl rounded-sm">
                    <text className="text-zinc-950 font-bold text-2xl">Assinar</text>
                </button>
            </div>


        </div>
    )
}