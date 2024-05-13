import React from "react";
import "./App.css";
import Todolist from "./Todolist";
import Clock from "./Timer";
import MyWeather from "./MyWeather";

function App() {
  return (
    <div className="container">
      <Todolist />
      <Clock />
      <MyWeather weather="맑음" />
    </div>
  );
}

export default App;
