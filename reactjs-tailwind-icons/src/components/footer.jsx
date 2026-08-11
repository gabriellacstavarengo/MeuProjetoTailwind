export default function Footer() {
  return (
    <footer className="border-t border-[#1e130c] bg-[#2c1a10] py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-[#f3dcc4]">COFFEE & DOLCE</p>
          <p className="mt-2 text-sm text-[#e1c9b2]">Rua do Café, 123 • Aberto todos os dias das 6h às 22h</p>
        </div>

        <div className="flex flex-col items-center gap-4 text-sm text-[#e1c9b2] md:items-end">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="transition hover:text-[#f3b76f]">Facebook</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-[#f3b76f]">Instagram</a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="transition hover:text-[#f3b76f]">Twitter</a>
          </div>
          <p className="text-xs text-[#bfa98a]">© 2026 Coffee & Dolce. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
