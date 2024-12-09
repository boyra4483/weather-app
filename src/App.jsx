import { createBrowserRouter, RouterProvider } from "react-router-dom";
import classes from "./App.module.css";

import LocationPage from "./assets/pages/locations/LocationPage";
import NotFoundPage from "./assets/not-found-page/NotFoundPage";

import Weather from "./assets/components/weather/Weather";
import { loader as locationLoader } from "./assets/pages/locations/location-loader/locationLoader";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Weather />,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/locations",
      element: <LocationPage />,
      loader: locationLoader,
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
