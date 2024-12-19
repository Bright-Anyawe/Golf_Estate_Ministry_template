import App from "../App";
import { HomePage } from "./HomePage";
import { Cart } from "./Cart";
import { ProductList } from "./ProductList";
import Login from "./Login";
import SignUp from "./SignUp";
import ErrorPage from "../ErrorPage";
import { AuthWrapper } from "./AuthWrapper";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
     
  
];

export default routes;
