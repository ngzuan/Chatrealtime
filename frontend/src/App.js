import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Channels from "./pages/Channels";
import Home from "./pages/Home";
const router = createBrowserRouter([
  {
    path: "/message/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/message/register",
    element: <Register />,
  },
  {
    path: "/channels",
    element: <Channels />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
