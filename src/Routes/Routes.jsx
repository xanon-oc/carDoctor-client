import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Bookings from "../Pages/Bookings/Bookings";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout/:id",
        element: <CheckOut />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
    ],
  },
]);

export default routes;
