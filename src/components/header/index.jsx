export default function Header({
  fonts,
  styles,
  handleFont,
  editMode,
  setEditMode,
}) {
  return (
    <header>
      <div>
        <select
          onChange={(evt) => {
            handleFont(evt.currentTarget.value);
          }}
          defaultValue={styles.defaultFont}
        >
          {fonts.map((font) => {
            return (
              <option value={font} key={font}>
                {font}
              </option>
            );
          })}
        </select>
        <input
          onChange={(evt) => {
            setEditMode(evt.currentTarget.checked);
          }}
          checked={editMode}
          id="editMode"
          type="checkbox"
        />
        <label htmlFor="editMode">
          <span></span>
        </label>
        <button>Generate</button>
      </div>
    </header>
  );
}
