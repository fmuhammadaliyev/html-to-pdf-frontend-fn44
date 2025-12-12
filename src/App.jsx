import { useRef, useState } from "react";
import Content from "./components/Content";
import Header from "./components/header";

const fonts = ["Arial", "Courier New", "Tahoma", "Times New Roman"];

export default function App() {
  const [styles, setStyles] = useState({
    defaultFont: "Times New Roman",
  });

  const contentRef = useRef();

  const [editMode, setEditMode] = useState(false);

  function handleFont(value) {
    setStyles((prev) => {
      return { ...prev, defaultFont: value };
    });
  }

  function generate() {
    console.log(contentRef.current.innerHTML);
  }

  return (
    <div>
      <Header
        generate={generate}
        fonts={fonts}
        styles={styles}
        handleFont={handleFont}
        editMode={editMode}
        setEditMode={setEditMode}
      />
      <Content styles={styles} editMode={editMode} contentRef={contentRef} />
    </div>
  );
}
