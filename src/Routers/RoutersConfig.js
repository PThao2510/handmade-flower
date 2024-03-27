import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

function RoutersConfig(props) {
    return (
        <Routes>
            <Route
                exact
                path="/"
                element={<Home />}
            />
        </Routes>
    );
}

export default RoutersConfig;