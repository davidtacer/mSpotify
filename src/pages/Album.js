import React           from 'react';
import { useLocation } from 'react-router-dom';
import './Album.css';
import {apiResponse}   from '../helpers/apiCallResponse';

const Album = () => {
  const {state:album} = useLocation();

  const albumDetails = apiResponse;

  return (
  <>
  <div className="albumContent">
    <div className="topBan">
      <img
          src={album.image}
          alt="albumcover"
          className="albumCover"
        />
      <div className="albumDeets">
        <div>Album</div>
        <div className="title">{album.title}</div>
        <div className="artist">
          {albumDetails && JSON.parse(albumDetails[0].metadata).artist}
        </div>
        <div>
          {albumDetails && JSON.parse(albumDetails[0].metadata).year} •{" "}
          {albumDetails && albumDetails.length} Songs
        </div>
      </div>
    </div>
  </div>
  </>
)
}

export default Album;
