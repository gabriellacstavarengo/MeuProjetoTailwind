import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

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
