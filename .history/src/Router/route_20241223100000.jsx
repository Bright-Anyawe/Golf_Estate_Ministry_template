import App from "../App";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Sermons from "../Pages/Sermons";
import AboutUs from "../Pages/AboutUs";
import Event from "../Pages/Events";
import Ministries from "../Pages/Ministries/Ministries";
import Contact from "../Pages/Contact";
import { Announcement } from "@mui/icons-material";


const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "event", element: <Event /> },
      {path}
      { path: "sermons", element: <Sermons /> },
      { path: "sermons", element: <Ministries /> },
      { path: "aboutUs", element: <AboutUs /> },
      { path: "contact", element: <Contact /> },
    ],
  },
];

export default routes;
