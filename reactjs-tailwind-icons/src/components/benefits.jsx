import graosdecafe from '../assets/graosdecafe.jpg'
import cafeteria from '../assets/cafeteria.jpg'
import atendente from '../assets/atendente.jpg'

const benefits = [
  {
    title: 'Café selecionado',
    description: 'Grãos especiais de origem responsável e torrados na hora.',
    image: graosdecafe,
  },
  {
    title: 'Ambiente aconchegante',
    description: 'Luz suave, música relaxante e espaço ideal para trabalhar ou conversar.',
    image: cafeteria,
  },
  {
    title: 'Atendimento acolhedor',
    description: 'Uma equipe pronta para recomendar a bebida perfeita para você.',
    image: atendente,
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="mx-auto max-w-6xl px-6 py-8">
      <div className="mb-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#edbea5]">Nossa especialidade</p>
        <h2 className="mt-2 text-3xl font-semibold text-[#3f2a1f]">Tudo pensado para o seu momento favorito</h2>
      </div>

      <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {benefits.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-3xl border border-[#3a2314] bg-[#fff1dd] shadow-[0_20px_45px_rgba(105,74,51,0.08)]">
            <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-[#432f20]">{item.title}</h3>
              <p className="mt-2 text-[#6c4f3f]">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
  