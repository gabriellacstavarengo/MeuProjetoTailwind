const heroImage = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#2c1a10] text-white">
      <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-6 lg:py-12">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6 lg:max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#f3d5b1] bg-[#5d3a27]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#f9e4c7]">
              <span className="h-2 w-2 rounded-full bg-[#f3b76f]" /> Featured
            </span>

            <div className="space-y-5">
              <h1 className="text-5xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-6xl">
                COFFEE & DOLCE
              </h1>
              <p className="text-base leading-7 text-[#e8d8c3] sm:text-lg">
                Café artesanal com aroma intenso, acabamento cremoso e estilo aconchegante para sua pausa perfeita.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#produtos" className="inline-flex rounded-full bg-[#f3b76f] px-7 py-3 text-sm font-semibold text-[#2c1a10] shadow-lg shadow-[#2c1a10]/20 transition hover:bg-[#e9a05b]">
                Ver cardápio
              </a>
              <a href="#beneficios" className="inline-flex rounded-full border border-[#f3d5b1] bg-[#2c1a10]/70 px-7 py-3 text-sm font-semibold text-[#f3dcc4] transition hover:bg-[#3b2317]/90">
                Saiba mais
              </a>
            </div>
          </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#503826] bg-[#1f120b] shadow-[0_35px_100px_rgba(0,0,0,0.25)]">
            <img src={heroImage} alt="Coffee cup" className="h-72 w-full object-cover sm:h-96 lg:h-[520px]" />
            <div className="absolute inset-x-0 bottom-0 rounded-b-[2.5rem] bg-gradient-to-t from-[#1b0f0a]/95 via-transparent to-transparent px-8 py-8">
              <span className="inline-flex rounded-full bg-[#c08b5a]/95 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#c08b5a]/95]">
                Best Seller
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-white">Mocha Caramel</h2>
              <p className="mt-3 max-w-sm text-sm leading-7 text-[#f9f9f9] ">
                Espresso suave com chocolate e caramelo num toque cremoso e reconfortante.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="text-2xl font-semibold text-white">R$ 18,00</span>
                <span className="rounded-full bg-[#8b431c] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#f9f9f9]">
                  Popular
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
