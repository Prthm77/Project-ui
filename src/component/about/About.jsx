import ab1 from "../../assets/ab1.png";
import ab3 from "../../assets/About/ab3.png"
import ab2 from "../../assets/About/ab2.png"
import "./about.scss";

const About = () => {
  return (
    <div className="about-container">
    <div className="row">
      <div className="col-lg">
        <img className="img-fluid" style={{ width: "100%" , height : "auto",  maxWidth: "612px", maxHeight: "408px" }} src={ab1} alt="" />
      </div>
  <div className="about-body">
      <div className="col-lg">
        <div className="row">
          <div className="col">
            <div>
              <h3 className='about-title fs-2'>ABOUT US</h3>
              <p className="text-start mt-4">We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creativity, results and exceptional levels of customer service and professionalism. We specialize in infrastructure development, energy, and natural resources.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={ab3} className="my-3" style={{width : '40px' , height : "41px"}} alt="" />
            <h4>ENGAGEMENT</h4>
            <p>We are engagement specialists, who have led projects at all levels of the IAP2 spectrum. READ MORE</p>
          </div>
          <div className="col">
            <img src={ab2} className="my-3" style={{width : "43px" , height : "41px"}} alt="" />
            <h4>Communications</h4>
            <p>We are award-winning leaders in communications and campaign management.
READ MORE</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default About;
