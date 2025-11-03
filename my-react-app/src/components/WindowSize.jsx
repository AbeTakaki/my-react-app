import { useState, useEffect } from "react";

const WindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    // クリーンアップ関数
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div>
      現在のウィンドウ幅: {width}px
    </div>
  )
}

export default WindowSize;