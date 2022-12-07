import {
    createBrowserRouter
} from "react-router-dom";

import HomeScreen from "../screens/HomeScreen";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
    },
  ]);

export default router;