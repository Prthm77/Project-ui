import P1 from "../../assets/Projects/P1.png";
import P2 from "../../assets/Projects/P2.png";
import P3 from "../../assets/Projects/P3.png";
import a83 from "../../assets/Projects/a83.png";
import "./project.scss";
const Projects = () => {
  return (
    <>
      <div>
        <div className="project-assets">
            <img src={a83} alt="" />

        </div>
        <div className="project-container">
          <div className="project-body">
            <div className="project-title text-center mb-4">
              <h3>OUR PROJECTS</h3>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg">
                  <img
                    className="img-fluid "
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "554px",
                      maxHeight: "667px",
                    }}
                    src={P1}
                    alt=""
                  />
                </div>
                <div className="col-lg">
                  <div className="row">
                    <div className="col">
                      <img
                        className="img-fluid"
                        style={{
                          width: "100%",
                          height: "auto",
                          maxWidth: "554px",
                          maxHeight: "322px",
                        }}
                        src={P2}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                      <img
                        className="img-fluid"
                        style={{
                          width: "100%",
                          height: "auto",
                          maxWidth: "554px",
                          maxHeight: "322px",
                        }}
                        src={P3}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
