import P1 from "../../assets/projects/P1.png";
import P2 from "../../assets/projects/P2.png";
import P3 from "../../assets/projects/P3.png";
import a83 from "../../assets/projects/a83.png";
import "./project.scss";
const Projects = () => {
  return (
    <>
      <div>
        <div className="project-assets">
          <img src={a83} alt="" />
        </div>
        <div className="project-container mb-5">
          <div className="project-body">
            <div className="project-title text-center mb-4">
              <h3>OUR PROJECTS</h3>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg">
                  <img
                    className="project-img-1 img-fluid" 
                    
                    src={P1}
                    alt=""
                  />
                </div>
                <div className="col-lg">
                  <div className="row">
                    <div className="col">
                      <img
                        className="project-img-2 img-fluid"
                        // style={{
                        //   maxWidth: "100%",
                        //   height: "auto",
                        //   maxHeight: "322px",
                        // }}
                        src={P2}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    {" "}
                    {/* Added margin top */}
                    <div className="col">
                      <img
                        className="project-img-3 img-fluid"
                        // style={{
                        //   maxWidth: "100%",
                        //   height: "auto",
                        //   maxHeight: "322px",
                        // }}
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
