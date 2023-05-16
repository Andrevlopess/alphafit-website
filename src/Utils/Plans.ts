import { IPlan } from "../Types/Types";

export const plans: IPlan[] = [
    {
        id: 1,
        title: "Normal",
        prevPrice: 119.90,
        atualPrice: 99.90,
        benefits: [
            "Área de musculação",
            "Área de aeróbicos e alongamentos",
            "Sem taxas de matricula ou cancelamentos"
        ],
        details: [
            "Zero taxas"
        ]
    },
    {
        id: 2,
        title: "Premium",
        prevPrice: 149.90,
        atualPrice: 119.90,
        benefits: [
            "Área de musculação",
            "Personal Trainers",
            "Treino em todas as unidades alpha fit",
            "Trazer um amigo para treinar com você",
            "Avaliação grátis a cada 90 dias",
            "Área de aeróbicos e alongamentos",
            "Sem taxas de matricula ou cancelamentos"
        ],
        details: [
            "Zero taxas",
            "Fidelidade 12 meses"
        ]
    },
]