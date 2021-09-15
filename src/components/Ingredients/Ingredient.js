import React from "react";

const Ingredient = ({ meal }) => {
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
      <p className="subTitle">Ingredients:</p>
      {arr.map((el, i) =>
        meal[`strIngredient${i + 1}`] ? (
          <p>{meal[`strIngredient${i + 1}`]}</p>
        ) : null
      )}
    </div>
  );
};

export default Ingredient;
