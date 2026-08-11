export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#3a2518] bg-[#2c1a10]/95 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <span className="rounded-full bg-[#8a5c39] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#f7e3ce]">
            Coffee & Dolce
          </span>
          <a href="#home" className="text-2xl font-semibold tracking-[0.15em] text-[#f3dcc4]">
        
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
          <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium text-[#f3dcc4]">
            <a href="#home" className="transition hover:text-[#f3b76f]">Início</a>
            <a href="#beneficios" className="transition hover:text-[#f3b76f]">Benefícios</a>
            <a href="#produtos" className="transition hover:text-[#f3b76f]">Menu</a>
            <a href="#depoimentos" className="transition hover:text-[#f3b76f]">Contato</a>
          </nav>

          <a href="#produtos" className="inline-flex rounded-full bg-[#8b431c] px-5 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(60,38,24,0.24)] transition hover:bg-[#6d3416]">
            Comprar
          </a>
        </div>
      </div>
    </header>
  )
}

