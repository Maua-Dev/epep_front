import bolinha from '../assets/bolinha.png'

export default function Navbar() {
  return (
    <>
      <div className="absolute top-4 right-4 z-20">
        <img className="h-16 w-16 rounded-full object-cover" src={bolinha} alt="" />
      </div>

      <nav className="absolute top-4 left-1/2 z-20 flex h-12 w-[648px] -translate-x-1/2 items-center justify-center gap-9 rounded-full border border-[#6BB85C] bg-[#6BB85C] px-6 py-2">
        <a href="#inicio" className="text-xs uppercase text-white transition-transform duration-300 hover:scale-110">Início</a>
        <a href="#sobre" className="text-xs uppercase text-white transition-transform duration-300 hover:scale-110">Sobre</a>
        <a href="#objetivos" className="text-xs uppercase text-white transition-transform duration-300 hover:scale-110">Objetivos</a>
        <a href="#projetos" className="text-xs uppercase text-white transition-transform duration-300 hover:scale-110">Projetos</a>
        <a href="#membros" className="text-xs uppercase text-white transition-transform duration-300 hover:scale-110">Membros</a>
        <a href="#conteudo" className="text-xs uppercase text-white transition-transform duration-300 hover:scale-110">Conteúdo</a>
        <a href="#contato" className="text-xs uppercase text-white transition-transform duration-300 hover:scale-110">Contato</a>
      </nav>
    </>
  )
}