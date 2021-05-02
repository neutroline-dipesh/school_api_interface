import React, { useState, useEffect, Component } from "react";
import "./Career.css";
import JobCard from "./JobCard";
import JobsData from "./jobs.json";
import PriceCard from "./PriceCard";
import axios from "axios";

class Carrer extends Component {
  state = {
    career: [],
  };
  componentDidMount() {
    axios.get("http://localhost:4000/career/").then((response) => {
      if (response.data) {
        this.setState({ career: response.data.data });
      } else {
      }
    });
  }

  render() {
    const Jobs = JobsData.datas;
    console.log(this.state.career);
    return (
      <div className="careerPage">
        <div className="container my-4">
          <div className="carrer-img">
            <div className="text-container">
              <h3 className="text-center">Carrers</h3>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div>
            <h3 className="carrer-heading m-4">Current Vacancies</h3>
            <hr />
            <div className="row carrer">
              {this.state.career.map((item) => {
                return (
                  <div className="col-md-6 col-lg-4 my-4">
                    {/* <JobCard key={job.jobId} job={job}/> */}
                    <PriceCard
                      key={item._id}
                      id={item._id}
                      department={item.department}
                      title={item.title}
                      job_id={item.job_id}
                      psted_date={item.psted_date}
                      status={item.status.toString()}
                      description={item.description}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carrer;
