import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Github, { githubInfo } from "./components/Github/Github.jsx";
import About from "./components/About/About.jsx";

const router = createBrowserRouter([

  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<App/>
      },
      {
        path:"/github",
        element:<Github/>,
        loader:githubInfo
      },
      {
        path:"/about",
        element:<About/>,
      },
    ]
  }

])

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  </Provider>
);
