const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="Statistics">
      <h2 className="title">Statistics</h2>
      <p className="subtitle">
        Good: <span className="quantity">{good}</span>
      </p>

      <p className="subtitle">
        Neutral: <span className="quantity">{neutral}</span>
      </p>

      <p className="subtitle">
        Bad: <span className="quantity">{bad}</span>
      </p>

      <p className="subtitle">
        Total: <span className="quantity">{total}</span>
      </p>

      <p className="subtitle">
        Positive feedback: <span className="quantity">{positivePercentage}%</span>
      </p>
    </div>
  );
};

export default Statistics;
