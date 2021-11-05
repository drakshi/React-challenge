import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState } from 'react';
import Series from './components/Series';
import Movies from './components/Movies';

function App() {
  const[showSeriesTab , setShowSeriesTab] = useState(false);
  const[showMoviesTab, setShowMoviesTab] = useState(false);
  const[series , setSeries] = useState([]);

  const showSeriesTabHandler = () => {
    setShowSeriesTab(true);
  }

  const showMoviesTabHandler = () => {
    setShowMoviesTab(true);
  }
 
  fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json').then(response => {
    return response.json();
  }).then((data) => {
    setSeries(data.entries);
  });
  
  return (
    <div>
       {showSeriesTab && <Series series={series}/>}
       {showMoviesTab && <Movies />}
       {!showSeriesTab && !showMoviesTab &&<Header title="Titles"/>}
       {!showSeriesTab && !showMoviesTab && <Content onShowSeries = {showSeriesTabHandler} onShowMovies = {showMoviesTabHandler}/>}
       {!showSeriesTab && !showMoviesTab && <Footer />}
    </div>
  );
}

export default App;
