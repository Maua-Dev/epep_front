import fundo from "../assets/Fundo_About.png"


export default function QuemSomos(){
  return(
    <main
    style={{ backgroundImage: `url(${fundo})` }}
    className="min-h-screen w-full bg-cover flex gap-4 items-center">
    <div className="h-120">
    <div className="bg-[#094782] h-50 w-70 flex justify-center flex-wrap rounded-2xl">
      <div className="flex gap-4 items-center absolute">
        <div className="bg-black h-0.5 w-6"></div>
        <p className="text-gray-300">01 - Inicio</p>
      </div>
      
      <h1 className="text-white font-semibold text-6xl flex text-center h-full items-center ">Quem Somos</h1>
    </div>

    </div>
    <div className="flex flex-col gap-8 flex-wrap w-full items-center">
      <p className="text-4xl w-220">Uma entidade acadêmica comprometida com a formação política, o debate qualificado e a construção de pensamento crítico que transforma realidades.</p>
      <p className="text-2xl w-220">Nossa missão é criar espaços de diálogo que conectem teoria e prática, academia e sociedade, fomentando transformações estruturais por meio do conhecimento compartilhado e da ação coletiva organizada.</p>
      <p className="text-lg w-220">Acreditamos que o debate rigoroso, fundamentado em método e evidências, é ferramenta essencial para compreender e intervir nas dinâmicas políticas, econômicas e sociais contemporâneas.</p>
    </div>
    </main>
  )
}
