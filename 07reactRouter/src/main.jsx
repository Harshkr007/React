// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import Home from './components/Home/Home.jsx'

// const router = createBrowserRouter([
//   {
//     Path: '/', (mistake)
//     element: <Layout/>,
//     children:[
//       {
//         Path:"",
//         element:<Home/>
//       }

//     ]

//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider
//       router={router}
//       />
//   </React.StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/ContactUs/ContactUS.jsx";
import User from "./components/User/User.jsx";
import GitHub from "./components/GitHub/GitHub.jsx";
import ThankYou from "./components/ThankYou/ThankYou.jsx";
import NoMatch from "./components/NoMatch/NoMatch.jsx";

//  const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'contactUs',
//         element: <Contact/>
//       },
//       {
//         path: 'about',
//         element: <About/>
//       },
//      {
//         path:'github'
//         element:<GitHub/>
//      }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path=""          element={<Home />} />
      <Route path="about"     element={<About />} />
      <Route path="contactUs" element={<Contact />} />
      <Route path="github"    element={<GitHub />} />
      <Route path="user/:userId" element={<User />} />
      <Route path="thankyou" element={<ThankYou />} />
      <Route path="*"         element={<NoMatch/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
