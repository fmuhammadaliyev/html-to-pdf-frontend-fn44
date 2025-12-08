export default function Content({ styles, editMode }) {
  return (
    <div>
      {editMode ? (
        <input type="text" />
      ) : (
        <h1
          style={{
            fontFamily: styles.defaultFont,
          }}
        >
          John Doe
        </h1>
      )}
    </div>
  );
}
