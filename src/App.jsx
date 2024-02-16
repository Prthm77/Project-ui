import './App.scss'
import About from './component/about/About'
import Client from './component/client/Client'
import Footer from './component/footer/Footer'
import Home from './component/home/Home'
import Navbar1 from './component/navbar/Navbar'
import Projects from './component/project/Projects'
import Service from './component/service/Service'
import Team from './component/team/Team'

function App() {


  return (
    <>
    <Navbar1/>
    <div>

      <Home/>
    </div>
      <div>
        <About/>
      </div>
      <div>

      <Service/>
      </div>
      <div>

      <Team/>
      </div>
      <div>
        <Projects/>
      </div>
      <div >

      <Client/>
      </div>
      <div>

      <Footer/>
      </div>
      
    </>
  )
}

export default App
