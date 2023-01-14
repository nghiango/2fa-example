import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { MfaList } from "./components/MfaList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MfaList />,
      },
    ],
  },
]);

export const FallBack = () => {
  return <div>Waiting</div>;
};
