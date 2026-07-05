import {
  Package,
  Headphones,
  Database,
  Truck,
} from "lucide-react";

import Container from "../ui/Container";

const features = [
  {
    icon: Package,
    title: "Grande Variedade",
    description:
      "Mais de 10.000 produtos nacionais e importados para atender todas as necessidades do seu negócio.",
    theme: {
      icon: "bg-blue-50 text-blue-600",
      accent: "bg-blue-600",
      border: "hover:border-blue-600",
    },
  },
  {
    icon: Headphones,
    title: "Atendimento Especializado",
    description:
      "Equipe dedicada e consultiva para orientar suas compras e garantir o melhor custo-benefício.",
    theme: {
      icon: "bg-red-50 text-red-600",
      accent: "bg-red-600",
      border: "hover:border-red-600",
    },
  },
  {
    icon: Database,
    title: "Estoque Disponível",
    description:
      "Controle rigoroso de inventário garantindo disponibilidade imediata dos produtos.",
    theme: {
      icon: "bg-emerald-50 text-emerald-600",
      accent: "bg-emerald-600",
      border: "hover:border-emerald-600",
    },
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description:
      "Logística eficiente com frota própria para entregas ágeis e seguras.",
    theme: {
      icon: "bg-amber-50 text-amber-500",
      accent: "bg-amber-500",
      border: "hover:border-amber-500",
    },
  },
];

export default function Differentials() {
  return (
    <section className="bg-white py-14">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-[#005CAA]">
            POR QUE ESCOLHER A BELLO
          </span>

          <h2 className="mt-3 text-[36px] font-bold text-slate-900">
            Nossos Diferenciais
          </h2>

          <p className="mt-6 text-[20px] leading-8 text-slate-600">
            Mais de 20 anos de experiência no mercado atacadista,
            sempre inovando para servir melhor.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 lg:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-7
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-2
                  hover:shadow-xl
                  ${feature.theme.border}
                `}
              >
                <div
                  className={`
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    transition-all
                    duration-300
                    ease-out
                    group-hover:scale-110
                    ${feature.theme.icon}
                  `}
                >
                  <Icon size={24} strokeWidth={2.2} />
                </div>

                <h3 className="text-[24px] font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  {feature.description}
                </p>

                <div
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-full
                    origin-left
                    scale-x-0
                    transition-transform
                    duration-300
                    ease-out
                    group-hover:scale-x-100
                    ${feature.theme.accent}
                  `}
                />
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}