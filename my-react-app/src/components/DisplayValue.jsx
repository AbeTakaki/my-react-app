import { useState } from "react";

const DisplayValue = () => {
  // state = 現在のステート
  // setState = ステートを更新するための関数

  // useState の使用
  const [value, setValue] = useState("");

  // value を更新
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <input 
        type="text"
        value={value}
        onChange={handleChange} 
      />
      <p>入力された値：{value}</p>
    </div>
  )
}

export default DisplayValue;
