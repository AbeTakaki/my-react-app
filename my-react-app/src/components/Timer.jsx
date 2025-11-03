import { useRef,useState } from "react";

const Timer = () => {
  const timerRef = useRef(null);
  const [seconds, setSeconds] = useState(0);

  const handleStart = () => {
    if (timerRef.current === null) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  }

  const handleStop = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

    return (
      <div>
        <p>経過時間: {seconds} 秒</p>
        <button onClick={handleStart}>スタート</button>
        <button onClick={handleStop}>ストップ</button>
      </div>
    )
}

export default Timer;
