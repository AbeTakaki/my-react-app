import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      {/* ヘッダー */}
      <Header />

      {/* コンテンツ */}
      <main>
        <h2 id='jsx'>JSX</h2>
        <p>JSX について解説を行います。</p>
        <h2 id='component'>コンポーネント</h2>
        <p>コンポーネントについて解説を行います。</p>
        <h2 id='event'>イベント</h2>
        <p>イベントについて解説を行います。</p>
      </main>

      {/* フッター */}
      <Footer />
    
    </div>
  )
}

export default App
