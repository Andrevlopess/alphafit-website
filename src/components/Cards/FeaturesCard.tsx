import { IFeature } from "../../Types/Types"
import { useInView, animated } from "@react-spring/web"

type Props = {
    feature: IFeature
}


export default function FeatureCard({ feature }: Props) {

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
            style={spring}
        >
            <div className="flex flex-col gap-6 justify-start items-center p-4 hover:scale-105 transition">
                <label className="text-2xl font-bold text-zinc-900 dark:text-white text-center">{feature.title}</label>
                {feature.icon}
                <label className="text-xl font-bold text-zinc-900 dark:text-white text-center">{feature.description}</label>
            </div>
        </animated.div>

    )
}