import React from "react";
import './spotifyCard.css'

const SpotifyCard = () => {
    return (
        <div className="card-container">
            <div className="spotify-card">
                <div>
                    <img className="album-image" src="https://i.scdn.co/image/ab67616d00001e02cd2ceb6adaa32ecc83cec5c3" alt="" />
                </div>

                <div>
                    <p id="song-name">Name of song</p>
                    <p>Artist</p>
                    <p>Duration</p>
                    <p>Album</p>
                </div>
            </div>

        </div>
    )
}

export default SpotifyCard;