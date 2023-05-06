import { IFaq } from "../../Types/Types"
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { useState } from 'react'

type Props = {
    faq: IFaq
}


export default function FaqCard({ faq }: Props) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b-2 p-4 gap-6 flex flex-col">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center gap-4">
                <text className="text-lg md:text-2xl font-bold text-white">
                    {faq.question}
                </text>

                {isOpen ?
                    <BsChevronUp size={25} color="#fff" />
                    :
                    <BsChevronDown size={25} color="#fff" />

                }


            </div>
            {
                isOpen &&
                <text className="text-xl text-zinc-400">{faq.response}</text>
            }
        </div>
    )
}