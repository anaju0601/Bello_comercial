import Container from "../ui/Container";

import {
  Boxes,
  Warehouse,
  Truck,
  MonitorCog,
} from "lucide-react";

const structureItems = [
  {
    icon: MonitorCog,
    title: "Tecnologia Integrada",
    description:
      "ERP e sistemas inteligentes garantindo precisão em toda a operação.",
  },
  {
    icon: Warehouse,
    title: "Controle de Estoque",
    description:
      "Disponibilidade de produtos com controle eficiente e reposição constante.",
  },
  {
    icon: Truck,
    title: "Logística Inteligente",
    description:
      "Processos otimizados para entregas rápidas e seguras.",
  },
  {
    icon: Boxes,
    title: "Gestão Comercial",
    description:
      "Equipe especializada oferecendo atendimento consultivo e personalizado.",
  },
];

export default function Structure() {
  return (
    <section id="estrutura" className="bg-[#005CAA] py-10">
      <Container>

        {/* Cabeçalho */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-blue-200">
            NOSSA ESTRUTURA
          </span>

          <h2 className="mt-3 text-[40px] font-bold leading-[1.05] text-white">
            Estrutura que garante
            <br />
            eficiência em cada entrega
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-blue-100">
            Investimos continuamente em tecnologia, logística e gestão para
            oferecer um atendimento ágil, seguro e eficiente aos nossos clientes.
          </p>

        </div>

        {/* Cards */}

        <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-2">

          {structureItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                  group
                  rounded-[22px]
                  border
                  border-white/10
                  bg-white/5
                  p-5
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-300/40
                  hover:bg-white/10
                "
              >

                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-blue-300 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} />
                </div>

                <h3 className="text-[20px] font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-[14px] leading-6 text-blue-100">
                  {item.description}
                </p>

              </article>
            );
          })}

        </div>

      </Container>
    </section>
  );
}