import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Content } from "./components/Content";

const App = () => {
  // アプリケーション全体で利用するテーマの状態を定義
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      <Content theme={theme}>
        <p>これはコンテンツエリアです。</p>
      </Content>
      <Footer theme={theme} />
    </div>
  );
};

export default App;