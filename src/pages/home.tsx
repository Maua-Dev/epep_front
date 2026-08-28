import fotoPessoas from "../../src/assets/people.png"
import Footer from "../componets/footer"
import { FaInstagram } from "react-icons/fa";
import { PiTwitterLogoThin } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";




export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center grayscale"
              style={{ backgroundImage: `url(${fotoPessoas})` }}>
        </div> 
         <div className="absolute inset-0 bg-[rgba(233,87,26,0.4)]/70" />
      <div className="relative flex-1 flex items-center justify-center">
        <div className="absolute top-0 w-full h-52 bg-[rgba(254,249,243,1)] "
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0%)" }} />
  
        <div className="pr-65 space-y-4 z-10">
        <p className="font-jost text-4xl font-light text-white">Quer...</p>
        <p className="font-jost text-4xl font-medium text-white">
         Conhecer mais do nosso trabalho, <br /> propor parcerias
        </p>
        <p className="font-jost text-4xl font-light text-white">ou</p>
        <p className="font-jost text-4xl font-medium text-white">
        Participar de nossas atividades?
        </p>
        </div> 
        
        
        <div className="relative flex flex-col items-center max-w-lg w-full">
          <h2 className="font-jost text-4xl font-medium text-white mb-10 text-center">
          Fale Conosco
          </h2>
          <form className="w-full bg-[rgba(233,87,26,0.4)] backdrop-blur-sm rounded-2xl p-5 flex flex-col gap-5">
          <div>
          <label className="font-jost font-medium block text-white text-sm mb-2">Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome..."
                className="w-full rounded-2xl bg-[rgba(249,249,249,0.7)] placeholder-black outline-none focus:ring-2 focus:ring-orange-700/80 px-4 py-2 "
              />
          </div>

          <div>
          <label className="font-jost block text-white text-sm mb-2">E-mail</label>
              <input
                type="email"
                placeholder="Digite seu e-mail..."
                className="w-full rounded-2xl bg-[rgba(249,249,249,0.7)] placeholder-black outline-none focus:ring-2 focus:ring-orange-700/80 px-4 py-2 "
              />
          </div>

          <div>
          <label className="font-jost block text-white text-sm mb-2">Mensagem</label>
              <textarea
                placeholder="Digite sua mensagem..."
                rows={4}
                className="w-full rounded-2xl bg-[rgba(249,249,249,0.7)] placeholder-black outline-none focus:ring-2 focus:ring-orange-700/80 px-4 py-3 resize-none"
              />
          </div>

          <button
              type="submit"
              className="w-full rounded-full bg-[rgba(234,87,26,1)] hover:bg-[rgb(194,61,4)] transition-colors text-white font-jost py-3 mt-1"
            >
              Enviar
          </button>
          </form>  
        </div>
            <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <a className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-orange-700 transition-colors text-white">
            <FaInstagram size={28}/> 
            </a>
            <a className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-orange-700 transition-colors text-white">
            <PiTwitterLogoThin size={28}/> 
            </a>
            <a className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-orange-700 transition-colors text-white">
            <SlSocialLinkedin size={28}/> 
            </a>
          </div>
             <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
             <a className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-orange-700 transition-colors text-white">
             <CiLocationOn size={28}/>
             </a>
             <a className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-orange-700 transition-colors text-white">
              <MdOutlineEmail size={28} />
             </a>
             <a className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-orange-700 transition-colors text-white">
              <BsTelephone size={28} />
             </a>
             </div>
       </div>
       <Footer></Footer>
      </div>
       
       
    
  )
}