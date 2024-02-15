import img1 from "../../assets/Clients/img1.png";
import img2 from "../../assets/Clients/img2.png";
import img3 from "../../assets/Clients/img3.png";
import img4 from "../../assets/Clients/img4.png";
import img5 from "../../assets/Clients/img5.png";
import img6 from "../../assets/Clients/img6.png";
import img7 from "../../assets/Clients/img7.png";
import img8 from "../../assets/Clients/img8.png";
import img9 from "../../assets/Clients/img9.png";
import a91 from  "../../assets/Clients/a91.png"
import './client.scss'

const Client = () => {
  return (
    <>
      <div >
        <div className="assets-img">
            <img src={a91} alt="" />
        </div>
        <div className="client-container">

        <div className="client-body">

        <div className="client-text text-center">
          <h3>OUR CLIENTS</h3>
        </div>
        <div className="client-img ">
        </div>
          <div className="row justify-content-center align-items-center my-3 mx-3">
            <img
              className="col-6 col-md-2"
              style={{ maxWidth: "212px", height: "auto" }}
              src={img1}
              alt=""
            />
            <img
              className="col-6 col-md-2"
              style={{ maxWidth: "129px", height: "auto" }}
              src={img2}
              alt=""
            />
            <img
              className="col-6 col-md-2"
              style={{ maxWidth: "222px", height: "auto" }}
              src={img4}
              alt=""
            />
            <img
              className="col-6 col-md-2"
              style={{ maxWidth: "143px", height: "auto" }}
              src={img5}
              alt=""
            />
            <img
              className="col-6 col-md-2"
              style={{ maxWidth: "163px", height: "auto" }}
              src={img3}
              alt=""
            />
          </div>
          <div className="row justify-content-center align-items-center mx-3">
            <img
              className="col-6 col-md-2"
              style={{ maxWidth: "185px", height: "auto" }}
              src={img6}
              alt=""
            />
            <img
              className="col-6 col-md-2"
              style={{ maxWidth: "268px", height: "auto" }}
              src={img7}
              alt=""
            />
            <img
              className="col-6 col-md-2"
              style={{ maxWidth: "246px", height: "auto" }}
              src={img8}
              alt=""
            />
            <img
              className="col-6 col-md-2"
              style={{ maxWidth: "243px", height: "auto" }}
              src={img9}
              alt=""
            />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Client;
