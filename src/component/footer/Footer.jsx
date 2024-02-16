import go from '../../assets/go.png'
import fa from "../../assets/fa.png"
import li from "../../assets/li.png"
import "./footer.scss";



const Footer = () => {
  return (
    <>
      <div className="footer-container container">
        <div className="row footer-sub">
        <div className="col-lg-3 col-md-6 col-sm-6">
            <p className='mx-5'><strong>Social</strong></p>
            <div className="d-flex align-items-center">
              <img src={fa} alt="" className="mx-2 mb-3" style={{width : "16px" , height : '16px'}} />
              <p>Facebook</p>
            </div>
            <div className="d-flex align-items-center">
              <img  src={li} alt="" className="mx-2 mb-3" style={{width : "16px" , height : '16px'}} />
              <p>LinkedIn</p>
            </div>
            <div className="d-flex align-items-center">
              <img src={go} alt="" style={{width : "16px" , height : '16px'}} className="mx-2 mb-3" />
              <p>Google</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 footer-text">
            <p><strong>Explore</strong></p>
            <p>Service</p>
            <p>Team</p>
            <p>Clients</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 footer-text">
            <p><strong>Contact</strong></p>
            <p>lorem</p>
            <p>used for display</p>
            <p>1234567</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 footer-text">
            <p><strong>Email</strong></p>
            <p>mendlesoncommunication@email.com</p>
          </div>
        </div>
      </div>
<p className="text-center mx-2">© Copyright 2018 Mendleson Communication Pty Ltd </p>
    </>
  );
};

export default Footer;
