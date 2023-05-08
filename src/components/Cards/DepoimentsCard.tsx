import { IDepoiments } from '../../Types/Types'
import star from '../../assets/RateStar.svg'
import { useInView, animated } from '@react-spring/web'

type Props = {
    depoiment: IDepoiments
}

export default function DepoimentCard({ depoiment }: Props) {

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
        <animated.div
            className="flex"
            ref={ref}
            style={spring}>
            <div className="flex flex-col items-center justify-between gap-12 border-t-2 py-6 hover:scale-105 transition border-zinc-900 dark:border-white">
                <div className="flex gap-2">
                    {
                        Array.from({ length: depoiment.rate }).map((_, i) => {
                            return (
                                <img src={star} key={i} />
                            )
                        })
                    }
                </div>
                <label className='text-xl text-zinc-900 dark:text-white font-bold text-center'>
                    {depoiment.depoiment}
                </label>
                <div className='flex items-center gap-4'>
                    <img src={depoiment.authorImage} className='w-10 h-10 rounded-full' />
                    <label className='text-xl text-zinc-900 dark:text-white font-bold text-center'>
                        {depoiment.authorName}
                    </label>
                </div>
            </div>
        </animated.div>

    )
}