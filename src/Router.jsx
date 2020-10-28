import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import AddProjectView0 from "./pages/AddProjectView0";
import AddProjectView1 from "./pages/AddProjectView1";
import AddProjectView2 from "./pages/AddProjectView2";
import AddProjectView3 from "./pages/AddProjectView3";
import AddProjectView4 from "./pages/AddProjectView4";
import AddProjectViewDone from "./pages/AddProjectViewDone";
import AuthMenuMobile from "./pages/mobile/AuthMenuMobile";
import AuthWelcomeView from "./pages/AuthWelcomeView";
import MenuMobile from "./pages/mobile/MenuMobile";
import Projects from "./pages/Projects";
import SignIn from "./pages/SignIn";
import SignUpDesktop from "./pages/desktop/SignUpDesktop";
import SignUpFull1Mobile from "./pages/mobile/SignUpFull1Mobile";
import SignUpFull2Mobile from "./pages/mobile/SignUpFull2Mobile";
import SignUpFull3Mobile from "./pages/mobile/SignUpFull3Mobile";
import SignUpFull4Mobile from "./pages/mobile/SignUpFull4Mobile";
import SignUpFull5Mobile from "./pages/mobile/SignUpFull5Mobile";
import SignUpFull6Mobile from "./pages/mobile/SignUpFull6Mobile";
import SignUpMobile from "./pages/mobile/SignUpMobile";
import WelcomePage from "./pages/WelcomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/pages/SignUpDesktop">
          <SignUpDesktop />
        </Route> */}
        {/* <Route path="/pages/SignIn">
          <SignIn />
        </Route> */}
        <Route path="/pages/AddProjectView0">
          <AddProjectView0 />
        </Route>
        <Route path="/pages/AddProjectView1">
          <AddProjectView1 />
        </Route>
        <Route path="/pages/AddProjectView2">
          <AddProjectView2 />
        </Route>
        <Route path="/pages/AddProjectView3">
          <AddProjectView3 />
        </Route>
        <Route path="/pages/AddProjectView4">
          <AddProjectView4 />
        </Route>
        <Route path="/pages/AddProjectViewDone">
          <AddProjectViewDone />
        </Route>
        <PrivateRouter
          exact
          path="/pages/AuthWelcomeView"
          component={AuthWelcomeView}
        ></PrivateRouter>
        <Route path="/">
          <WelcomePage />
        </Route>
        <Route path="/pages/mobile/MenuMobile">
          <MenuMobile />
        </Route>
        <Route path="/pages/mobile/AuthMenuMobile">
          <AuthMenuMobile />
        </Route>
        <Route path="/pages/mobile/SignUpMobile">
          <SignUpMobile />
        </Route>
        <Route path="/pages/mobile/SignUpFull1Mobile">
          <SignUpFull1Mobile />
        </Route>
        <Route path="/pages/mobile/SignUpFull2Mobile">
          <SignUpFull2Mobile />
        </Route>
        <Route path="/pages/mobile/SignUpFull3Mobile">
          <SignUpFull3Mobile />
        </Route>
        <Route path="/pages/mobile/SignUpFull4Mobile">
          <SignUpFull4Mobile />
        </Route>
        <Route path="/pages/mobile/SignUpFull5Mobile">
          <SignUpFull5Mobile />
        </Route>
        <Route path="/pages/mobile/SignUpFull6Mobile">
          <SignUpFull6Mobile />
        </Route>
      </Switch>
      <Route path="/pages/SignUpDesktop">
        <SignUpDesktop />
      </Route>{" "}
      <Route path="/pages/SignIn">
        <SignIn />
      </Route>
    </BrowserRouter>
  );
};

export default Router;
