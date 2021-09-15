import axios from "axios";
import React, { useEffect, useState } from "react";
import Ingredient from "../../components/Ingredients/Ingredient";
import Measure from "../../components/Measures/Measure";
import Error from "../Error/Error";
import "./Meal.css";

const Meal = ({ match, history }) => {
  // states:
  const [meal, setMeal] = useState({});
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getMeal();
  }, [match.params.id]);
  const getMeal = async () => {
    try {
      setLoad(true);
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
      );
      setMeal(res.data.meals[0]);
      setLoad(false);
    } catch {
      setError(true);
      setLoad(false);
    }
  };

  return load ? (
    <div style={{ height: "690px" }}>
      <img
        style={{ marginTop: "15%", width: "20%" }}
        src="https://thumbs.gfycat.com/QualifiedRecklessIrukandjijellyfish-max-1mb.gif"
      />
    </div>
  ) : error ? (
    <Error />
  ) : (
    <div className="itemContainer">
      <h1>{meal.strMeal}</h1>
      <section className="textImg">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <Measure meal={meal} />
        <Ingredient meal={meal} />
        <section className="inst">
          <p className="subTitle">Instructions:</p>
          <p className="parag">{meal.strInstructions}</p>
        </section>
      </section>
      <button onClick={() => history.goBack()}>
        <i className="fa fa-arrow-circle-left"></i>
      </button>
    </div>
  );
};

export default Meal;
