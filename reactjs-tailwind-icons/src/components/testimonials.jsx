const testimonials = [
  {
    name: 'Larissa',
    quote: 'O café é delicioso e o ambiente me faz esquecer do tempo. Recomendo para qualquer manhã.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Ricardo',
    quote: 'A qualidade e o atendimento são incríveis. Sempre volto para experimentar as novidades.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Camila',
    quote: 'A melhor combinação de doce e café que já provei. Um lugar para apreciar com calma.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#edbea5]">
          Reviews
        </p>
        <h2 className="mt-3 text-4xl font-semibold text-[#3b2718]">
          O que nossos clientes dizem
        </h2>
      </div>

      <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <blockquote key={item.name} className="overflow-hidden rounded-[2rem] border border-[#3a2314] bg-[#fff1dd] shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
            <div className="flex items-center gap-4 border-b border-[#d8c8b4] px-5 py-5">
              <img src={item.image} alt={item.name} className="h-14 w-14 rounded-full object-cover" />
              <div>
                <p className="text-lg font-semibold text-[#3b2718]">{item.name}</p>
              </div>
            </div>
            <div className="px-5 pb-5 pt-4">
              <p className="text-[#3b2718] leading-7">“{item.quote}”</p>
            </div>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
