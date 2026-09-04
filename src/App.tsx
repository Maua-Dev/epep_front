import logoWhite from './assets/logo-white.png'
import heroBg from './assets/hero-bg.png'

const NAV_LINKS = [
  'Início',
  'Sobre',
  'Objetivos',
  'Projetos',
  'Membros',
  'Conteúdo',
  'Contato',
]

function App() {
  return (
    <div className="page">
      <section className="hero">
        <img className="hero__bg" src={heroBg} alt="" />
        <div className="hero__scrim" />

       

        <header className="hero__header">
          <nav className="nav" aria-label="Navegação principal">
            <ul className="nav__list">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`}>{link.toUpperCase()}</a>
                </li>
              ))}
            </ul>
          </nav>
          <button className="badge" aria-label="Abrir menu do emblema">
            <img src={logoWhite} alt="" />
          </button>
        </header>

        <img className="hero__mark" src={logoWhite} alt="" aria-hidden="true" />

        <div className="hero__content">
          <p className="hero__eyebrow">Notícias · Debates · Política</p>
          <h1 className="hero__title">
            Pensamento crítico para transformar realidades
          </h1>
          <p className="hero__lead">
            Um espaço dedicado ao debate acadêmico, à formação política e à
            construção coletiva de conhecimento que impacta a sociedade.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#trabalho">
              Conheça nosso trabalho
            </a>
            <a className="btn btn--ghost" href="#projetos">
              Ver projetos
            </a>
          </div>
        </div>

        <div className="hero__curve" aria-hidden="true" />
      </section>
    </div>
  )
}

export default App


