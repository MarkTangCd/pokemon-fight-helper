import type { RouteObject } from "react-router-dom";
import LaunchpadPage from "./pages/Launchpad";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <LaunchpadPage />,
  },
];

export default routes;
