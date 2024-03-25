import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/BlockCerts/Home";
import NotFound from "pages/NotFound";
import WwwblockcertsorgbyhtmltodesignFREEversion25Zero from "pages/BlockCerts/Home";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "BlockCerts",
      element: <BlockCerts />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
