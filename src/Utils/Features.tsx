import { IFeature, IModalidades } from "../Types/Types";
import { BsPeople, BsGear, BsClock } from 'react-icons/bs'

export const features: IFeature[] = [
    {
        id:1,
        title: "Maquinas Importadas",
        icon: <BsGear size={25} className="dark:invert" />,
        description: "Todo nosso maquinário é importado e em perfeitas condições para melhor atendê-lo"
    },
    {
        id:2,
        title: "Personal Trainers",
        icon: <BsPeople size={25} className="dark:invert" />,
        description: "Temos personal trainers para lhe acompanhar e conduzir o seu treino para melhores resultados."
    },
    {
        id:3,
        title: "24 horas",
        icon: <BsClock size={25} className="dark:invert" />,
        description: "Estamos abertos 24 horas para poder atendê-lo a qualquer hora"
    },
]

export const modalidades: IModalidades[] = [
    {
        id:1,
        title: "Musculação",
        icon: "",
        description: "Areás espaçosas, ventiladas e aconchegantes para você dar o seu melhor!"
    },
    {
        id:2,
        title: "Pilates e Yoga",
        icon: "",
        description: "Temos aulas para quem quer se alongar e relaxar com professores qualificados"
    }
]

