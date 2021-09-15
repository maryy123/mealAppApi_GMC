import React, { useState, useEffect } from "react";
import "./Pagination.css";
const Pagination = ({ mealsPerPage, totalMeals, setCurrentPage }) => {
  const createPages = () => {
    const t = [];
    for (let i = 1; i <= Math.ceil(totalMeals / mealsPerPage); i++) {
      t.push(i);
    }
    return t;
  };
  const numberOfPages = createPages();

  return (
    <div className="pages">
      <ul>
        {numberOfPages.map((num) => (
          <li onClick={() => setCurrentPage(num)} key={num}>
            <a href="#">{num}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
