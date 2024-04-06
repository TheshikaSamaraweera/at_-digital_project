import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Question from './components/Question';

function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Body/>
      <Question/>
      <Footer/>
    </div>
  );
}

export default App;
