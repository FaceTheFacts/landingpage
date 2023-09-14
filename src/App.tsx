import Spinner from "./components/Spinner/Spinner";
import { animationBuilder } from "./utils/animation-builder";

/* Theme variables */
import "./theme/variables.css";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";

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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const AboutUs = React.lazy(() => import("./pages/AboutUs/AboutUs"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const LegalNotice = React.lazy(() => import("./pages/Legal_Notice"));
const AppPrivacy = React.lazy(() => import("./pages/App_Privacy"));
const Privacy = React.lazy(() => import("./pages/Privacy"));

const App: React.FC = () => {
  log.setLevel("DEBUG", true);
  return (
    <IonApp>
      <Suspense fallback={<Spinner />}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal-notice" element={<LegalNotice />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/app/privacy" element={<AppPrivacy />} />
          </Routes>
        </Router>
      </Suspense>
    </IonApp>
  );
};

export default App;
