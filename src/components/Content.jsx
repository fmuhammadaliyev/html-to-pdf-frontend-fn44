import { useState } from "react";

export default function Content({ styles, editMode }) {
  // Bitta obyekt ichida turli nomdagi qiymatlar
  const [personData, setPersonData] = useState({
    full: "Mhammadaliyev Fahriddin",
    home: "Uzbekistan, Fergana, Rishton, Toda, Navroz kochasi 112-uy",
    born: "03,09,2007",
    phoneNum: "+998 (99) 888-33-01",
    mailAcc: "faxriddinmuhammadaliyev2007@gmail.com",
  });

  // Har bir input o‘zgarganda ishlaydigan funksiya
  const changeField = (key, value) => {
    setPersonData((old) => ({ ...old, [key]: value }));
  };

  // Faqat matn chiqaruvchi komponent
  const ShowRow = ({ label, field }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontFamily: styles.defaultFont,
      }}
    >
      {label}:{" "}
      <p style={{ fontSize: "21px", whiteSpace: "pre-line" }}>
        {personData[field]}
      </p>
    </div>
  );

  // Faqat input chiqaruvchi komponent
  const EditRow = ({ field }) => (
    <input
      type="text"
      value={personData[field]}
      onChange={(e) => changeField(field, e.target.value)}
      style={{ display: "block", marginBottom: "10px", width: "300px" }}
    />
  );

  return (
    <div>
      {/* Name */}
      {editMode ? (
        <EditRow field="full" />
      ) : (
        <h1 style={{ fontFamily: styles.defaultFont }}>{personData.full}</h1>
      )}

      {editMode ? (
        <EditRow field="home" />
      ) : (
        <ShowRow label="Address" field="home" />
      )}
      {editMode ? (
        <EditRow field="born" />
      ) : (
        <ShowRow label="Birthday" field="born" />
      )}
      {editMode ? (
        <EditRow field="phoneNum" />
      ) : (
        <ShowRow label="Phone" field="phoneNum" />
      )}
      {editMode ? (
        <EditRow field="mailAcc" />
      ) : (
        <ShowRow label="Email" field="mailAcc" />
      )}
    </div>
  );
}
