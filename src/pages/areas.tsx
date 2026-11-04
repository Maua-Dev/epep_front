import { useState } from "react";
import nossasAreas from "../assets/nossas_areas.png";
import explica from "../assets/explica.png";
import projetos from "../assets/projetos.png";
import data from "../assets/data.png";
import indica from "../assets/indica.png";
import informa from "../assets/informa.png";
import recap from "../assets/recap.png";
import evento from "../assets/evento.png";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const cardList: CardProps[] = [
  { image: explica, title: "Título 1", description: "Descrição da área Explica." },
  { image: projetos, title: "Título 2", description: "Descrição da área Projetos." },
  { image: data, title: "Título 3", description: "Descrição da área Data." },
  { image: indica, title: "Título 4", description: "Descrição da área Indica." },
  { image: informa, title: "Título 5", description: "Descrição da área Informa." },
  { image: recap, title: "Título 6", description: "Descrição da área Recap." },
  { image: evento, title: "Título 7", description: "Descrição da área Evento." },
];

export default function Areas() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleCardClick = (title: string) => {
    setSelected((prev) => (prev === title ? null : title));
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute h-full w-full bg-cover top-2"
        style={{ backgroundImage: `url(${nossasAreas})` }}
      />
      <div className="relative px-24">
        <div className="mb-6 flex items-center gap-4 text-xs font-inter font-medium tracking-widest text-gray-500">
          <span className="h-px w-8 bg-black" />
            03 — SUBÁREAS
        </div>

        <h2 className="font-jost font-medium text-8xl leading-tight">
          Nossas
          <br />
          áreas
        </h2>

        <div className="grid grid-cols-7 gap-2">
          {cardList.map((card) => (
            <div
              key={card.title}
              onClick={() => handleCardClick(card.title)}
              className="flex h-[548px] cursor-pointer flex-col items-center rounded-md bg-[rgba(245,180,23,1)] px-6 pt-8 text-center"
            >
              <img
                src={card.image}
                alt={card.title}
                className="mb-6 size-30 object-contain"
              />
              {selected === card.title && (
                <>
                  <h3 className="mb-2 text-2xl font-jost font-medium">
                    {card.title}
                  </h3>
                  <p className="text-base font-jost font-light">
                    {card.description}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}