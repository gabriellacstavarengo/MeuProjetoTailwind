import Header from './components/header'
import Hero from './components/hero'
import Benefits from './components/benefits'
import Products from './components/products'
import Testimonials from './components/testimonials'
import Footer from './components/footer'

function App() {
  return (
    <div className="min-h-screen bg-[#af653c] text-[#f3dcc4]">
      <Header />
      <main className="space-y-6">
        <Hero />
        <Benefits />
        <Products />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
