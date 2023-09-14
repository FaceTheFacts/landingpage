import Spinner from "./components/Spinner/Spinner";

/* Theme variables */
import "./theme/variables.css";
import { IonApp, setupIonicReact } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";
import log from "loglevel";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

setupIonicReact();

const Home = React.lazy(() => import("./pages/Home/Home"));
const AboutUs = React.lazy(() => import("./pages/AboutUs/AboutUs"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const LegalNotice = React.lazy(
  () => import("./pages/Legal_Notice/Legal_Notice")
);
const AppPrivacy = React.lazy(() => import("./pages/Privacy/App_Privacy"));
const Privacy = React.lazy(() => import("./pages/Privacy/Privacy"));

const App: React.FC = () => {
  log.setLevel("DEBUG", true);
  return (
    <IonApp>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal-notice" element={<LegalNotice />} />
            <Route path="/app/privacy" element={<AppPrivacy />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </IonApp>
  );
};

export default App;
