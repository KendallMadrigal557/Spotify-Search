import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import SpotifyCard from './components/SpotifyCard/spotifyCard';
import './App.css'
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/spotify.json');
        const jsonData = await response.json();
        setData(jsonData.tracks.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className='cards-container'>
        {data.map((song, index) => (
          <SpotifyCard
            key={index}
            imgUrl={song.data.albumOfTrack.coverArt.sources[0].url}
            NameSong={song.data.name}
            Artist={song.data.artists.items[0].profile.name}
            Duration={song.data.duration.totalMilliseconds}
            Album={song.data.albumOfTrack.name}
          />
        ))}
      </div>

    </>
  );
}

export default App;
