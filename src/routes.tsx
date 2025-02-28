import { createBrowserRouter } from "react-router-dom";
import TodoList from "./pages/todo/todo-list";
import NotFoundPage from "./pages/not-found/not-found";
import Home from "./pages/home/home";
import Layout from "./pages/layout/layout";
import Products from "./pages/products/products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "todos", element: <TodoList /> },
      { path: "products", element: <Products /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
