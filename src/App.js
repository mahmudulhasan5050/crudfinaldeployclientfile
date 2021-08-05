import React, { useState, useEffect } from 'react';
import './App.css';
import movieAxiosFile from './services/movieAxiosFile';


import Form from './component/Form';
import Display from './component/Display';

function App() {
  const [movieLists, setMovieLists] = useState([]);
  const [updateRefresh, setUpdateRefresh] = useState(false);

  useEffect(() => {
    movieAxiosFile.getAll().then(response => {
      setMovieLists(response.data);
    });
  }, []);

  useEffect(() => {
    movieAxiosFile.getAll().then(response => {
      setMovieLists(response.data);
    });
  }, [updateRefresh]);

  return (
    <div className="App">
      <div><h1>Movie Rating App</h1></div>
      <Form movieLists={movieLists} setMovieLists={setMovieLists} />
      <Display movieLists={movieLists}
            updateRefresh={updateRefresh}
            setUpdateRefresh={setUpdateRefresh}/>
    </div>
  );
}

export default App;
