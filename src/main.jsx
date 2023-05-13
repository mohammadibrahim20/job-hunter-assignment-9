import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ApplyJob from "./components/ApplyJob/ApplyJob";
import Blog from "./components/Blog/Blog";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import JobDetails from "./components/JobDetails/JobDetails";
import Stastics from "./components/Stastics/Stastics";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
        
        loader: ()=> fetch('jobCaatagory.json')
      },
      {
        path: "stastic",
        element: <Stastics/>
      },
      {
        path: 'applyjob',
        element: <ApplyJob />,
        loader: ()=> fetch("/jobData.json")
      },
      {
        path: "/:jobId",
        element: <JobDetails/>,
        loader: ({params}) => fetch("/jobData.json")
      },
      {
        path: 'blog',
        element: <Blog/>,
      },
      {
        path: '*',
        element: <Error/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
