import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // 加算
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  }

  // 減算
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  }

  // 乗算
  const handleMultiply = () => {
    setCount((prev) => prev * 2);
  }

  // リセット
  const handleReset = () => {
    setCount(0);
  }

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
      <button onClick={handleMultiply}>×2</button>
      <button onClick={handleReset}>リセット</button>
    </div>
  )
}

export default Counter;
