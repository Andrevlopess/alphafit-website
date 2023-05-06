import { IFeature } from "../../Types/Types"

type Props = {
  feature : IFeature
}


export default function FeatureCard({feature} : Props) {
    return (
        <div className="flex flex-col gap-6 justify-center items-center p-4">
            <text className="text-2xl font-bold text-white">{feature.title}</text>
            {feature.icon}
            <text className="text-xl font-bold text-white text-center">{feature.description}</text>
        </div>
    )
}