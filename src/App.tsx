import Spinner from "./components/Spinner/Spinner";

/* Theme variables */
import "./theme/variables.css";
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";

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
import { Route } from "react-router-dom";
import { animationBuilder } from "./utils/animation-builder";
import { IonReactRouter } from "@ionic/react-router";

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
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <IonRouterOutlet id="main" animation={animationBuilder}>
              <Route path="/" exact component={Home} />
              <Route path="/about-us" exact component={AboutUs} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/legal-notice" exact component={LegalNotice} />
              <Route path="/privacy" exact component={Privacy} />
              <Route path="/app/privacy" exact component={AppPrivacy} />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </Suspense>
    </IonApp>
  );
};

export default App;
