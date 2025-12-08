import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/header";

const fonts = ["Arial", "Courier New", "Tahoma", "Times New Roman"];

export default function App() {
  const [styles, setStyles] = useState({
    defaultFont: "Times New Roman",
  });

  const [editMode, setEditMode] = useState(false);

  function handleFont(value) {
    setStyles((prev) => {
      return { ...prev, defaultFont: value };
    });
  }

  return (
    <div>
      <Header
        fonts={fonts}
        styles={styles}
        handleFont={handleFont}
        editMode={editMode}
        setEditMode={setEditMode}
      />
      <Content styles={styles} editMode={editMode} />
    </div>
  );
}
