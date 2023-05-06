import { IFeature, IModalidades } from "../Types/Types";
import { BsPeople, BsGear, BsClock } from 'react-icons/bs'

export const features: IFeature[] = [
    {
        title: "Maquinas Importadas",
        icon: <BsGear size={25} color={"#fff"} />,
        description: "Todo nosso maquinário é importado e em perfeitas condições para melhor atendê-lo"
    },
    {
        title: "Personal Trainers",
        icon: <BsPeople size={25} color={"#fff"} />,
        description: "Temos personal trainers para lhe acompanhar e conduzir o seu treino para melhores resultados."
    },
    {
        title: "24 horas",
        icon: <BsClock size={25} color={"#fff"} />,
        description: "Estamos abertos 24 horas para poder atendê-lo a qualquer hora"
    },
]

export const modalidades: IModalidades[] = [
    {
        title: "Musculação",
        icon: "",
        description: "Temos aulas para quem quer se alongar e relaxar com professores qualificados"
    },
    {
        title: "Pilates e Yoga",
        icon: "",
        description: "Temos aulas para quem quer se alongar e relaxar com professores qualificados"
    },
    {
        title: "Artes Marciais",
        icon: "",
        description: "Temos aulas para quem quer se alongar e relaxar com professores qualificados"
    },
]

