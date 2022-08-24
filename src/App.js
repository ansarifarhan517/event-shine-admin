import { Route, Routes } from "react-router-dom";

import './App.css'
import DashboardWrapper from "./Components/Dashboard/DashboardWrapper";
import LeftPanel from "./Components/LeftPanel";
import SideBar from "./Components/SideBar/SideBar";
function App() {
  return (
    <>
      <div className="d-flex flex-row h-100">

        <LeftPanel></LeftPanel>
        <DashboardWrapper />
        <SideBar></SideBar>
      </div>
    </>
  );
}

export default App;
