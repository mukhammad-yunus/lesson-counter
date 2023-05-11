export default function InfoDisplay({ lesson, count, add }) {
  const percent = `${((lesson / count) * 100).toFixed()}%`;
  return (
    <section className="grid-display">
      <div className="bar">
        <div id="change-bar" style={{ width: percent }}></div>
      </div>
      <p className="lessons-seen">
        <span>{lesson}</span> of {count}
      </p>
      <button className="lessons-seen" id="add" onClick={add}>
        +
      </button>
    </section>
  );
}
