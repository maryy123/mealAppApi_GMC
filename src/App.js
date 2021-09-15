import { Switch, Route } from "react-router-dom";

import "./App.css";
import NavbarComponent from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Meal from "./pages/Meal/Meal";
import MealList from "./pages/MealsList/MealList";
function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/meals" component={MealList} />
        <Route path="/about" component={About} />
        <Route path="/meals/meal/:id" component={Meal} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
