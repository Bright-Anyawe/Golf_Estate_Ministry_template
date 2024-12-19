import App from "../App";
import ErrorPage from "../Pages/ErrorPage";






const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
     {}
    ],
  },
];

export default routes;
