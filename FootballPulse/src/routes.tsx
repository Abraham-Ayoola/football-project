import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import Live from "./component/LiveMatches";

const RoutesConfig = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
    },
    {
      path: "/live-matches",
      Component: Live,
    },
    {
      path: "*",
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RoutesConfig;
