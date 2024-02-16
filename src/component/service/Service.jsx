import s1 from "../../assets/Service/s1.png";
import s2 from "../../assets/Service/s2.png";
import s3 from "../../assets/Service/s3.png";

import s4 from "../../assets/Service/s4.png";
import s5 from "../../assets/Service/s5.png";
import as5 from "../../assets/Service/as5.png"
import as4 from "../../assets/Service/as4.png"
import as3 from "../../assets/Service/as3.png"
import as2 from "../../assets/Service/as2.png"




import "./service.scss";

const Service = () => {
  return (
    <>
      <div>
      <div className="service-asset-2">
          <img src={as2} alt="" />
        </div>
        <div className="service-container">
          <div className="service-body">
            <div className="service-title text-center">
              <h3>SERVICES</h3>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6 ">
                <h3 className="service-text text-end my-4">ENGAGEMENT</h3>
                <p className="text-end">
                  We love what we do and are driven by achieving great results
                  for our clients. Our awards and impressive client list are
                  testament to our high-quality approach. We deliver value,
                  creativity, results, and exceptional levels of customer
                  service and professionalism. We specialize in infrastructure
                  development, energy, and natural resources.
                </p>
              </div>
              <div className="col-md-6 ">
                <img
                  className="img-fluid"
                  style={{ width: "454px", height: "375px" }}
                  src={s1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="service-container">
          <div className="service-body" style={{ height: "251px" }}>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6 col-12">
                <img
                  className="img-fluid"
                  style={{ width: "487px", height: "251px" }}
                  src={s2}
                  alt=""
                />
              </div>
              <div className="col-md-6 col-12">
                <h3 className="service-text text-start my-4">Communications</h3>
                <p className="text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien,
                  pellentesque et. Sit ac fames facilisis nibh faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-asset-3">
          <img src={as3} alt="" />
        </div>
        <div className="service-container">
          <div className="service-body">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6">
                <h3 className="service-text text-end my-4">FACILITATION</h3>
                <p className="text-end">
                  We love what we do and are driven by achieving great results
                  for our clients. Our awards and impressive client list are
                  testament to our high quality approach. We deliver value,
                  creaKvity, results and excepKonal levels of customer service
                  and professionalism. We specialise in infrastructure
                  development, energy and
                </p>
              </div>
              <div className="col-md-6 ">
                <img
                  className="img-fluid"
                  style={{ width: "454px", height: "375px" }}
                  src={s3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="service-asset-4">
          <img src={as4} alt="" />
        </div>
        <div className="service-container">
          <div className="service-body">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6 ">
                <img
                  className="img-fluid"
                  style={{ width: "523px", height: "363px" }}
                  src={s4}
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <h3 className="service-text text-start text-uppercase my-4">
                  Consultation and Research
                </h3>
                <p className="text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien,
                  pellentesque et. Sit ac fames facilisis nibh faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-asset-5">
          <img src={as5} alt="" />
        </div>
        <div className="service-container">
          <div className="service-body">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6 ">
                <h3 className="service-text text-end text-uppercase my-4">Traning & Mentoring</h3>
                <p className="text-end">
                  We love what we do and are driven by achieving great results
                  for our clients. Our awards and impressive client list are
                  testament to our high-quality approach. We deliver value,
                  creativity, results, and exceptional levels of customer
                  service and professionalism. We specialize in infrastructure
                  development, energy, and natural resources.
                </p>
              </div>
              <div className="col-md-6 ">
                <img
                  className="img-fluid"
                  style={{ width: "454px", height: "375px" }}
                  src={s5}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
