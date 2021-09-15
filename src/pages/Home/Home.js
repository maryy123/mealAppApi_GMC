import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.creativemarket.com/0.1.0/ps/4138496/1820/1213/m1/fpnw/wm1/qhzdr87h8c6jprio6qgvpiaezcaqqihym6qbycp5pq5txgdpy6zejzvtj7svyde9-.jpg?1521125579&s=8abcdaa1d1323669b1b5d719403e77fa)",
        height: " 700px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        opacity: "0.7",
      }}
    >
      <section
        style={{
          position: "absolute",
          top: "20%",
          left: "5%",
          fontSize: "x-large",
          color: "white",
          fontStyle: "italic",
        }}
      >
        <h1>
          Welcome dear YummyMealers,
          <br /> let your unforgettable experience begin now
        </h1>
        <button
          style={{
            marginTop: "5%",
            borderRadius: "20px",
            background: "#cb8e00",
            padding: "2%",
          }}
        >
          <Link style={{ color: "White", fontWeight: "bold" }} to="/meals">
            Get Started
          </Link>
        </button>
      </section>
    </div>
  );
};

export default Home;
