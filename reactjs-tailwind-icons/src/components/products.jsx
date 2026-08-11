import expresso from '../assets/expresso.jpg'
import brownie from '../assets/brownie.jpg'
import latte from '../assets/latte.jpg'
import mocha from '../assets/hero.png'

const products = [
  {
    name: 'Espresso',
    description: 'Corpo intenso para uma dose clássica de energia.',
    price: 'R$ 13,00',
    image: expresso,
  },
  {
    name: 'Brownie',
    description: 'Sobremesa macia que combina com qualquer bebida.',
    price: 'R$ 14,00',
    image: brownie,
  },
  {
    name: 'Latte',
    description: 'Leite cremoso e espuma aveludada em cada gole.',
    price: 'R$ 16,00',
    image: latte,
  },
  {
    name: 'Mocha Caramel',
    description: 'Espresso suave com chocolate e caramelo num toque cremoso e reconfortante.',
    price: 'R$ 18,00',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
  },
]

export default function Products() {
  return (
    <section id="produtos" className="bg-[#2c1a10] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7c593b]">
            Featured
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-[#f3dcc4]">
            Cardápio 
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#e1c9b2]">
            Nossas bebidas e sobremesas são selecionadas para oferecer experiência e sabor em cada detalhe.
          </p>
        </div>

        
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article key={product.name} className="overflow-hidden rounded-[2rem] border border-[#dfc8b0] bg-white shadow-[0_20px_50px_rgba(117,75,44,0.12)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_65px_rgba(117,75,44,0.18)]">
              <img src={product.image} alt={product.name} className="h-52 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-[#432f20]">{product.name}</h3>
                <p className="mt-4 text-sm leading-7 text-[#7e5f4e]">{product.description}</p>
                <div className="mt-8 flex items-center justify-between gap-4">
                  <span className="text-lg font-semibold text-[#5d3f2c]">{product.price}</span>
                  <button className="rounded-full bg-[#3a2314] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#24140c]">
                    Comprar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
