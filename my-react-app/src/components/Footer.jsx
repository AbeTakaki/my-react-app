import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

export const Footer = () => {
  const { theme } = useContext(ThemeContext);

  // テーマの状態によって色が切り替わる
  const backgroundColor = theme === "light" ? "#ddd" : "#403a3a";

  const textColor = theme === "light" ? "#000" : "#fff";

  return (
    <div 
      style={{
        backgroundColor,
        display: "grid",
        placeItems: "center",
        padding: "40px",
      }}
    >
      <p style={{ color: textColor}}>グローバルフッター</p>
    </div>
  )
}