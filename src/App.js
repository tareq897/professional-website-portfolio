import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Banner></Banner>
     <About></About>
     <Footer></Footer>
    </div>
  );
}

export default App;
