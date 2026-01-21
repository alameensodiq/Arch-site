import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import { Loader } from "./utils/Loader";

const LazyIndexPage = React.lazy(() => import("./Components/HomePage/Home"));
const LazyProjectPage = React.lazy(
  () => import("./Components/Projects/Projects")
);
const LazyServicePage = React.lazy(
  () => import("./Components/Services/Service")
);
const LazyContactPage = React.lazy(
  () => import("./Components/Contact/Contact")
);
const LazyAboutPage = React.lazy(() => import("./Components/About/About"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Routes */}
      <Route
        path="/"
        element={
          <React.Suspense fallback={<Loader />}>
            <LazyIndexPage />
          </React.Suspense>
        }
      />
      <Route
        path="/projects"
        element={
          <React.Suspense fallback={<Loader />}>
            <LazyProjectPage />
          </React.Suspense>
        }
      />
      <Route
        path="/services"
        element={
          <React.Suspense fallback={<Loader />}>
            <LazyServicePage />
          </React.Suspense>
        }
      />
      <Route
        path="/contacts"
        element={
          <React.Suspense fallback={<Loader />}>
            <LazyContactPage />
          </React.Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <React.Suspense fallback={<Loader />}>
            <LazyAboutPage />
          </React.Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App() {
  // useStorageSync();
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
