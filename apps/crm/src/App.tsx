import React from "react";

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="card">
      <h2>CRM Counter</h2>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
};

export default Counter;
