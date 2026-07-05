import { useState } from "react";
import Container from "../ui/Container";

import {
  UserPlus,
  MessagesSquare,
  PackageCheck,
  ClipboardCheck,
  Truck,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    theme: {
      active: "bg-blue-600 text-white",
      inactive: "bg-blue-100 text-blue-600",
    },
    title: "Cadastro",
    description: "Cadastre sua empresa para iniciarmos o atendimento.",
  },
  {
    icon: MessagesSquare,
    theme: {
      active: "bg-yellow-600 text-white",
      inactive: "bg-yellow-100 text-blue-600",
    },
    title: "Consultoria",
    description: "Nossa equipe entende sua necessidade.",
  },
  {
    icon: PackageCheck,
    theme: {
      active: "bg-red-600 text-white",
      inactive: "bg-red-100 text-blue-600",
    },
    title: "Pedido",
    description: "Confirmamos seu pedido rapidamente.",
  },
  {
    icon: ClipboardCheck,
    theme: {
      active: "bg-green-600 text-white",
      inactive: "bg-green-100 text-blue-600",
    },
    title: "Separação",
    description: "Conferimos todos os produtos.",
  },
  {
    icon: Truck,
    theme: {
      active: "bg-blue-600 text-white",
      inactive: "bg-blue-100 text-blue-600",
    },
    title: "Entrega",
    description: "Receba seus produtos com rapidez.",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(-1);

  return (
    <section id="processo" className="bg-white py-10">
      <Container>

        {/* Cabeçalho */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-[#005CAA]">
            COMO FUNCIONA
          </span>

          <h2 className="mt-3 text-[40px] font-bold leading-[1.05] text-slate-900">
            Processo Comercial
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-slate-600">
            Conheça as etapas para iniciar sua parceria com a Bello Comercial.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mx-auto mt-12 max-w-6xl">

          {/* Linha cinza */}

          <div className="absolute left-0 right-0 top-7 h-[2px] bg-slate-200" />

          {/* Linha azul */}

            <div
              className="
                absolute
                left-0
                top-7
                h-[3px]
                overflow-hidden
                rounded-full
                bg-[#005CAA]
                transition-all
                duration-500
                ease-out
              "
            style={{
              width:
                activeStep === -1
                  ? "0%"
                  : `${(activeStep / (steps.length - 1)) * 100}%`,
            }}
          >
            <div
              className={`
                absolute
                inset-0
                ${
                  activeStep !== -1
                    ? "animate-process-shine"
                    : ""
                }
              `}
            />
            </div>

          {/* Etapas */}

          <div className="relative grid grid-cols-5 gap-6">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(-1)}
                  className="group flex flex-col items-center text-center"
                >

                  {/* Ícone */}

                <div
                  className={`
                    relative
                    z-10
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    transition-all
                    duration-500
                    ${
                      activeStep >= index
                        ? `${step.theme.active} scale-110 shadow-lg`
                        : step.theme.inactive
                    }
                  `}
                >
                  <Icon size={24} />
                </div>

                  {/* Título */}

                  <h3 className="mt-5 text-[18px] font-bold text-slate-900">
                    {step.title}
                  </h3>

                  {/* Texto */}

                  <p className="mt-2 max-w-[170px] text-[14px] leading-6 text-slate-600">
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </Container>
    </section>
  );
}