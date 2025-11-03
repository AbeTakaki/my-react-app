import { useReducer, useState } from "react";

const initialState = [
  { id: Date.now(), title: "サンプルタスク"}
]

// reducer 関数
const reducer = (state, action) => {
  switch (action.type) {
    // 作成
    case 'CREATE':
      return [
        ...state,
        {id: Date.now(), title: action.payload},
      ];
    // 削除
    case 'DELETE':
      return state.filter(
        (task) => task.id !== action.payload,
      );
      default:
      return state;
  }
};


const ReducerTaskApp = () => {
  const [tasks, dispatch] = useReducer(reducer, initialState);
  const [inputText, setInputText] = useState("");

  const handleTaskCreate = () => {
    dispatch({type: 'CREATE', payload: inputText});
    setInputText("");
  }

  const handleTaskDelete = (id) => {
    dispatch({type: 'DELETE', payload: id});
  }

  return (
    <div>
      <input type="text" 
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="タスクタイトルを入力"
      />
      <button onClick={handleTaskCreate}>タスク作成</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => handleTaskDelete(task.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReducerTaskApp;