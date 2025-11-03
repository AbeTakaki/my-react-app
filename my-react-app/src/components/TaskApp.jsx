import { useState } from "react";

const initialState = [
  { id: Date.now(), title: "サンプルタスク"}
]

const TaskApp = () => {
  const [tasks, setTasks] = useState(initialState);
  const [inputText, setInputText] = useState("");

  // 作成
  const handleTaskCreate = () => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title: inputText }
    ]);
    setInputText("");
  };

  // 削除
  const handleTaskDelete = (id) => {
    setTasks((prev) => 
      prev.filter((task) => task.id !== id)
    );
  };

  return (
    <div>
      <input
        type="text"
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

export default TaskApp;
