import React, { useEffect, useState } from "react";
import axios from "axios";
import MealCard from "../../components/MealCard/MealCard";
import SearchCom from "../../components/Search/SearchCom";
import Pagination from "../../components/Pagination/Pagination";
import "./MealList.css";
import Error from "../Error/Error";

const MealList = () => {
  // states:
  const [meals, setMeals] = useState([]);
  const [name, setName] = useState("");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  //pagination states:
  const [currentPage, setCurrentPage] = useState(1);
  const [mealsPerPage] = useState(8);

  useEffect(() => {
    getMeals();
  }, [name]);
  const getMeals = async () => {
    try {
      setLoad(true);
      const result = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
      );
      setMeals(result.data.meals);
      setLoad(false);
    } catch {
      setError(true);
      setLoad(false);
    }
  };

  //Pagination:
  const indexLastMeal = currentPage * mealsPerPage;
  const indexFirstMeal = indexLastMeal - mealsPerPage;
  const currentMeals = meals ? meals.slice(indexFirstMeal, indexLastMeal) : 0;
  const len = meals ? meals.length : 0;
  return (
    <div style={{ height: "1000px" }}>
      <SearchCom setName={setName} setCurrentPage={setCurrentPage} />
      {load ? (
        <div>
          <img
            style={{ marginTop: "15%", width: "20%" }}
            src="https://thumbs.gfycat.com/QualifiedRecklessIrukandjijellyfish-max-1mb.gif"
          />
        </div>
      ) : error ? (
        <Error />
      ) : (
        <section className="list">
          {currentMeals ? (
            currentMeals.map((el) => <MealCard el={el} key={el.idMeal} />)
          ) : (
            <p
              style={{
                color: "#cb8e00",
                fontSize: "xx-large",
                fontWeight: "bold",
                height: "550px",
              }}
            >
              Not found!
            </p>
          )}
          <Pagination
            mealsPerPage={mealsPerPage}
            totalMeals={len}
            setCurrentPage={setCurrentPage}
          />
        </section>
      )}
    </div>
  );
};

export default MealList;
