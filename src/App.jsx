import weatherLoader from "./assets/components/weather/weather-loader/weatherLoader";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LocationPage from "./assets/pages/locations/LocationPage";

import NotFoundPage from "./assets/not-found-page/NotFoundPage";
import NoLocations from "./assets/components/weather/no-locations/NoLocations";

import Weather from "./assets/components/weather/Weather";
import locationLoader from "./assets/pages/locations/location-loader/locationLoader";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Weather />,
      loader: weatherLoader,
      errorElement: <NotFoundPage />,
    },
    {
      path: "/locations",
      element: <LocationPage />,
      loader: locationLoader,
    },
    {
      path: "/no-locations",
      element: <NoLocations />,
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
