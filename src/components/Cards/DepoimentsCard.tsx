import { IDepoiments } from '../../Types/Types'
import star from '../../assets/RateStar.svg'

type Props = {
    depoiment: IDepoiments
}

export default function DepoimentCard({depoiment}: Props) {
    return (
        <div className="flex flex-col items-center justify-between gap-12 border-t-2 py-6">
            <div className="flex gap-2">
                {
                    Array.from({length:depoiment.rate}).map((_,i) => {
                        return(
                            <img src={star} key={i}/>
                        )
                    }) 
                }
            </div>
            <text className='text-xl text-white font-bold text-center'>
                {depoiment.depoiment}
            </text>
            <div className='flex items-center gap-4'>
                <img src={depoiment.authorImage} className='w-10 h-10 rounded-full'/>
                <text className='text-xl text-white font-bold text-center'>
                    {depoiment.authorName}
                </text>
            </div>
        </div>
    )
}