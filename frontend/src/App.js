import {Routes,Route} from "react-router-dom"
import { Fragment } from 'react';
import Home from './Components/Home.js'
import './App.css';
import ProtectedRoute from "./Components/ProtectedRoute.js";
import LoginedMembers from "./Components/LoginedMembers.js";

function App() {
  return (
    <Fragment>
      <main>
        <Routes>
          <Route element={<ProtectedRoute/>}>
            <Route path="/members" element={<LoginedMembers/>} />
          </Route>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
