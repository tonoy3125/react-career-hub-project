import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Root/Home/Home.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import AppliedJob from './Components/AppliedJob/AppliedJob.jsx';
import Blog from './Components/Blog/Blog.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Jobdetails from './Components/JobDetails/Jobdetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path : "/",
        element: <Home></Home>
      },
      {
        path : "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path : "/applied",
        loader: ()=> fetch('../jobs.json'),
        element: <AppliedJob></AppliedJob>
      },
      {
        path : "/blog",
        element: <Blog></Blog>
      },
      {
        path : "/job/:id",
        loader: ()=> fetch('../jobs.json'),
        element: <Jobdetails></Jobdetails>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
