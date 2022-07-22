import './App.css'

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import MoviesList from "./components/MoviesList";
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    
   <BrowserRouter>
     <Navbar/>
     <Banner/>
     <MoviesList/>
   </BrowserRouter>
  );
}

export default App;
