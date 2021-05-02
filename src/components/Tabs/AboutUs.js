import React from "react";
import "../../App.css";
import Sidebar from "../InnerAboutUs/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FounderMessage from "../FounderMessage/FounderMessage";
import OurVision from "../OurVision/OurVision";
import History from "../SchoolHistory/History";
import Staff from "../Faculties/Staff";

function AboutUs() {
  return (
    <div className="aboutUs">
      <Router>
        <Switch>
          <Route path="/aboutUs" exact component={Sidebar} />
          <Route path="/founderMessage" component={FounderMessage} />
          <Route path="/vision" component={OurVision} />
          <Route path="/faculties" component={Staff}/>
          <Route path="/history" component={History} />
        </Switch>
      </Router>
    </div>
  );
}

export default AboutUs;
