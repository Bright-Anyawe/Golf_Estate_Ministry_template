import { element } from "prop-types";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";






const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
     {index: true, element: <Home /> }
     {path:'home', element: <Home /> }
     {path:'home', element: <Home /> }
     {path:'home', element: <Home /> }
     {path:'home', element: <Home /> }

    ],
  },
];

export default routes;
