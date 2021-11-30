import React from "react"
import { Routes, Route } from "react-router";
import './App.css';
import ChartAvg from "./components/ChartAvg";
import TableView from "./components/TableView";


function App() {


  
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<ChartAvg/>}/>
      <Route path="/" element={<TableView/>}/>
      </Routes>
    </div>
  );
}

export default App;
