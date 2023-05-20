import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryCliente = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryCliente}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>
);
