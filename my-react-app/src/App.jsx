import './App.css'
import Content from './components/Content'
import Layout from './components/Layout'
import DisplayValue from './components/DisplayValue'

const Button = ({onClick, href, children}) => {
  const style = {
    backgroundColor: "skyblue",
    border: "none",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    lineHeight: 1,
  };

  // リンクとボタンで使い分ける
  if (onClick) {
    return (
      <button type='button' onClick={onClick}
        style={style}>
        {children}
      </button>
    )
  }

  if (href) {
    return (
      <a href={href} style={style}>
        {children}
      </a>
    )
  }

}

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

  const handleClick = () => {
    alert('ボタンがクリックされました！');
  }

  const href = "https://ja.react.dev/";

  return (
    <div>
      <Layout>
        <Button onClick={handleClick}>クリックしてね</Button>
        <Button href={href}>公式サイトへ</Button>
        <DisplayValue />
        {contents.map((content) => (<Content key={content.id} {...content} />))}
      </Layout>
    </div>
  )
}

export default App
