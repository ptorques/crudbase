import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './screens/Screen1/index.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Screen1 from './screens/Screen1/index.jsx';
import Screen2 from './screens/Screen2/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Screen1 />,
  },
  {
    path: "/screen2",
    element: <Screen2 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>,
)
