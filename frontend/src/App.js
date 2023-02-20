import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { Chat } from "./pages/Chat";

const router = createBrowserRouter([
  {
    path: "/message/login",
    element: <Login />,
  },
  {
    path: "/message/register",
    element: <Register />,
  },
  {
    path: "/message/chat",
    element: <Chat />,
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
