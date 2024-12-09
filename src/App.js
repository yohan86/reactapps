import './App.css';
import { Routes,Route } from 'react-router-dom';
import NavBar from './components/navBar';
import AccordianPage from './pages/Accordian';
import RandomColorPage from './pages/Random-color';
import StarRatingPage from './pages/star-rating';
import ImageSlider from './components/image-slider';
import LoadMore from './components/load-more';

function App() {

  return (
     <div className="App">
     
        <NavBar />
        <Routes>
          <Route path="/accordian" element={<AccordianPage />} />
          <Route path="/random-color" element={<RandomColorPage />} />
          <Route path="/star-rating" element={<StarRatingPage />} />
          <Route path="/image-slider" element={<ImageSlider url='https://picsum.photos/v2/list' page='2' limit='10' />} />
          <Route path="/load-more" element={<LoadMore />} />
        </Routes>

      
     </div>
  );
}

export default App;
