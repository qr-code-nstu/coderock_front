import React from "react";
import {Route, Routes} from "react-router-dom";
import StartPage from "./pages/start_page/StartPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<StartPage/>}/>

            <Route path="/login" element={<div>grgr</div>}/>
        </Routes>
    );
}

export default App;
