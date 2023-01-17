import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { MfaList, AddMfa, Setting } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <MfaList/>,
      },
      {
        path: "/add",
        element: <AddMfa/>,
      }, {
        path: "/setting",
        element: <Setting/>,
      },
    ],
  },
]);

export const FallBack = () => {
  return <div>Waiting</div>;
};
