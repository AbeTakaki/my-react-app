import { ThemedBox } from "./ThemedBox";

export const Content = ({ children}) => {
  return (
    <main
      style={{
        backgroundColor: "#fcfcfc",
        display: "grid",
        placeItems: "center",
        gap: "20px",
        padding: "40px",
      }}
    >
      {children}
      <ThemedBox  />
    </main>
  );
};