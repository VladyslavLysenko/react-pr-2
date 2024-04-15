export const Stats = ({
  feedback: { good, neutral, bad },
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <section className="stats">
      <h2 className="stats__title">Statistics</h2>
      <ul className="stats__list">
        <li className="stats__item">
          <span>Good:{good}</span>
        </li>
        <li className="stats__item">
          <span>Neutral: {neutral}</span>
        </li>
        <li className="stats__item">
          <span>Bad:{bad}</span>
        </li>
        <li className="stats__item">Total: {countTotalFeedback()}</li>
        <li className="stats__item">
          Positive feedback:{countPositiveFeedbackPercentage()}%
        </li>
      </ul>
    </section>
  );
};
