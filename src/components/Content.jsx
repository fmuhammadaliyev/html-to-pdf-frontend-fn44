export default function Content({ editMode, contentRef, styles }) {
  const [info, setInfo] = useState({
    full: "Muhammadaliyev Fahriddin",
    home: "Uzbekistan, Fergana, Rishton, Toda, Navroz ko'chasi 112-uy",
    born: "03.09.2007",
    phoneNum: "+998 (99) 883-33-01",
    mailAcc: "faxriddinmuhammadaliyev2007@gmail.com",
  });

  const changeField = (key, value) => {
    setInfo((prev) => ({ ...prev, [key]: value }));
  };

  const Row = ({ title, field }) => (
    <div className={styles.row}>
      <b>{title}:</b>
      <p>{info[field]}</p>
    </div>
  );

  const InputRow = ({ field }) => (
    <input
      type="text"
      className={styles.input}
      value={info[field]}
      onChange={(e) => changeField(field, e.target.value)}
    />
  );

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{info.full}</h1>
      <hr className={styles.line} />

      <div className={styles.grid}>
        <div
          ref={contentRef}
          style={{
            fontFamily: styles.defaultFont, // ← FONT SHU YERDA ISHLAYDI
          }}
        >
          {editMode ? (
            <InputRow field="full" />
          ) : (
            <Row title="Name" field="full" />
          )}
          {editMode ? (
            <InputRow field="home" />
          ) : (
            <Row title="Address" field="home" />
          )}
          {editMode ? (
            <InputRow field="born" />
          ) : (
            <Row title="Birthday" field="born" />
          )}
          {editMode ? (
            <InputRow field="phoneNum" />
          ) : (
            <Row title="Tel" field="phoneNum" />
          )}
          {editMode ? (
            <InputRow field="mailAcc" />
          ) : (
            <Row title="Email" field="mailAcc" />
          )}
        </div>

        <div className={styles.avatarBox}>
          <div className={styles.avatar}></div>
        </div>
      </div>
    </div>
  );
}
