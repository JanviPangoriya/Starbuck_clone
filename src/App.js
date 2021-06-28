import './App.css';
import Nav from './components/Nav'
import Subheader from './components/Subheader'
import Hero from './components/Hero';
import GettingStarted from './components/GettingStarted';
import GetYourFavourites from './components/GetYourFavourites'
import EndlessExtra from './components/EndlessExtra';
import CashCard from './components/CashCard'
import StarCodes from './components/StarCodes'
import EarningStar from './components/EarningStar'
import About from './components/About'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Subheader />
      <Hero />
      <GettingStarted />
      <GetYourFavourites />
      <EndlessExtra />
      <CashCard/>
      <StarCodes />
      <EarningStar />
      <About />
      <Footer />
     </div>
    
  );
}

export default App;
