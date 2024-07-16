import { useState, useEffect } from 'react';
import './App.css';
import Tenor from './components/Tenor/Tenor';
import './index.css';

const App = () => {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const API_KEY = 'AIzaSyACnpn15uUFa-c2baE8dhkh-73lXw83s9M';
  const TRENDING_URL = `https://tenor.googleapis.com/v2/search?q=trending&key=${API_KEY}&limit=20`;

  const fetchGifs = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setGifs(data.results || []);
    } catch (error) {
      console.error('Error fetching data from Tenor API:', error);
    }
  };

  useEffect(() => {
    fetchGifs(TRENDING_URL);
  }, []);

  useEffect(() => {
    if (searchTerm.trim()) {
      const SEARCH_URL = `https://tenor.googleapis.com/v2/search?q=${searchTerm}&key=${API_KEY}&limit=20`;
      fetchGifs(SEARCH_URL);
    } else {
      fetchGifs(TRENDING_URL);
    }
  }, [searchTerm]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const SEARCH_URL = `https://tenor.googleapis.com/v2/search?q=${searchTerm}&key=${API_KEY}&limit=20`;
      fetchGifs(SEARCH_URL);
    }
  };

  return (
    <div className=" bg-slate-950">
      <div className="flex flex-col items-center ">
        <h1 className="text-3xl font-bold m-4 mb-4 text-white text-shadow">Explora GIFs en Tenor</h1>
        <div className="flex mb-10 w-full justify-center">
          <input
            type="text"
            className=" p-2 w-64 mr-2 border-2 border-blue-900 rounded-lg"
            placeholder="Ingresa un término de búsqueda"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  border-2 border-blue-900 rounded-lg"
            onClick={handleSearch}
          >
            Buscar
          </button>
        </div>
      </div>´
      {!searchTerm && (
        <h2 className="tendencia text-2xl text-white text-center mb-4">Tendencia</h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
        {gifs.map((gif) => (
          <Tenor
            key={gif.id}
            imgUrl={gif.media_formats.gif.url}
            title={gif.title}
          />
        ))}
      </div>
    </div>
  );
}

export default App;





