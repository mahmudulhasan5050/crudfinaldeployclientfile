import React, { useState, useEffect } from 'react';
import './App.css';
import movieAxiosFile from './services/movieAxiosFile';


import Form from './component/Form';
import Display from './component/Display';

function App() {
  const [movieLists, setMovieLists] = useState([]);

  useEffect(() => {
    movieAxiosFile.getAll().then(response => {
      setMovieLists(response.data);
    });
  }, []);


  return (
    <div className="App">
      <div><h1>Movie Rating App</h1></div>
      <Form movieLists={movieLists} setMovieLists={setMovieLists} />
      <Display movieLists={movieLists} />
    </div>
  );
}

export default App;
