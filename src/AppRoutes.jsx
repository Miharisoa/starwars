import React, { Suspense, lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";

const HomeScreen = lazy(() => import("./pages/Home/Home"))
const ListingScreen = lazy(() => import("./pages/Listing/Listing"))
const DetailsScreen = lazy(() => import("./pages/Details/Details"))

function Approutes() {
  return (
    <Routes>
      
      <Route path="/" element={
        <Suspense fallback={<div>Chargement...</div>}>
          <HomeScreen /> 
        </Suspense>} 
      />
      <Route path="/listing" element={
        <Suspense fallback={<div>Chargement...</div>}>
          <ListingScreen />
        </Suspense>} 
      />
      <Route path="/details" element={
        <Suspense fallback={<div>Chargement...</div>}>
          <DetailsScreen />
        </Suspense>} 
      />
    </Routes>
  );
}

export default Approutes;