import React from "react";
import Loader from "./Components/UI/Loader/Loader";
import "./style/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import Navigation from "./Components/Navigation/Navigation";

const Home = loadable(() => import("./Components/Pages/Home"));
const Characters = loadable(() => import("./Components/Pages/Characters"));

const pages = [
  {
    path: "/",
    element: <Home fallback={<Loader />} />,
    icon: "fa fa-home",
  },
  {
    path: "/characters",
    element: <Characters fallback={<Loader />} />,
    icon: "fa-solid fa-user-group",
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation pages={pages} />
        <Routes>
          {pages.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
