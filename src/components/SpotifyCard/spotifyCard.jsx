import React from "react";
import './spotifyCard.css'

const SpotifyCard = ({ imgUrl, NameSong, Artist, Duration, Album }) => {
    return (
        <div className="card-container">
            <div className="spotify-card">
                <div>
                    <img className="album-image" src={imgUrl} alt="" />
                </div>

                <div>
                    <p id="song-name">{NameSong}</p>
                    <p>{Artist}</p>
                    <p>{Duration}</p>
                    <p>{Album}</p>
                </div>
            </div>

        </div>
    )
}

export default SpotifyCard;