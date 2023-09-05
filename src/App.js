import './App.css';
import Navigation from './component/Navigation';
import Home from './component/Home';
import Work from './Work';
import Video from './component/Video';
import Costumer from './component/Costumer';
import Ask from './component/Ask';
import Footer from './component/Footer';
import '../src/style/nikah.css'



function App() {
  return (
    <div className='app'>
      <Navigation />
      <Home />
      <Work />
      <Video />
      <Costumer />
      <Ask />
      <Footer />
    </div>
    

  );
}



export default App;
