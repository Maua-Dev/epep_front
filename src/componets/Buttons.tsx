export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <a
        href="#about"
        className="rounded-full bg-[#67B457] px-8 py-4 text-lg text-white transition hover:opacity-90"
      >
        Conheça nosso trabalho
      </a>

      <a
        href="#projects"
        className="rounded-full border-2 border-[#67B457] px-8 py-4 text-lg text-white transition hover:bg-[#67B457]"
      >
        Ver projetos
      </a>
    </div>
  );
}