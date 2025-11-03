import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

export const Header = () => {
  // useContextの引数に参照するContextを指定
  const { theme, onThemeToggle } = useContext(ThemeContext);

  // テーマの状態によって色が切り替わる
  const backgroundColor = theme === "light" ? "#00a2d6" : "#1c68b2";

  // テーマの状態によってラベルが切り替わる
  const buttonLabel = theme === "light" ? "ダークモードに切り替え" : "ライトモードに切り替え";

  return (
    <header 
      style={{
        backgroundColor,
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      <p style={{ color: "#fff"}}>グローバルヘッダー</p>
      <button onClick={onThemeToggle}>{buttonLabel}</button>
    </header>
  );
}