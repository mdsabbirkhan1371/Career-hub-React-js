import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {createBrowserRouter,RouterProvider,}from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import ApplyiedJobs from './components/ApplyiedJobs/ApplyiedJobs.jsx';
import Blog from './components/Blog/Blog.jsx';
import JobsDetails from './components/JobsDetails/JobsDetails.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>
      },
      {
        path:"/applied",
        element:<ApplyiedJobs></ApplyiedJobs>,
        loader:()=>fetch('../public/jobs.json')
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/job/:id",
        element:<JobsDetails></JobsDetails>,
        loader:()=>fetch('../public/jobs.json')
        
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
