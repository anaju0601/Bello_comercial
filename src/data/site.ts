interface Partner {
  name: string;
  logo: string;
}

export const partners: Partner[] = [];
export const showPartners = import.meta.env.DEV || partners.length > 0;

export const navigation = [
  {
    label: "Início",
    href: "#inicio",
  },
  {
    label: "Sobre",
    href: "#sobre",
  },
  {
    label: "Produtos",
    href: "#produtos",
  },
  {
    label: "Marcas",
    href: "#marcas",
    available: showPartners,
  },
  {
    label: "Contato",
    href: "#contato",
    available: false,
  },
];

export const company = {
  name: "Bello Comercial",
  cta: "Solicitar orçamento",
};
