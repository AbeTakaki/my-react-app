import { useRef, useState } from "react";
import sampleVideo from "../assets/sample.mp4";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    }
  };

  return (
    <div>
      <video ref={videoRef} width="320">
        <source src={sampleVideo} type="video/mp4" />
      </video>
      <button onClick={handlePlayToggle}>
        {isPlaying ? "一時停止" : "再生"}
      </button>
      </div>
  )
}

export default VideoPlayer;