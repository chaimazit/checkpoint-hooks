import { useState } from 'react';
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import Rating from './components/Rating';
import { moviesData } from './Data';
function App() {
  
  const[title,setTitle]=useState('');
  const[rating,setRating]=useState('');
  
  return (
    <>
    <Filter title={title} setTitle={setTitle} />
    <Rating rating={rating} setRating={setRating}/>
    <MovieList moviesData={moviesData} title={title} setTitle={setTitle}/>
    
    </>
      
    
  );
}

export default App;