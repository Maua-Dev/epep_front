import logobranco from "../assets/logobranco.png"
import fundo from "../assets/fundo.png"


export default function MainPage (){
  return(
    <main 
    style={{ backgroundImage: `url(${fundo})` }} 
    className={`relative bg-cover bg-center bg-no-repeat w-full min-h-screen justify-center items-center flex`}>

      <div className=" absolute inset-0 bg-black/50 absolute">
      </div>

      <div className='flex z-10 gap-20 justify-center'>
        <div className='flex flex-col gap-5 px-25 py-25 text-white'>
        <p>
          NOTÍCIAS . DEBATES . POLÍTICA 
        </p>
      <div className="flex items-center">
        <h1 className='text-8xl w-200 text-white font-bold'>
          Pensamento crítico para transformar realidades
        </h1>
      <img className='h-96 w-96' src={logobranco} alt="" />
      </div>
      <div>
        <p className='w-100 text-white'>
          Um espaço dedicado ao debate acadêmico, à formação política e à construção coletiva de conhecimento que impacta a sociedade
        </p>
      </div>
      <div className='flex gap-4 '>
      <button className="bg-[#6BB85C] rounded-3xl px-4 py-2 hover:scale-110 transition-all duration-300">
        conheça nosso trabalho
      </button> 

      <button className="bg-green-300/30 rounded-3xl border-2 border-[#6BB85C] px-4 py-2 hover:scale-110 transition-all duration-300">
        ver projetos
      </button>
     
     </div>
     </div>
     </div>
    </main>
  )
}