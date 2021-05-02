import React from "react";
import '../../App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdministrativeMembers from '../OurStaffs/AdministrativeMembers';
import FacultyMembers from '../OurStaffs/FacultyMembers';

function OurStaffs() {
  return (
    <div className="ourStaffsPage">
      <Router>
        <Switch>
          <Route path="/ourStaffs" exact component={AdministrativeMembers} />
          <Route path="/facultyMembers" component={FacultyMembers} />
        </Switch>
      </Router>
    </div>
  );
}

export default OurStaffs;
