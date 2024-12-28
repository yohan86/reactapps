import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import AccordianPage from './pages/Accordian';
import RandomColorPage from './pages/Random-color';
import StarRatingPage from './pages/star-rating';
import ImageSlider from './components/image-slider';
import LoadMore from './components/load-more';
import TreeMenu from './components/tree-menu';
import QrCodeGenerator from './components/qr-code-generator';

function App() {

  return (
    <div className="App">

      <header>
        <h1>React Web Projects - Interactive Demos</h1>
      </header>
      <div className="body-cont">
        <NavBar />
        <div class="content-wrapper">
          <Routes>
            <Route path="/accordian" element={<AccordianPage />} />
            <Route path="/random-color" element={<RandomColorPage />} />
            <Route path="/star-rating" element={<StarRatingPage />} />
            <Route path="/image-slider" element={<ImageSlider url='https://picsum.photos/v2/list' page='2' limit='10' />} />
            <Route path="/load-more" element={<LoadMore />} />
            <Route path="/tree-menu" element={<TreeMenu />} />
            <Route path="/qr-code-generator" element={<QrCodeGenerator />} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
