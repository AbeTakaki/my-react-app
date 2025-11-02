import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    // 加算
    case 'increment':
      return state + 1;
    // 減算
    case 'decrement':
      return state - 1;
    // 乗算
    case 'multiply':
      return state * 2;
    // リセット
    case 'reset':
      return 0;
    default:
      return state;
  }
}

const ReducerCounter = () => {
  const [count,dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => dispatch({type: 'increment'})}>+1</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-1</button>
      <button onClick={() => dispatch({type: 'multiply'})}>×2</button>
      <button onClick={() => dispatch({type: 'reset'})}>リセット</button>
    </div>
  )
}

export default ReducerCounter;