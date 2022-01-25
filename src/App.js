import './App.css';

import HomepageCard from './Components/HomepageCard';
import Carousel from './Components/Carousel';
import Footer from './Components/footer';

function App() {
  return (
    <div className='container'>
      <div className='square'><img src='/images/logo.png' alt='' className='center'></img></div>
      <div className='row'>
        <HomepageCard img="images/13.png" toroute="/necklet" title='Anklet'></HomepageCard>
        <HomepageCard img="images/12.png" toroute="/eardrops" title='Earring'></HomepageCard>
        <HomepageCard img="images/11.png" toroute="/wristlet" title='Weird-Ass Necklace'></HomepageCard>
      </div>
      <Carousel></Carousel>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
