import { plans } from "../Utils/Plans";
import PlanCard from "../components/Cards/PlansCard";
import FAB from "../components/FAB";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

export default function PlansPage() {


    return (
        <div className="font-archivo dark:bg-zinc-900 bg-zinc-100 transition">
            <FAB/>
            <Header />
            <div className="flex flex-col justify-center items-center gap-12 md:gap-36 my-12 md:my-36">
                <label className="text-4xl lg:text-7xl font-black text-zinc-900 dark:text-white">
                    Nossos planos
                </label>

                <div className="grid md:grid-cols-2 gap-16 px-4">
                    {plans.map(plan => {
                        return (
                            <PlanCard plan={plan} key={plan.id}/>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}