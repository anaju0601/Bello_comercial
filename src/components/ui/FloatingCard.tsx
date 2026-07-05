export default function FloatingCard() {
  return (
    <div className="absolute bottom-6 right-6 rounded-2xl bg-white px-6 py-4 shadow-xl">
      <div className="flex items-center gap-3">
        <span className="h-3 w-3 rounded-full bg-emerald-400"></span>

        <div>
          <p className="text-xs text-slate-500">
            Status de Operação
          </p>

          <p className="text-xl font-semibold text-slate-900">
            Ativo 24/7
          </p>
        </div>
      </div>
    </div>
  );
}