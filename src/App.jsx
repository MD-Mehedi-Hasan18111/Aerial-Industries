import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/main.scss";
import Layout from "./Layout/layout";
import Home from "./pages/home";
import Farmers from "./pages/farmers";
import LandingPage from "./pages/landingPage";
import Investment from "./pages/investment";
import FarmerProfilePage from "./components/farmerProfilePage";
import EmailSignup from "./components/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ipollen8",
    element: (
      <Layout>
        <LandingPage />
      </Layout>
    ),
  },
  {
    path: "/farmers",
    element: (
      <Layout>
        <Farmers />
      </Layout>
    ),
  },
  {
    path: "/farmers/:userId",
    element: (
      <Layout>
        <FarmerProfilePage />
      </Layout>
    ),
  },
  {
    path: "/funders",
    element: (
      <Layout>
        <Investment />
      </Layout>
    ),
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <EmailSignup />
      </Layout>
    ),
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
