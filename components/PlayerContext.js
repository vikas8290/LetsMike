import React, { createContext, useState, useRef, useEffect } from 'react';
import Video from 'react-native-video';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef(null);

  const playAudio = (episode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
    setPosition(0);
    setDuration(0);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const seekTo = (seconds) => {
    if (playerRef.current && typeof playerRef.current.seek === 'function') {
      playerRef.current.seek(seconds);
      setPosition(seconds);
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        currentEpisode,
        isPlaying,
        playAudio,
        togglePlayPause,
        position,
        duration,
        seekTo,
      }}
    >
      <>
        {children}
        {/* Hidden audio player */}
        {currentEpisode?.episodeAudioUrl && (
          <Video
            source={{ uri: currentEpisode.episodeAudioUrl }}
            ref={playerRef}
            paused={!isPlaying}
            audioOnly
            onProgress={({ currentTime }) => setPosition(currentTime)}
            onLoad={({ duration }) => setDuration(duration)}
            onEnd={() => setIsPlaying(false)}
            onError={(e) => console.log('Audio error:', e)}
            style={{ height: 0, width: 0 }}
            ignoreSilentSwitch="ignore"
          />
        )}
      </>
    </PlayerContext.Provider>
  );
};