import s1 from '../../assets/Service/s1.png'
import "./service.scss";

const Service = () => {
  return (
    <>
      <div>
        <div className="service-container">
          <div className="service-body">
            <div className="service-title text-center">
              <h3>SERVICES</h3>
            </div>
            <div className="row justify-content-center align-items-center">
  <div className="col-md-6">
    <h3 className='service-text text-end'>ENGAGEMENT</h3>
    <p className='text-end'>
      We love what we do and are driven by achieving great results
      for our clients. Our awards and impressive client list are
      testament to our high-quality approach. We deliver value,
      creativity, results, and exceptional levels of customer service
      and professionalism. We specialize in infrastructure
      development, energy, and natural resources.
    </p>
  </div>
  <div className='col-md-6 '>
    <img className="img-fluid" style={{width : "454px" , height : '375px'}} src={s1} alt="" />
  </div>
</div>
<div className="row justify-content-center align-items-center">
  <div className="col-md-6">
    <h3 className='service-text text-end'>ENGAGEMENT</h3>
    <p className='text-end'>
      We love what we do and are driven by achieving great results
      for our clients. Our awards and impressive client list are
      testament to our high-quality approach. We deliver value,
      creativity, results, and exceptional levels of customer service
      and professionalism. We specialize in infrastructure
      development, energy, and natural resources.
    </p>
  </div>
  <div className='col-md-6 '>
    <img className="img-fluid" style={{width : "454px" , height : '375px'}} src={s1} alt="" />
  </div>
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
