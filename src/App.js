import { getQueriesForElement } from "@testing-library/react";
import { useRef } from "react";
import { Route, Routes } from "react-router-dom";

import './App.css'
import DashboardWrapper from "./Components/Dashboard/DashboardWrapper";
import LeftPanel from "./Components/LeftPanel";
import SideBar from "./Components/SideBar/SideBar";
function App() {
  const sideBar = useRef()


  return (
    <>
      <div className="d-flex flex-row h-100 position-relative overflow-hidden">

        <LeftPanel></LeftPanel>
        <DashboardWrapper sideBarRef={sideBar} />
        <SideBar sideBarRef={sideBar}></SideBar>
      </div>
    </>
  );
}

export default App;
