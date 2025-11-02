import './App.css'
import Content from './components/Content'
import Layout from './components/Layout'

function App() {
  const contents = [
    {
      id: "jsx",
      title: "JSX",
      description: "JSX について解説を行います。",
    },
    {
      id: "component",
      title: "コンポーネント",
      description: "コンポーネントについて解説を行います。",
    },
    {
      id: "event",
      title: "イベント",
      description: "イベントについて解説を行います。",
    },
  ];

  return (
    <div>
      <Layout>
        {contents.map((content) => (<Content key={content.id} {...content} />))}
      </Layout>
    </div>
  )
}

export default App
