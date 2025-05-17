import { createBrowserRouter } from "react-router-dom";
import { RoutePaths } from "./routesPath";
import Login from "../pages/login";
import Home from "../pages/dashboard/home";
import DashboardLayout from "../layout/dashboard";

export const router = createBrowserRouter([
  {
    path: RoutePaths.ROOT,
    element: <Login />,
  },
  {
    path: RoutePaths.ROOT,
    element: <DashboardLayout />,
    children: [
      {
        path: RoutePaths.DASHBOARD,
        element: <Home />,
      },
    ],
  },
]);
