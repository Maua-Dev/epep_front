import areas from "../assets/areas.png"
import { Calendar, Users, FileText, ArrowUpRight } from 'lucide-react'

export default function Iniciativas (){
  return(
    <main className='relative min-h-screen overflow-hidden'>
      <img src={areas} alt="" className='fixed inset-0 -z-10 h-full w-full object-cover' />
      
      <div className='mx-auto flex max-w-8xl flex-col gap-8 px-16 py-12'>

        <h1 className='text-7xl font-semibold'>
          Iniciativas em <br />destaque 
        </h1>
      

      
      <article className='flex gap-12 rounded-sm bg-[#A0C72B] px-24 py-14 text-white shadow-md'>
        <div className='flex flex-col items-start gap-4 px-10 py-12'>
          <span className='text-6xl font-light -mt-10'>01</span>
          <span className='bg-white/30 px-2 py-1 text-xs uppercase'>Projeto</span>
          <hr className='w-16 border-t-2 border-white'/>
        </div>

      <div className='flex flex-1 flex-col gap-4'>
        <h3 className='text-5xl font-normal'>
          Comissão de Políticas nas Escolas
        </h3>
        <p className='max-w-2xl text-lg font-light'>
          Série de encontros mensais com pesquisadores e ativistas para discutir os desafios da democracia no século XXI, articulando teoria política clássica com análise conjuntural.
        </p>

        <div className='flex items-center justify-between border-t border-white pt-3'>
          <div className='flex gap-6 text-xs font-light'>
            <span className=' flex items-center gap-2'>
              <Calendar size={14} /> 2 encontros/ano</span>
            <span className='flex items-center gap-2'>
              <Users size={14} /> 35+ participantes</span>
            <span className='flex items-center gap-2'>
              <FileText size={14} /> Em andamento</span>
          </div>
          <a href="#" className='flex items-center gap-2 text-2xl font-medium'>
            Saiba mais  <ArrowUpRight size={24} /> </a>
        </div>
      </div>
      </article>
      

      
      <article className='flex gap-12 rounded-sm bg-[#6BB85C] px-24 py-14 text-white shadow-md'>
        <div className='flex flex-col items-start gap-4 px-10 py-12'>
          <span className='text-6xl font-light -mt-10'>02</span>
          <span className='bg-white/30 px-2 py-1 text-xs uppercase'>Projeto</span>
          <hr className='w-16 border-t-2 border-white'/>
        </div>

        <div className='flex flex-1 flex-col gap-4'>
        <h3 className='text-5xl font-normal'>
          Comissão de Política nas Escolas
        </h3>
        <p className='max-w-2xl text-lg font-light'>
          Série de encontros mensais com pesquisadores e ativistas para discutir os desafios da democracia no século XXI, articulando teoria política clássica com análise conjuntural.
        </p>

        <div className='flex items-center justify-between border-t border-white pt-3'>
          <div className='flex gap-6 text-xs'>
            <span className='flex items-center gap-2'>
              <Calendar size={14} /> 2 encontros/ano</span>
            <span className='flex items-center gap-2'>
              <Users size={14} /> 35+ participantes</span>
            <span className='flex items-center gap-2'>
              <FileText size={14} /> Em andamento</span>
          </div>
          <a href="#" className='flex items-center gap-2 text-2xl font-medium'>
            Saiba mais <ArrowUpRight size={24} /> </a>
        </div>
        </div>
      </article>
      
      
      </div>
    </main>
  )}