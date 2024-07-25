// src/Homepage.js
import React from 'react';
import Navbar from '../components/NavBar.jsx';
import '../styles/HomePage.css';

const Homepage = () => {
    return (
        <div className="homepage">
            <Navbar />
            <div className="homepage__content">
                <div className="homepage__popular_artists">
                    <h1>Popular Artists</h1>
                    <div className="homepage__popular_artists-grid">
                        {/* Add the popular artists grid here */}
                    </div>
                </div>

                <div className="homepage__popular_albums">
                    <h1>Popular Albums</h1>
                    <div className="homepage__popular_albums-grid">
                        {/* Add the popular albums grid here */}
                    </div>
                </div>

                <div className="homepage__popular_songs">
                    <h1>Popular Songs</h1>
                    <div className="homepage__popular_songs-grid">
                        {/* Add the popular songs grid here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
