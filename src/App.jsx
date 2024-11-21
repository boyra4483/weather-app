import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Weather from "./assets/components/weather/Weather";

import Locations from "./assets/pages/location/Locations";
import "./App.css";

import NotFoundPage from "./assets/pages/not-found-page/NotFoundPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Weather />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/locations",
      element: <Locations />,
    },
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default function App() {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_normalizeFormMethod: true,
      }}
    />
  );
}
