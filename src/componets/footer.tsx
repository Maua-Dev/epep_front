
export default function footer() {
  return (
          <footer className="relative z-10 w-full flex items-center justify-between px-8 py-4">
        <span className="font-jost text-white text-sm">
          © 2026 Entidade Acadêmica. Todos os direitos reservados.
        </span>
        <div className="flex gap-6">
          <a href="#Termos" className="font-jost text-white text-sm hover:underline">Termos</a>
          <a href="#Privacidade" className="font-jost text-white text-sm hover:underline">Privacidade</a>
        </div>
      </footer>

  )
}