import g1 from '../../assets/team/g1.png';
import g2 from '../../assets/team/g2.png';
import g3 from '../../assets/team/g3.png';
import a52 from '../../assets/team/a52.png';


import './team.scss'

const Team = () => {
  return (
    <>
    <div>
      <div className='team-assets'>
        <img src={a52} alt="" />

      </div>

      <div className='team-container'>
  <div className='team-body'>
    <div className="team-title text-center">
      <h3>OUR TEAM</h3>
    </div>
    <div className='row justify-content-center align-items-center'>
      <div className='col-sm-12 col-md-4'>
        <img className="img-fluid team-img-1" src={g1} alt="" />
        <p className='text-center'>Jessica D’suza</p>
      </div>
      <div className='col-sm-12 col-md-4'>
        <img className="img-fluid team-img-2" src={g2} alt="" />
        <p className='text-center'>Johny Williams</p>
      </div>
      <div className='col-sm-12 col-md-4'>
        <img className="img-fluid team-img-3" src={g3} alt="" />
        <p className='text-center'>Sanya R</p>
      </div>
    </div>
  </div>
</div>
 

    </div>
    </>
  )
}

export default Team