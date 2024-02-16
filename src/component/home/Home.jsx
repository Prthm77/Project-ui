import a1 from '../../assets/home/a1.png'
import a2 from '../../assets/home/a2.png'
import a3 from '../../assets/home/a3.png'
import a4 from '../../assets/home/a4.png'
import h2 from '../../assets/home/h2.png'
import h1 from '../../assets/home/h1.png'


import "./Home.scss"

const Home = () => {


  return (
    <>
    <div className='home-asset-1'>
 <img src={a1} alt="" />
    </div>
    <div className='home-asset-2'>
      <img src={a2} alt="" />
    </div>
    <div className='home-asset-3'>
      <img src={a3} alt="" />
    </div>
    <div className='home-asset-4'>
      <img src={a4} alt="" />
    </div>
    <div className='home-container mb-5'>
      <div className='home-body'>
        <div className="row ">
          <div className="col-lg">
           <img src={h1} className='home-img-1' style={{width : '643.63px' , height : '438.44px'}} alt="" />

          </div>
           <img src={h2} className='home-img-2'  style={{width : '1403px' , height : '789.19px'}} alt="" />
           <div className="col-lg d-flex justify-content-center align-items-center vh-100">
  <div className="row">
    <div className='col d-flex flex-column justify-content-center' style={{marginTop: "-200px"}} >
      <h2 className='home-title text-start text-uppercase'>Mendleson</h2>
      <h2 className='home-title text-start text-uppercase'>Communication</h2>
      <h2 className='home-title text-start text-uppercase'>and Engagement</h2>
      <p className='text-start text-wrap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <p className='text-start'>Malesuada sed ipsum, ut quam volutpat, tortor.</p>
    </div>
  </div>
</div>



        </div>

      </div>

    </div>
    </>
  )
}

export default Home