import { Routes, Route } from "react-router-dom";

import './App.css'
import EmployeePage from './components/Pages/EmployeePage';
import { Layout } from "./components/common/Layout/Layout";
import OrganizationPage from "./components/Pages/OrganizationPage";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/employees" element={<EmployeePage/>}/>
      <Route path="/organization" element={<OrganizationPage/>}/>
    </Routes>
    </>
  )
}

export default App
