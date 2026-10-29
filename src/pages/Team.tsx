
import fundo from "../assets/Fundo_nossa_area.png"
import ana from "../assets/Ana.png"
import carlos from "../assets/Carlos.png"
import juliana from "../assets/Juliana.png"
import ricardo from "../assets/Ricardo.png"
import { FiLinkedin } from "react-icons/fi"

export default function Team() {
  return (
    <main
      style={{ backgroundImage: `url(${fundo})` }}
      className="min-h-screen w-full bg-[length:110%_110%] bg-center flex flex-col px-10 py-8 gap-10"
    >
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div className="bg-black h-0.5 w-8"></div>
          <p className="text-gray-500 text-xs tracking-widest">
            04 — MEMBROS
          </p>
        </div>

        <h1 className="text-black font-semibold text-7xl leading-none w-50">
          Nosso time
        </h1>
      </div>

      <div className="flex gap-5 w-full">

        {/*Ana silva */}
        <div className="bg-[#FFEDE6] w-70 border border-gray-200">
          <div className="h-78 w-full relative overflow-hidden">
            <div
              className="absolute bottom-0 w-full h-[95%] bg-[#F4511E] [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"
            ></div>

            <img
              src={ana}
              className="absolute bottom-0 w-full h-[105%] object-contain object-bottom"
            />
          </div>

          <div className="flex justify-between items-center px-4 py-2">
            <div>
              <h2 className="text-lg text-black">Ana Silva</h2>
              <p className="text-xs text-gray-500 mt-1">Coordenação Geral</p>
            </div>
            <div className="border border-gray-300 rounded-full p-3">
              <FiLinkedin className="text-lg" />
            </div>
          </div>
        </div>
        {/*Carlos mendes */}
        <div className="bg-white w-70 border border-gray-200">
          <div className="h-78 w-full relative overflow-hidden">
            <div
              className="absolute bottom-0 w-full h-[95%] bg-[#9CCB22] [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"
            ></div>

            <img
              src={carlos}
              className="absolute -bottom-5 left-0 w-full h-[125%] object-contain object-bottom"
            />
          </div>

          <div className="flex justify-between items-center px-4 py-2">
            <div>
              <h2 className="text-lg text-black">Carlos Mendes</h2>
              <p className="text-xs text-gray-500 mt-1">Redação</p>
            </div>
            <div className="border border-gray-300 rounded-full p-3">
              <FiLinkedin className="text-lg" />
            </div>
          </div>
        </div>
        {/*Juliana */}
        <div className="bg-white w-70 border border-gray-200">
          <div className="h-78 w-full relative overflow-hidden">
            <div
              className="absolute bottom-0 w-full h-[95%] bg-[#064B8E] [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"
            ></div>

            <img
              src={juliana}
              className="absolute -bottom-5 left-0 w-full h-[125%] object-contain object-bottom"
            />
          </div>

          <div className="flex justify-between items-center px-4 py-2">
            <div>
              <h2 className="text-lg text-black">Juliana Costa</h2>
              <p className="text-xs text-gray-500 mt-1">Coordenação de Eventos</p>
            </div>
            <div className="border border-gray-300 rounded-full p-3">
              <FiLinkedin className="text-lg" />
            </div>
          </div>
        </div>
        {/* Ricardo */}
        <div className="bg-white w-70 border border-gray-200">
          <div className="h-78 w-full relative overflow-hidden">
            <div
              className="absolute bottom-0 w-full h-[95%] bg-[#F4511E] [clip-path:polygon(50%_0%,0%_100%,100%_100%)]" 
            ></div>

            <img
              src={ricardo}
              className="absolute -bottom-5 left-0 w-full h-[105%] object-contain object-bottom"
            />
          </div>

          <div className="flex justify-between items-center px-4 py-2">
            <div>
              <h2 className="text-lg text-black">Ricardo Alves</h2>
              <p className="text-xs text-gray-500 mt-1">Marketing</p>
            </div>
            <div className="border border-gray-300 rounded-full p-3">
              <FiLinkedin className="text-lg" />
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}