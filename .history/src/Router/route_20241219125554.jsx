import { element } from "prop-types";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Sermons from "../Pages/Sermons";
import AboutUs from "../Pages/AboutUs";
import { Contact } from "../Pages/Contact";


const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
     {index: true, element: <Home /> },
     {path:'sermons', element: <Sermons /> },
     {path:'home', element: <Abou /> },
     {path:'home', element: <Home /> },
     {path:'home', element: <Home /> }

    ],
  },
];

export default routes;
