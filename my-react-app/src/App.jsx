import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'

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
      <Header />
      <main>
        {contents.map((content) => (
          <Content key={content.id} {...content} />
        ))}
      </main>
      <Footer />
    
    </div>
  )
}

export default App
