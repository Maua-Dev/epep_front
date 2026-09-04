import './App.css'

export default function App() {
  return (
    <main className="w-full">
      <section className="relative flex min-h-screen w-full items-start overflow-hidden bg-[#F1F0ED] pt-24 pb-16">
        
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 1000 700"
          aria-hidden="true"
        >
          <g stroke="#FEF9F3" strokeWidth="3">
            <line x1="0" y1="120" x2="500" y2="0" />
            <line x1="120" y1="700" x2="700" y2="0" />
            <line x1="400" y1="700" x2="950" y2="120" />
            <line x1="700" y1="700" x2="1000" y2="380" />
            <line x1="0" y1="380" x2="260" y2="700" />
          </g>
        </svg>

        <div className="relative mx-auto max-w-5xl px-6">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#ADACAA]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#ADACAA]">
              01 — INÍCIO
            </span>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[260px_1fr] md:gap-6">
            <div className="relative">
              <div
                className="flex min-h-[220px] w-full max-w-[260px] flex-col justify-center bg-[#094782] py-6 pl-10 pr-6"
                style={{
                  clipPath: 'polygon(100% 0%, 0% 28%, 0% 70%, 100% 100%)',
                }}
              >
                <h2 className="font-sans text-4xl font-extrabold leading-[1.05] text-white md:text-5xl">
                  Quem
                  <br />
                  Somos
                </h2>
              </div>
            </div>

            {/* Text content */}
            <div className="max-w-2xl space-y-5 pt-2 md:pt-8">
              <p className="text-lg leading-relaxed text-[#262626] md:text-xl">
                Uma entidade acadêmica comprometida com a formação política, o
                debate qualificado e a construção de pensamento crítico que
                transforma realidades.
              </p>

              <p className="text-lg leading-relaxed text-[#262626] md:text-xl">
                Nossa missão é criar{' '}
                <strong className="font-bold">espaços de diálogo</strong> que
                conectem teoria e prática, academia e sociedade, fomentando
                transformações estruturais por meio do conhecimento
                compartilhado e da ação coletiva organizada.
              </p>

              <p className="text-sm leading-relaxed text-[#6B6A68] md:text-base">
                Acreditamos que o debate rigoroso, fundamentado em método e
                evidências, é ferramenta essencial para compreender e intervir
                nas dinâmicas políticas, econômicas e sociais contemporâneas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
