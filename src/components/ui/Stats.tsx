import {
  Package,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react";

import StatCard from "./StatCard";

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:gap-x-10">

      <StatCard
        icon={<Package size={18} />}
        value="+10.000"
        label="Produtos"
      />

      <StatCard
        icon={<Users size={18} />}
        value="+500"
        label="Clientes Atendidos"
      />

      <StatCard
        icon={<TrendingUp size={18} />}
        value="+20"
        label="Anos de Mercado"
      />

      <StatCard
        icon={<Clock size={18} />}
        value="24h"
        label="Entrega Rápida"
      />

    </div>
  );
}