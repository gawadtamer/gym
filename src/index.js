import * as React from "react";
import { createRoot } from "react-dom/client";
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import "./i18n"; // Import i18n configuration
import App from "./App";
import AllAbout from "./Pages/About/AllAbout";
import AllTrainers from "./Pages/Trainers/AllTrainers";
import AllContact from "./Pages/Contact/AllContact";
import AllJoin from "./Pages/Join/AllJoin";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import AllCustomDiet from "./Pages/Custom/AllCustomDiet";
import DietDetails from "./Pages/Custom/Details";
import SmartNutrition from "./Pages/Custom/SmartNutrition";
import EliteEquipment from "./Pages/Custom/EliteEquipment";
import ProTraining from "./Pages/Custom/ProTraining";
import DashboardPage from "./Pages/Dashboard/DashboardPage";

import { CartProvider } from "./CartContext";
import Cart from "./Cart";

const Gawad  = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "about",
    element: <AllAbout />,
  },
  {
    path: "trainers",
    element: <AllTrainers />,
  },
  {
    path: "contact",
    element: <AllContact />,
  },
  {
    path: "join",
    element: <AllJoin />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
   {
    path: "customdiet",
    element: <AllCustomDiet />,
  },  
  {
    path: "customdiet-details",
    element: <DietDetails />,
  },
  {
    path: "smart-nutrition",
    element: <SmartNutrition />,
  },
  {
    path: "elite-equipment",
    element: <EliteEquipment />,
  },
  {
    path: "pro-training",
    element: <ProTraining />,
  },
  {
    path: "dashboard",
    element: <DashboardPage />,
  },

], {
  basename: process.env.PUBLIC_URL || "/"
});

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={Gawad} />
  </CartProvider>
);
