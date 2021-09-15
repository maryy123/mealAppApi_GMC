import React from "react";

const Measure = ({ meal }) => {
  const createTab = () => {
    const t = [];
    for (let i = 1; i <= 20; i++) {
      t.push(i);
    }
    return t;
  };
  const arr = createTab();
  console.log(arr);

  return (
    <div>
      <p className="subTitle">Measures:</p>
      {arr.map((el, i) =>
        meal[`strMeasure${i + 1}`] ? <p>{meal[`strMeasure${i + 1}`]}</p> : null
      )}
    </div>
  );
};

export default Measure;
