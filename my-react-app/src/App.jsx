import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Content } from "./components/Content";
import { ThemeProvider } from "./providers/ThemeProvider";

const App = () => {
  // ThemeProviderのContextにアクセスしたいコンポーネントを囲む
  return (
    <ThemeProvider>
      <Header />
      <Content>メインコンテンツが入ります</Content>
      <Footer />
    </ThemeProvider>
  );
}

export default App;