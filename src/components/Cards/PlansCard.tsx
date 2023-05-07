import { IPlan } from "../../Types/Types"
import { BsCheck2 } from 'react-icons/bs'
import { useInView, animated } from '@react-spring/web'

type Props = {
    plan: IPlan
}

export default function PlanCard({ plan }: Props) {

    const [ref, spring] = useInView(
        () => ({
            from: {
                opacity: 0,
            },
            to: {
                opacity: 1,
            },
        }),
    )

    return (
        <animated.div
            className="flex"
            ref={ref}
            style={spring}
        >
            <div className="flex flex-col border-t-8 border-red-500 gap-12 items-center p-8 dark:bg-zinc-900 bg-zinc-100 justify-between shadow-2xl">
                <div className="flex flex-col gap-12">
                    <label className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-white text-center">
                        {plan.title}
                   </label>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <label className="text-lg md:text-xl font-extrabold text-zinc-900 dark:text-white text-center">
                            de <span className="line-through">{plan.prevPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span> por
                       </label>
                        <label className="text-2xl md:text-4xl font-extrabold text-zinc-900 dark:text-white text-center">
                            {`R$ ${plan.atualPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}
                       </label>
                    </div>
                    <div className="border w-full" />

                    <div className="flex flex-col items-start gap-6">
                        {plan.benefits.map((benefit,i) => {
                            return (
                                <div className="flex items-center gap-6" key={i}>
                                    <BsCheck2 color="green" size={25} />
                                    <label className="text-md md:text-lg font-semibold text-zinc-900 dark:text-white">
                                        {benefit}
                                   </label>
                                </div>
                            )
                        })}
                    </div>

                </div>


                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col justify-center items-center gap-2">
                        {plan.details.map((detail, i) => {
                            return (
                                <label className="text-sm text-zinc-900 dark:text-zinc-300" key={i}>
                                    {detail}
                               </label>
                            )
                        })}
                    </div>
                    <button className="hover:opacity-90 flex items-center justify-center  py-4 bg-zinc-900 dark:bg-zinc-100 shadow-xl rounded-sm">
                        <label className="dark:text-zinc-900 text-white font-bold text-2xl">Assinar</label>
                    </button>
                </div>


            </div>
        </animated.div>

    )
}