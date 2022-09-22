import {Routes,Route} from "react-router-dom"
import { Fragment,useState ,useEffect} from 'react';
import axios from 'axios'
import Home from './Components/Home.js'
import './App.css';
import ProtectedRoute from "./Components/ProtectedRoute.js";
import LoginedMembers from "./Components/LoginedMembers.js";

function App() {
  const  [token,set] =useState(null);

  return (
    <Fragment>
      <main>
        <Routes>
          <Route element={<ProtectedRoute token={token} set={set}/>}>
            <Route path="/members" element={<LoginedMembers token={token} set={set}/>} />
          </Route>
          <Route path="/" element={<Home token={token} set={set}/>}/>
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
