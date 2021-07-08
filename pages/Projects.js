import Layout from "../components/layout";
import Image from "next/image";
import Fade from "react-reveal";

const Projects = () => {
  return (
    <Layout projects>
      <div className="projectmain">
        <h1 className="projtitle">Here are some of my recent Projects</h1>
        <div className="gridtainer">
          <Fade left>
            <div className="projectcell">
              <h2 className="projsub">Barkle</h2>
              <Image
                className="projectpic"
                src="/barkleshot.jpeg"
                width={300}
                height={400}
              />
              <br />
              <a className="projlink" href="https://barkle.herokuapp.com/">
                Link to the site
              </a>
              <p>
                My team and I built this app to help dog owners find
                dog-friendly locations near them and plan activities with other
                dog owners. I served as team lead for this project and handled
                the database interactions and all the routing, as well as style
                and functionality for the message forum.
              </p>
              <a className="projlink" href="https://github.com/Jpeyton-hub/Barkle">
                Link to the Repo
              </a>
            </div>
          </Fade>
          <Fade right>
            <div className="projectcell">
              <h2 className="projsub">Garden-Overflow</h2>
              <Image
                className="projectpic"
                src="/gardenoverflowshot.jpeg"
                width={400}
                height={400}
              />
              <br />
              <a className="projlink" href="https://garden-overflow.herokuapp.com/">
                Link to the site
              </a>
              <p>
              This app was designed to help gardeners find the plants which best grow in the their current climate! We scraped a bit of data to provide each users with a list of the best plants for their location and it has a message board for users in the same climatic zones to communicate with each other. I handled all of the api routes and built the messaging components and functionality.
              </p>
              <a className="projlink" href="https://github.com/arianaw15/Garden-Overflow">
                Link to the Repo
              </a>
            </div>
          </Fade>
          <Fade left>
            <div className="projectcell">
              <h2 className="projsub">Weather Dashboard</h2>
              <Image
                className="projectpic"
                src="/weathershot.jpeg"
                width={300}
                height={500}
              />
              <br />
              <a className="projlink" href="https://jpeyton-hub.github.io/WeatherDashboard/">
                Link to the site
              </a>
              <p>
              This was an earlier solo project of mine, using the open weather api I created a simple weather dashboard that stores your searches in local storage so you can always take a quick look at the forecast!
              </p>
              <a className="projlink" href="https://github.com/Jpeyton-hub/WeatherDashboard">
                Link to the Repo
              </a>
            </div>
          </Fade>
          <Fade right>
            <div className="projectcell">
              <h2 className="projsub">README Generator</h2>
              <Image
                className="projectpic"
                src="/usagegif.gif"
                width={500}
                height={400}
              />
              <br />
              <a className="projlink" href="https://github.com/Jpeyton-hub/READMEgenerator">
                Link to the site
              </a>
              <p>
              This was a short utility project to quickly produce high-quality README's. It is just a quick node.js program which uses the inquirer package to get basic info from the user and then churns out the new README.
              </p>
              <a className="projlink" href="https://github.com/Jpeyton-hub/READMEgenerator">
                Link to the Repo
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
