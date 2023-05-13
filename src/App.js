import React from "react";
import Home from "./Components/Layout/Pages/Home";
// import Section1 from "./Components/Layout/Features/Section1";
// import Section2 from "./Components/Layout/Features/Section2";
// import NavBar from "./Components/Navigation/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FindACard from "./Components/Layout/Pages/FindACard";
import OAP from "./Components/Layout/Pages/OAP";
import RootLaoyout from "./Components/Layout/Pages/RootLaoyout";
import ErrorPage from "./Components/Layout/Pages/ErrorPage";
import WaysToPay from "./Components/Layout/Pages/WaysToPay";
import Vision from "./Components/Layout/Pages/Vision";
import SignInPage from "./Components/Layout/Pages/SignInPage";
import "aos/dist/aos.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLaoyout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/find-a-card", element: <FindACard /> },
      { path: "/offers-and-promotions", element: <OAP /> },
      { path: "/ways-to-pay", element: <WaysToPay />},
      { path: "/vision", element: <Vision /> },
      
      { path: "/signin", element: <SignInPage />},
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
