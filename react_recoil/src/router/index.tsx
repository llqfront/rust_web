import React, { lazy, Suspense } from 'react';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Loading from '@com/Loading';
import { DefaultLayout } from "@/views/Layouts/";
const Home = lazy(() => import('@/views/Home/'));
const About = lazy(() => import('@/views/About/'));
const Demo = lazy(() => import('@/views/Demo/'));
const Ctx = lazy(() => import('@/views/Ctx/'));
const EpCtx = lazy(() => import('@/views/EpCtx/'));
const NotFound = lazy(() => import('@/views/NotFound'));

const Dashboard = lazy(() => import('@/views/Dashboard'))
const Member = lazy(() => import('@/views/Member'))
const Setting = lazy(() => import('@/views/Setting'))
const ProdService = lazy(() => import('@/views/ProdService'))
const Operations = lazy(() => import('@/views/Operations'))
const Login = lazy(() => import('@/views/Account/Login'))
const Register = lazy(() => import('@/views/Account/Register'))
const ShopPv = lazy(() => import('@/views/Dashboard/ShopPv'))


const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout/>,
    children: [
      {
        path: "",
        index: true,
        element: <Home />,
      },
      {
        path: "service",
        element: <Dashboard />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
            children: [
              {
                path: "shop-pv",
                index: true,
                element: <ShopPv />,
              },
            ]
          },
          {
            path: "member",
            index: true,
            element: <Member />,
          },
          {
            path: "setting",
            index: true,
            element: <Setting />,
          },
          {
            path: "prodService",
            index: true,
            element: <ProdService />,
          },
          {
            path: "operations",
            index: true,
            element: <Operations />,
          },
        ]
      },
      {
        path: "about",
        index: true,
        element: <About />,
      },
      {
        path: "demo",
        index: true,
        element: <Demo />,
      },
      {
        path: "ctx",
        index: true,
        element: <Ctx />,
      },
      {
        path: "epctx",
        index: true,
        element: <EpCtx />,
      },
    ],
  },
  // 404
  {
    path: "*",
    index: true,
    element: <NotFound/>
  },
]);

export default () => (
    <>
      <Suspense fallback={<Loading/>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
)



// import { lazy, Suspense } from "react";
// import { Route, Routes } from "react-router-dom";
// import { DefaultLayout } from "./views/Layouts/index.tsx";
// const HomePage = lazy(() => import("./views/Home/index.tsx"));
// const AboutPage = lazy(() => import("./views/About/index.tsx"));
// const DemoPage = lazy(() => import("./views/Demo/index.tsx"));
//
// function RouteNotFound() {
//   return <div>Not found</div>;
// }
//
// export default function Router() {
//   return (
//     <Suspense fallback={<div>Page is Loading...</div>}>
//       <Routes>
//         <Route path="/" element={<DefaultLayout />}>
//           <Route index element={<HomePage />} />
//           <Route path="about" element={<AboutPage />} />
//           <Route path="demo" element={<DemoPage />} />
//           <Route path="*" element={<RouteNotFound />} />
//         </Route>
//       </Routes>
//     </Suspense>
//   );
// }
// import { BrowserRouter } from "react-router-dom";
//
// function ClientApp() {
//   return (
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// }
