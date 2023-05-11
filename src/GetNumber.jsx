export default function GetNumber({
  count,
  setCount,
  handleSubmit,
  isNumber,
  changeNumber,
  isDisabled
}) {
  return (
    <div className="grid-display">
      <label htmlFor="lesson">
        How many lessons do you want to watch per session?
      </label>
      <input
        type="number"
        id="lesson"
        placeholder="0"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        required
        disabled={isDisabled}
      />
      {isNumber ? (
        <button className="change-btn" onClick={changeNumber}>
          Change
        </button>
      ) : (
        <button className="done-btn" onClick={handleSubmit}>
          Start
        </button>
      )}
    </div>
  );
}
