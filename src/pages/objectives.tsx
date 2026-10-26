import objetivos from "../../src/assets/objetivos.png";

export default function Objectives() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute top-2 h-full w-full bg-[length:100%_100%]"
        style={{ backgroundImage: `url(${objetivos})` }}
      />
      <div className="relative px-24">
        <div className="mb-6 flex items-center gap-3 text-xs font-inter font-medium tracking-widest">
          <span className="h-px w-8 bg-black" />
          02 — OBJETIVOS
        </div>

        <div className="grid grid-cols-[1fr_3fr] gap-10 ">
          <h2 className="font-jost font-medium text-7xl leading-tight">
            Nossos
            <br />
            objetivos
          </h2>

          <div className="pt-40">
            <p className="mb-16 font-jost font-light text-4xl">
              Princípios que orientam nossa ação coletiva na construção
              <br />
              de conhecimento crítico e transformação social.
            </p>

            <div className="grid grid-cols-2 gap-x-10 gap-y-5 max-w-[880px] ">
              <div className="bg-[rgba(9,71,130,1)] px-8 py-10 text-white [clip-path:polygon(0_0,100%_16%,100%_75%,0_100%)]">
                <h3 className="mb-4 text-4xl font-jost font-light">
                  Rigor metodológico
                </h3>
                <p className="text-2xl font-jost font-light">
                  Compromisso com a análise fundamentada, uso criterioso de
                  evidências e honestidade intelectual.
                </p>
              </div>

              <div className="bg-[rgba(9,71,130,1)] px-8 py-10 text-white [clip-path:polygon(0_0,100%_16%,100%_75%,0_100%)]">
                <h3 className="mb-4 text-4xl font-jost font-light">
                  Pluralismo democrático
                </h3>
                <p className="text-2xl font-jost font-light">
                  Valorização da diversidade de perspectivas e construção
                  coletiva do conhecimento.
                </p>
              </div>

              <div className="bg-[rgba(9,71,130,1)]  px-8 py-16 text-white -mt-6 [clip-path:polygon(0_24%,100%_0,100%_100%,0_85%)]">
                <h3 className="mb-4 text-4xl font-jost font-light">
                  Práxis transformadora
                </h3>
                <p className="text-2xl font-jost font-light">
                  Articulação permanente entre reflexão teórica e intervenção
                  política concreta.
                </p>
              </div>

              <div className="bg-[rgba(9,71,130,1)] px-8 py-16 text-white -mt-6 [clip-path:polygon(0_24%,100%_0,100%_100%,0_85%)]">
                <h3 className="mb-4 text-4xl font-jost font-light">
                  Autonomia crítica
                </h3>
                <p className="text-2xl font-jost font-light">
                  Independência em relação a estruturas partidárias e recusa de
                  instrumentalização.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
