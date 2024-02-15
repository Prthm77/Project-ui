

import './App.scss'
import Client from './component/client/Client'
import Footer from './component/footer/Footer'
// import Home from './component/Home/Home'
import Navbar1 from './component/navbar/Navbar'
import Projects from './component/project/Projects'
import Service from './component/service/Services'
import Team from './component/team/Team'

function App() {


  return (
    <>
    <Navbar1/>
      {/* <Home/> */}
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