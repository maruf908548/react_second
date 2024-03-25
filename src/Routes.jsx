import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import WwwblockcertsorgbyhtmltodesignFREEversion25Zero from "pages/WwwblockcertsorgbyhtmltodesignFREEversion25Zero";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "wwwblockcertsorgbyhtmltodesignfreeversion25zero",
      element: <WwwblockcertsorgbyhtmltodesignFREEversion25Zero />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
