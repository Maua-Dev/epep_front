const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Objetivos", href: "#objetivos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Membros", href: "#membros" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-start justify-between px-4 pt-6 md:px-8">
      {/* espaço à esquerda para manter o menu centralizado */}
      <div className="hidden w-[220px] lg:block" />

      {/* menu central */}
      <nav className="mx-auto rounded-full bg-[#6abf5b] px-5 py-3 shadow-lg">
        <ul className="flex items-center gap-5 md:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[11px] font-medium uppercase text-white transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:text-xs"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* card do usuário */}
      <div className="hidden w-[220px] items-center gap-3 rounded-xl border border-white/20 bg-black/30 px-4 py-2.5 backdrop-blur-sm lg:flex">
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 shrink-0 text-white/70"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <path d="M16 17l5-5-5-5" />
          <path d="M21 12H9" />
        </svg>

        <div className="min-w-0 flex-1 leading-tight">
          <p className="text-sm font-semibold text-white">EPEP</p>
          <p className="truncate font-mono text-[10px] text-white/70">
            epepmaua@gmail.br
          </p>
        </div>

        <img
          src="/placeholder.png"
          alt="Logo EPEP"
          className="h-11 w-11 shrink-0 rounded-full bg-[#5f7f2f] object-cover"
        />
      </div>
    </header>
  );
}