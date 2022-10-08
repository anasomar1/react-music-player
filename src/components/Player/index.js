import React, { useState } from "react";
import SongInfo from "../SongInfo";
import Controls from "../Controls";
import "./styles.css";
import { songs } from "../../songs";

const Player = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  return (
    <div className="music-player">
      <SongInfo currentSong={songs[currentSongIndex]} />
      <Controls
        setCurrentSongIndex={setCurrentSongIndex}
        currentSongIndex={currentSongIndex}
        songs={songs}
      />
    </div>
  );
};

export default Player;
