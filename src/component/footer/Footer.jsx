import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer-container container">
        <div className="row footer-sub">
          <div className="col-lg-3 col-md-6 col-sm-6 footer-text">
            <p><strong>Social</strong></p>
            <p>Facebook</p>
            <p>LinkedIn</p>
            <p>Google</p>
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
