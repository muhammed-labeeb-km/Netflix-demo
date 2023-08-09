import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {action,comedyMovies,horrorMovies,originals, romanceMovies, trending} from './urls'
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";


function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Orginals' url={originals}/>
      <RowPost title='Trending' isSmall={true} url={trending}/>
      <RowPost title='Action' isSmall={true} url={action}/>
      <RowPost title='Comedy' isSmall={true} url={comedyMovies}/>
      <RowPost title='Horror' isSmall={true} url={horrorMovies}/>
      <RowPost title='Romance' isSmall={true} url={romanceMovies}/>


    </div>
  );
}

export default App;
