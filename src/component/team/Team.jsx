import g1 from '../../assets/Team/g1.png'
import g2 from '../../assets/Team/g2.png'
import g3 from '../../assets/Team/g3.png'
import a52 from '../../assets/Team/a52.png'


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
      <div className='col-sm-4'>
        <img className="img-fluid" src={g1} alt="" />
        <p className='text-center'>Jessica D’suza</p>
      </div>
      <div className='col-sm-4'>
        <img className="img-fluid" src={g2} alt="" />
        <p className='text-center'>Johny Williams</p>
      </div>
      <div className='col-sm-4'>
        <img className="img-fluid" src={g3} alt="" />
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