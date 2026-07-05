import Container from "../ui/Container";
import Button from "../ui/Button";
import FloatingCard from "../ui/FloatingCard";
import Stats from "../ui/Stats";
import heroImage from "../../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#F6F9FF] pt-4 pb-8"
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr]">

          {/* Conteúdo */}
          <div className="max-w-[560px]">

            <span className="inline-flex h-10 items-center rounded-full border border-blue-200 bg-blue-100 px-5 text-sm font-semibold text-blue-700">
              Distribuidor Atacadista Premium
            </span>

            <h1 className="mt-5 text-[54px] font-extrabold leading-[1.08] tracking-[-2px] text-slate-900">
              Distribuindo qualidade
              <br />
              para o{" "}
              <span className="text-[#005CAA]">
                crescimento
              </span>{" "}
              do seu negócio.
            </h1>

            <p className="mt-5 max-w-[540px] text-[17px] leading-8 text-slate-600">
              Soluções completas em doces, chocolates, bebidas,
              vinhos, importados e utilidades para lojistas e
              revendedores.
            </p>

            <div className="mt-7 flex gap-4">
              <Button>
                Solicitar orçamento
              </Button>

              <Button variant="secondary">
                Falar no WhatsApp
              </Button>
            </div>

            <div className="mt-10">
              <Stats />
            </div>

          </div>

          {/* Imagem */}

          <div className="relative flex justify-end pt-12">

            <div className="h-[420px] w-full max-w-[620px] overflow-hidden rounded-[28px] bg-slate-300 shadow-lg">
              <img
              src={heroImage}
              alt="Centro de distribuição"
              className="h-full w-full object-cover"/>
            </div>

            <FloatingCard />

          </div>

        </div>
      </Container>
    </section>
  );
}