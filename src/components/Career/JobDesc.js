import React, { Component } from 'react';
import './JobDesc.css';
import ApplyForm from './ApplyForm';
import {Link} from "react-router-dom";

class JobDesc extends Component {
    render() { 
        console.log(this.props);
        const job = this.props.location.state

        return (
            <div>
            <div className="JobDesc">
                <div className="container">
                    <div className="m-4 JobDesc-title border">
                        <h3 className="p-3 text-center bg-info">{job.jobtitle}</h3>
                    </div>
                    <div className="m-4 JobDesc-body border">
                        <h4 className="text-info m-2">Job Description:</h4>
                        <div className="m-4">
                         <p>{job.Description}</p>
                            <h5 className="text-success">Requirements:</h5>
                            <ul className="m-2">
                                 {job.Requirements.map((req)=><li>{req}</li>)}
                            </ul>
                            <div className="JobDesc-preferences">
                                <h5 className="m-2 text-success JobDesc-preferences">Preferences:</h5>
                                <p className="ml-4">
                                    {job.Preferences}
                                </p>
                            </div>
                            <h5 className="text-success d-inline">Experience Level : </h5><span>9 years</span><br/>
                            <h5 className="text-success d-inline">No of Positions : </h5><span>9 </span><br/>
                            <h5 className="text-success d-inline">Salary : </h5><span>Negotiable</span><br/>
                            <div className="text-right">
                                <Link to={"/career/jobForm"}>
                                <button className="btn btn-success my-4 JobDesc-applynow">Apply Now</button>
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
 
        </div>
            </div>
        );
    }
}
 
export default JobDesc;