import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./Redux/store.js";
import { Provider } from "react-redux";
import ThemeComponent from "./component/themeComp/themeComp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeComponent>
        <Router>
          <App />
        </Router>
      </ThemeComponent>
    </Provider>
  </StrictMode>
);
