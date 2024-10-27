import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loadable = (Component) => (myProps) => {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      {!!myProps?.hidden && myProps?.hidden() ? (
        <NotFoundPage />
      ) : (
        <Component {...myProps} />
      )}
    </Suspense>
  );
};
const NotFoundPage = Loadable(lazy(() => import("./page/NotFoundPage")));
const Layout = Loadable(lazy(() => import("./components/layout/Layout")));
const BlogList = Loadable(lazy(() => import("./page/BlogList")));

const BlogDetailPage = Loadable(lazy(() => import("./page/BlogDetailPage")));

export const routers = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <BlogList />,
      },
      {
        path: "/detail/:id",
        element: <BlogDetailPage />,
      },
    ],
  },
  {
    path: "*",
    children: [
      {
        path: "*",
        exact: true,
        element: <Navigate to="/" replace />,
      },
    ],
  },
];
