import Container from "../ui/Container";

import doces from "../../assets/images/products/doces.jpg";
import chocolates from "../../assets/images/products/chocolates.jpg";
import bebidas from "../../assets/images/products/bebidas.png";
import vinhos from "../../assets/images/products/vinhos.jpg";
import importados from "../../assets/images/products/importados.jpg";
import utilidades from "../../assets/images/products/utilidades.jpg";

const products = [
  {
    title: "Doces",
    description: "Ampla variedade de doces nacionais e importados.",
    image: doces,
    overlay: "from-pink-600/80 to-pink-400/40",
  },
  {
    title: "Chocolates",
    description: "Marcas premium e produtos artesanais.",
    image: chocolates,
    overlay: "from-orange-900/80 to-orange-500/30",
  },
  {
    title: "Bebidas",
    description: "Refrigerantes, sucos e energéticos.",
    image: bebidas,
    overlay: "from-cyan-600/80 to-cyan-400/30",
  },
  {
    title: "Vinhos",
    description: "Seleção de vinhos nacionais e importados.",
    image: vinhos,
    overlay: "from-violet-800/80 to-violet-500/30",
  },
  {
    title: "Importados",
    description: "Produtos gourmet de diversos países.",
    image: importados,
    overlay: "from-emerald-700/80 to-emerald-400/30",
  },
  {
    title: "Utilidades",
    description: "Utensílios e equipamentos profissionais.",
    image: utilidades,
    overlay: "from-slate-700/80 to-slate-500/30",
  },
];

export default function Products() {
  return (
    <section id="produtos" className="bg-[#F6F9FF] py-14">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-[#005CAA]">
            NOSSO PORTFÓLIO
          </span>

          <h2 className="mt-3 text-[36px] font-bold text-slate-900">
            Categorias de Produtos
          </h2>

          <p className="mt-5 text-[17px] leading-8 text-slate-600">
            Tudo o que seu negócio precisa em um só lugar,
            com a qualidade e variedade que você merece.
          </p>

        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (
            <article
              key={product.title}
              className="
                group
                relative
                h-[250px]
                overflow-hidden
                rounded-[22px]
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >

              <img
                src={product.image}
                alt={product.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              <div
                className={`
                  absolute
                  inset-0
                  bg-gradient-to-t
                  ${product.overlay}
                  from-5%
                  via-40%
                  to-transparent
                  transition-all
                  duration-500
                  group-hover:opacity-95
                `}
              />

              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">

                <h3 className="text-[26px] font-bold">
                  {product.title}
                </h3>

                <p className="mt-2 text-[15px] leading-6 text-white/90">
                  {product.description}
                </p>

                <button
                  className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                  "
                >
                  Explorar

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </button>

              </div>

            </article>
          ))}

        </div>

      </Container>
    </section>
  );
}