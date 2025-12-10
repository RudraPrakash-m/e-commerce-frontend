import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
    <Auth0Provider
      domain="dev-zbkr6fc5mj51dgdm.us.auth0.com"
      clientId="O5Ui2VcoM33jbXsOkI1PMyRX1JOYX1lh"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
);
