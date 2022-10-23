import './App.css'
import  SearchInput  from './components/SearchInput'
import React, {useState} from 'react'
import { useEffect } from 'react';

function App() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');
  
  useEffect(() =>{
    if(text) {
      fetch(`https://kitsu.io/api/edge/anime?filter[text]${text}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
      });
    }
  }, [text]);

  return (
    <div className="App-container">
      <h1>Animes</h1>
      <SearchInput value={text} onChange={(search) => setText(search)} />
      {info.data && (
        <ul className='anime-list'>
          {info.data.map((anime) => (
            <li key={anime.id}>
              <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle}/>
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
