import { BsInstagram, BsTwitter } from "react-icons/bs"

import { IFundador } from "../../Types/Types"

type Props = {
    fundador: IFundador
}

export default function FundadorCard({ fundador }: Props) {
    return (
        <div className="flex flex-col gap-12 justify-center-items-center dark:bg-zinc-901 bg-zinc-200 p-12 hover:shadow-2xl transition">
            <img src={fundador.profileImage} className="rounded-full w-96" />
            <div className="flex flex-col justify-center items-center gap-4">
                <label className="text-xl lg:text-3xl font-black text-zinc-900 dark:text-white">
                    {fundador.name}
                </label>
                <label className="text-lg lg:text-2xl font-black text-red-500">
                    {fundador.function}
                </label>
                <div className="flex gap-6">
                    <button
                    
                    >
                        <BsInstagram color="#8E8E8E" />
                    </button>
                    <button>
                        <BsTwitter color="#8E8E8E" />
                    </button>
                </div>
            </div>
        </div>
    )
}