import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import "./styles.css";

const Controls = (props) => {
  const { currentSongIndex, setCurrentSongIndex, songs } = props;
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    isPlaying ? audioEl.current.play() : audioEl.current.pause();
  }, [isPlaying, currentSongIndex]);

  const handlePlay = () => setIsPlaying((prev) => !prev);
  const skipSong = (forward = true) => {
    setCurrentSongIndex((prev) =>
      forward
        ? (prev + 1) % songs.length
        : (prev + songs.length - 1) % songs.length
    );
    setIsPlaying(true);
  };

  return (
    <div className="controls">
      <audio src={songs[currentSongIndex].src} ref={audioEl} />
      <FaBackward className="player-icon" onClick={() => skipSong(false)} />
      <span className="player-icon play-button" onClick={handlePlay}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </span>
      <FaForward className="player-icon" onClick={() => skipSong(true)} />
    </div>
  );
};

export default Controls;
