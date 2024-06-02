import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import Root from "./components/Root/Root.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import{
  createBrowserRouter,
  RouterProvider,
}from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import ReadablePage from './components/ReadablePage/ReadablePage.jsx';
const router = createBrowserRouter([
  {
    path: "",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/listedbook",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/pageRead",
        element: <ReadablePage></ReadablePage>,
        loader: () => fetch("../data.json"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer/>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
