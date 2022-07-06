// import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Home from './component/pages/home';
import About from './component/pages/about';
import Aboutme from './component/pages/aboutme';
import Works from './component/pages/works';
// import{ Link as Scroll } from 'react-scroll';
// import Top from './component/top'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <section id="home">
          <Header />
        </section>
      {/* </header> */}
      <Home />
      <About />
      <Aboutme />
      <Works />
        {/* <Top /> */}
    </div>
  );
}

export default App;
