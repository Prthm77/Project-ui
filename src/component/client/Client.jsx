import img1 from "../../assets/clients/img1.png";
import img2 from "../../assets/clients/img2.png";
import img3 from "../../assets/clients/img3.png";
import img4 from "../../assets/clients/img4.png";
import img5 from "../../assets/clients/img5.png";
import img6 from "../../assets/clients/img6.png";
import img7 from "../../assets/clients/img7.png";
import img8 from "../../assets/clients/img8.png";
import img9 from "../../assets/clients/img9.png";
import a91 from  "../../assets/clients/a91.png"
import './client.scss'

const Client = () => {
  return (
    <>
       <div>
      <div className="assets-img">
        <img src={a91} alt="" />
      </div>
      <div className="client-container">
        <div className="client-body">
          <div className="client-text text-center">
            <h3>OUR CLIENTS</h3>
          </div>
          <div className="client-img ">
            <div className="row justify-content-center align-items-center my-3 mx-3">
        
              <img
                className="col-6 col-md-2"
                style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }} // Adjusted styles here
                src={img1}
                alt=""
              />
              <img
                className="col-6 col-md-2"
                style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }} // Adjusted styles here
                src={img2}
                alt=""
              />
              <img
                className="col-6 col-md-2"
                style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }} // Adjusted styles here
                src={img4}
                alt=""
              />
              <img
                className="col-6 col-md-2"
                style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }} // Adjusted styles here
                src={img5}
                alt=""
              />
              <img
                className="col-6 col-md-2"
                style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }} // Adjusted styles here
                src={img3}
                alt=""
              />
            </div>
            <div className="row justify-content-center align-items-center mx-3">
              <img
                className="col-6 col-md-2"
                style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }} // Adjusted styles here
                src={img6}
                alt=""
              />
              <img
                className="col-6 col-md-2"
                style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }} // Adjusted styles here
                src={img7}
                alt=""
              />
              <img
                className="col-6 col-md-2"
                style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }} // Adjusted styles here
                src={img8}
                alt=""
              />
              <img
                className="col-6 col-md-2"
                style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }} // Adjusted styles here
                src={img9}
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

export default Client;
