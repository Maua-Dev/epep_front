import Navbar from "./navbar";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-[#f0eeea]">
      {/* imagem de fundo + escurecimento */}
      <img
        src="/placeholder.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

      <Navbar />

      {/* conteúdo */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-10 px-6 pb-40 pt-32 md:px-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-wider text-white">
            Notícias · Debates · Política
          </p>

          <h1 className="font-jost text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Pensamento crítico para transformar realidades
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-white/70">
            Um espaço dedicado ao debate acadêmico, à formação política e à
            construção coletiva de conhecimento que impacta a sociedade.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#sobre"
              className="rounded-full bg-[#6abf5b] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#5aae4c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Conheça nosso trabalho
            </a>
            <a
              href="#projetos"
              className="rounded-full border border-[#6abf5b] bg-[#6abf5b]/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6abf5b]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Ver projetos
            </a>
          </div>
        </div>

        {/* logo grande */}
        <img
          src="/logo-epep-branca.png"
          alt="Logo EPEP"
          className="w-56 self-center sm:w-72 lg:mr-16 lg:w-[22rem]"
        />
      </div>

      {/* botão flutuante de edição */}
      <button
        type="button"
        aria-label="Editar página"
        className="absolute bottom-48 right-8 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#0f4c8a] text-white shadow-lg transition-colors hover:bg-[#0c3d70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
        </svg>
      </button>

      {/* corte diagonal na base */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 h-28 bg-[#f0eeea] md:h-36"
        style={{ clipPath: "polygon(0 70%, 100% 100%, 0 100%)" }}
      />
    </section>
  );
}