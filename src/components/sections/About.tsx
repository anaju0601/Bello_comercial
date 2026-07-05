import Container from "../ui/Container";
import aboutImage from "../../assets/images/products/sede.jpg";

import {
  Target,
  Eye,
  Gem,
  Handshake,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Oferecer soluções completas em distribuição, garantindo qualidade, agilidade e confiança para nossos clientes.",
    theme: {
      icon: "bg-blue-50 text-blue-600",
      accent: "bg-blue-600",
      border: "hover:border-blue-600",
    },
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser referência no mercado atacadista, reconhecida pela excelência em atendimento e inovação.",
    theme: {
      icon: "bg-emerald-50 text-emerald-600",
      accent: "bg-emerald-600",
      border: "hover:border-emerald-600",
    },
  },
  {
    icon: Gem,
    title: "Valores",
    description:
      "Ética, compromisso, transparência, respeito e foco no sucesso dos nossos parceiros.",
    theme: {
      icon: "bg-amber-50 text-amber-500",
      accent: "bg-amber-500",
      border: "hover:border-amber-500",
    },
  },
  {
    icon: Handshake,
    title: "Compromisso",
    description:
      "Construir relacionamentos duradouros através de um atendimento próximo e de soluções eficientes.",
    theme: {
      icon: "bg-red-50 text-red-600",
      accent: "bg-red-600",
      border: "hover:border-red-600",
    },
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-white py-10">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">

          {/* Lado Esquerdo */}

          <div className="relative -mt-15">
            <div className="h-[450px] overflow-hidden rounded-[28px] shadow-xl">
              <img
                src={aboutImage}
                alt="Centro de distribuição da Bello Comercial"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />
            </div>
          </div>

          {/* Lado Direito */}

          <div>

            <span className="text-sm font-bold uppercase tracking-widest text-[#005CAA]">
              SOBRE A BELLO COMERCIAL
            </span>

            <h2 className="mt-2 text-[40px] font-bold leading-[1.05] text-slate-900">
              Mais de duas décadas
              <br />
              distribuindo excelência
            </h2>

            <p className="mt-6 text-[17px] leading-8 text-slate-600">
              Fundada com o propósito de revolucionar o mercado atacadista,
              a Bello Comercial consolidou-se como uma das principais
              distribuidoras da região, oferecendo soluções completas para
              lojistas e revendedores.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-slate-600">
              Nossa infraestrutura moderna, equipe qualificada e compromisso
              com a excelência nos permitem atender com agilidade e eficiência,
              mantendo sempre o foco na satisfação e crescimento dos nossos parceiros.
            </p>

            {/* Cards */}

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className={`
                      group
                      relative
                      overflow-hidden
                      rounded-[22px]
                      border
                      border-slate-200
                      bg-[#F6F9FF]
                      p-5
                      transition-all
                      duration-300
                      ease-out
                      hover:-translate-y-2
                      hover:shadow-xl
                      ${item.theme.border}
                    `}
                  >

                    <div
                      className={`
                        mb-4
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        transition-all
                        duration-300
                        group-hover:scale-110
                        ${item.theme.icon}
                      `}
                    >
                      <Icon size={20} />
                    </div>

                    <h3 className="text-[20px] font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[14px] leading-6 text-slate-600">
                      {item.description}
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
                        group-hover:scale-x-100
                        ${item.theme.accent}
                      `}
                    />

                  </article>
                );
              })}

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}