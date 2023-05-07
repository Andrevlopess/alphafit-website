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
    )

    return (
        <animated.div
            className="flex"
            ref={ref}
            style={spring}>
            <div className="flex flex-col items-center justify-between gap-12 border-t-2 py-6 hover:scale-105 transition">
                <div className="flex gap-2">
                    {
                        Array.from({ length: depoiment.rate }).map((_, i) => {
                            return (
                                <img src={star} key={i} />
                            )
                        })
                    }
                </div>
                <text className='text-xl text-white font-bold text-center'>
                    {depoiment.depoiment}
                </text>
                <div className='flex items-center gap-4'>
                    <img src={depoiment.authorImage} className='w-10 h-10 rounded-full' />
                    <text className='text-xl text-white font-bold text-center'>
                        {depoiment.authorName}
                    </text>
                </div>
            </div>
        </animated.div>

    )
}