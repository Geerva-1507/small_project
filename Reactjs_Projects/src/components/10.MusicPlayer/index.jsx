import React, { useRef, useState, useEffect } from "react";
import "./music.css";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusicTrack, setCurrentMusicTrack] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);

  const tracks = [
    {
        "title": "Hate Me",
        "artist": "Ellie Goulding",
        "artwork": "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
        "url": "https://samplesongs.netlify.app/Hate%20Me.mp3",
    },
    {
        "title": "Without Me",
        "artist": "Halsey",
        "artwork": "https://samplesongs.netlify.app/album-arts/without-me.jpg",
        "url": "https://samplesongs.netlify.app/Without%20Me.mp3",
    },
    {
        "title": "Bad Liar",
        "artist": "Imagine Dragons",
        "artwork": "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
        "url": "https://samplesongs.netlify.app/Bad%20Liar.mp3",
    },
    {
        "title": "Faded",
        "artist": "Alan Walker",
        "url": "https://samplesongs.netlify.app/Faded.mp3",
    },
    {
        "title": "Solo",
        "artist": "Clean Bandit",
        "url": "https://samplesongs.netlify.app/Solo.mp3",
    },
    {
        "title": "Death Bed",
        "artist": "Powfu",
        "url": "https://samplesongs.netlify.app/Death%20Bed.mp3",
    },
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setTrackProgress(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        );
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  function handlePauseAndPlay() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  function handleSkipTrack(getDirection) {
    if (getDirection === "forward") {
      setCurrentMusicTrack((prevTrack) => (prevTrack + 1) % tracks.length);
    } else if (getDirection === "backward") {
      setCurrentMusicTrack(
        (prevTrack) => (prevTrack - 1 + tracks.length) % tracks.length
      );
    }

    setTrackProgress(0);
  }

  return (
    <div className="music-player">
      <h1>Music Player</h1>
      <h2>{tracks[currentMusicTrack].title}</h2>
      <h2>{tracks[currentMusicTrack].artist}</h2>
      <audio ref={audioRef} src={tracks[currentMusicTrack].url} />
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${trackProgress}%`,
            background: isPlaying ? "#3498db" : "#a43636",
            height: "15px"
          }}
        ></div>
      </div>  
        <div className="track-controls">
          <button onClick={() => handleSkipTrack("backward")}>Backward</button>
          <button onClick={handlePauseAndPlay}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={() => handleSkipTrack("forward")}>Forward</button>
        </div>
    </div>
  );
}

export default MusicPlayer;
