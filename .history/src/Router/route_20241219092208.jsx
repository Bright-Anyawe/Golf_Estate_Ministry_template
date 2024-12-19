import { element } from "prop-types";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage";






const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
     {path:'home', element: <home></home> }
    ],
  },
];

export default routes;
