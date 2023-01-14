import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StoreProvider } from './stores';
import {
  RouterProvider,
} from "react-router-dom";
import { router, FallBack } from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StoreProvider>
    <RouterProvider router={router} fallbackElement={<FallBack/>} />
  </StoreProvider>
);
