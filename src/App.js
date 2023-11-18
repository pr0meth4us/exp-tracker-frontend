import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import TableExp from "./components/Table";
import AddExp from './functions/AddExp';
import AddInc from './functions/AddInc';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

let App = () => {
    return (
        <>
        <div className='items-center'>
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<TableExp/>}/>
                <Route exact path="/exp" element={<AddExp/>}/>
                <Route exact path="/inc" element={<AddInc/>}/>

            </Routes>
        </Router>
        </div>
        </>
    );
}

export default App;
