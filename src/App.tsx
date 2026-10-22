import './App.css'
import Navbar from './componets/navbar.tsx'
import Home from './pages/home.tsx'
import MainPage from './pages/paginaprincipal.tsx'
import Iniciativas from './pages/iniciativas.tsx'


export default function App() {
  return (
    <main>

     <Navbar></Navbar>
     <MainPage></MainPage>
     <Iniciativas></Iniciativas>
     <Home></Home>

    </main>
    
  )
}


