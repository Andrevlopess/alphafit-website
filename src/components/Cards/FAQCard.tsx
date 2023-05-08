import { IFaq } from "../../Types/Types"
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { useState } from 'react'

type Props = {
    faq: IFaq
}


export default function FaqCard({ faq }: Props) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b-2 p-4 gap-6 flex flex-col border-zinc-900 dark:border-white">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center gap-4">
                <label className="text-lg md:text-2xl font-bold text-zinc-900 dark:text-white">
                    {faq.question}
                </label>

                {isOpen ?
                    <BsChevronUp size={25} className="dark:invert" />
                    :
                    <BsChevronDown size={25} className="dark:invert" />

                }


            </div>
            {
                isOpen &&
                <label className="text-xl dark:text-zinc-400 text-zinc-700">{faq.response}</label>
            }
        </div>
    )
}