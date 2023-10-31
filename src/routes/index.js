import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import Loading from "../pages/Loading";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/auth",
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    {
      path: "/call",
      children: [
        { path: "", element: <Call /> },
        { path: "FackTalk", element: <FaceTalk /> },
      ],
    },
    {
      path: "/",
      children: [
        { path: "/", element: <Home /> },
        { path: "/Loading", element: <Loading /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}


//Pages
const Home = Loadable(lazy(() => import("../pages/Home")));

const Page404 = Loadable(lazy(() => import("../pages/Page404")));

const Call = Loadable(lazy(() => import("../pages/Call")))

const FaceTalk = Loadable(lazy(() => import("../pages/FaceTalk")))

const Loading = Loadable(lazy(() => import("../pages/Loading")))

const Login = Loadable(lazy(() => import("../pages/Login")));

const Register = Loadable(lazy(() => import("../pages/Register")));
