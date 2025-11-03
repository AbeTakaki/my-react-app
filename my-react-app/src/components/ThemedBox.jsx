export const ThemedBox = ({ theme }) => {
  // テーマの状態によって色が切り替わる
  const backgroundColor = theme === "light" ? "#00a2d6" : "#1c68b2";

  return (
    <div 
      style={{
        backgroundColor,
        display: "grid",
        placeItems: "center",
        padding: "20px",
      }}
    >
      <p style={{ color: "#fff" }}>テーマで色が切り替わるボックス</p>
    </div>
  )
}