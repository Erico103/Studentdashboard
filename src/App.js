import React from "react"
import { Routes, Route } from "react-router";
import './App.css';
import ChartAvg from "./components/ChartAvg";


function App() {


  
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<ChartAvg/>}/>
      </Routes>
    </div>
  );
}

export default App;
