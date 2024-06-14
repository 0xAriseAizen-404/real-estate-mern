import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Auth0Provider } from "@auth0/auth0-react";
import { MantineProvider } from "@mantine/core";
// core styles are required for all packages
import "@mantine/core/styles.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <Auth0Provider
          domain="dev-qpulsxw80eb4z4qe.uk.auth0.com"
          clientId="5apZiUAIjDkVtwsXDXU3lPZIdBpJagnf"
          authorizationParams={{
            redirect_uri: "http://localhost:5173",
            audience: "this is an unique identifier",
          }}
          scope="openid profile email"
        >
          <App />
        </Auth0Provider>
      </QueryClientProvider>
    </MantineProvider>
  </React.StrictMode>
);
