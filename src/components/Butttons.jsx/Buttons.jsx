export const Buttons = ({ handleIncrement, options }) => {
  return (
    <section className="feedback">
      <h1 className="feedback__title">Leave feedback</h1>
      <ul className="feedback__list">
        {options.map((item, index) => (
          <li key={index} className="feedback__item">
            <button
              name={item}
              onClick={handleIncrement}
              className="feedback__btn"
              type="button"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
