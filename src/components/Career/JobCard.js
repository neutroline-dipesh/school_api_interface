import Dom from "material-ui/utils/dom";
import React, { Component } from "react";
import "./JobCard.css";
import { Link } from "react-router-dom";
class JobCard extends Component {
  render() {
    return (
      <div className="card mb-3 JobCard">
        <h4 className="card-header bg-info text-white text-center JobCard-header">
          {this.props.department}
        </h4>
        <div className="card-body JobCard-body">
          <h5 className="card-title text-center mb-3">{this.props.title}</h5>
          <div className="card-text">
            <p>Job ID: {this.props.job_id}</p>
            <p>Date Posted: {this.props.psted_date}</p>
            <p>Status: {this.props.status}</p>
          </div>
          <div className="JobCard-apply text-center">
            <Link
              to={{
                pathname: "/career/jobDesc",
                state: this.props.job,
              }}
            >
              <button className="btn btn-primary my-3 ">Apply</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default JobCard;
