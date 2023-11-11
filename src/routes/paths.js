import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AllWorksPage } from "../pages/Allworks";
import { Myportfolio } from "../pages/Portfolio";
import { Testimonial } from "../pages/Alltestimonial";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Myportfolio />} />
      <Route path="/all-works" element={<AllWorksPage />} />
      <Route path="/all-testimonial" element={<Testimonial />} />
    </Routes>
  );
};
