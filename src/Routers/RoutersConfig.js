import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Recommend from '../Pages/Recommend';
import Contact from '../Pages/Contact';
import Product from "../Pages/Product";

function RoutersConfig(props) {
    return (
        <Routes>
            <Route
                exact
                path="/"
                element={<Home />}
            />

            <Route
                exact
                path="/product"
                element={<Product />}
            />

            <Route
                exact
                path="/recommend"
                element={<Recommend />}
            />

            <Route
                exact
                path="/contact"
                element={<Contact />}
            />
        </Routes>
    );
}

export default RoutersConfig;