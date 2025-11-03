export const Header = ({ theme, setTheme}) => {
  // テーマの状態によって色が切り替わる
  const backgroundColor = theme === "light" ? "#00a2d6" : "#1c68b2";

  // テーマを切り替える関数
  const handleThemeToggle = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

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
      <button onClick={handleThemeToggle}>{buttonLabel}</button>
    </header>
  );
}