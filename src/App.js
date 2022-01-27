import "./App.css";

import HomepageCard from "./Components/HomepageCard";
import Carousel from "./Components/Carousel";

function App() {
  return (
    <>
      <div className="container">
        <div className="square">
          <img src="/images/logo.png" alt="" className="center"></img>
        </div>
        <div className="row">
          <HomepageCard
            img="images/13.png"
            toroute="/necklet"
            title="Anklet"
          ></HomepageCard>
          <HomepageCard
            img="images/12.png"
            toroute="/eardrops"
            title="Earring"
          ></HomepageCard>
          <HomepageCard
            img="images/11.png"
            toroute="/wristlet"
            title="Weird-Ass Necklace"
          ></HomepageCard>
        </div>
        <Carousel></Carousel>
      </div>
      <div className="row fixed-bottom just-bottom pt-2 pb-2">
        <div className="col-6 bottom-fragger" style={{ textAlign: "center" }}>
           <a href="tel:7463846967">Number: 7463846967</a>
        </div>
        <div className="col-6 bottom-fragger" style={{ textAlign: "center" }}>
           <a href="milto: ani9431619703@gmail.com">Email: ani9431619703@gmail.com</a>
        </div>
      </div>
    </>
  );
}

export default App;
