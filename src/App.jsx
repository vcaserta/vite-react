import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import ListingPage from "./pages/ListingPage";
import ProductPage from "./pages/ProductPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: '/listing', children: [
          {
            index: true,
            element: <ListingPage />
          },
          {
            path: ':prdId',
            element: <ProductPage />
          },
        ]
      },
      {
        index: true,
        path: '/cart',
        element: <CartPage />
      }
    ]
  }

])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
