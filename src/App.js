import React from "react";
import "./global.css";
import Header from "./components/header/Header";
import TopCardList from "./components/top-cards-list/Top-Cards-List";
import Overview from "./components/overview/Overview";
import Switch from "./components/switch/Switch";

function App() {
  return (
    <>
    {/*Pasandole hijos al header */}
      <Header>
        <Switch />
      </Header>
      <TopCardList />
      <Overview />
    </>
  );
}

export default App;
