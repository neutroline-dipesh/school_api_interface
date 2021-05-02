import React, { Component } from "react";
import "./ApplyForm.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import $ from 'jquery';
class ApplyForm extends Component {
  state = {
    careerResume:null,
    careerCoverLetter:null,
  };
  handleFileChange = (e) =>{
    this.setState({
      [e.target.name] : e.target.files[0]
    });
  } 
  render() {
    const initialCareerFormValues = {
      careerFirstName: '',
      careerMiddleName: '',
      careerLastName: '',
      careerGender: '',
      careerPhone: '',
      careerAddress: '',
      careerEmail: '',
      careerExpectedSalary: '',
      careerMessage: ''
    };
    const careerFormSchema = Yup.object().shape({
      careerFirstName: Yup.string().min(2, "Too Short!").required("Required").max(15, "Too Long!"),
      careerMiddleName: Yup.string().min(2, "Too Short!").notRequired().max(15, "Too Long!"),
      careerLastName: Yup.string().min(2, "Too Short!").required("Required").max(15, "Too Long!"),
      careerGender: Yup.string().required('Required!'),
      careerPhone: Yup.string().required('Required!').min(8, "Too Short!").max(15, "Too Long!"),
      careerAddress: Yup.string().required("Required"),
      careerEmail: Yup.string().required("email is required!").email('must be a valid email!'),
      careerExpectedSalary: Yup.number().notRequired(),
      careerMessage: Yup.string().notRequired(),
    });
    return (
      <Formik
        initialValues={initialCareerFormValues}
        validationSchema={careerFormSchema}
      >
        <Form>
          <div className="ApplyForm m-4">
            <div className="container">
              <div className="bg-info ApplyForm-header m-4">
                <h2 className="text-light p-2 text-center">
                  Enter Your Information
            </h2>
              </div>

              <div className="row m-3">
                <div className="col-md mbs">
                  <Field
                    name="careerFirstName"
                    type="text"
                    className="form-control p-4"
                    placeholder="First name"
                    required
                  />
                  <div className="careerErrorMessage">
                    <ErrorMessage name="careerFirstName" />
                  </div>
                </div>
                <div className="col-md">
                  <Field
                    name="careerMiddleName"
                    type="text"
                    className="form-control p-4"
                    placeholder="Middle name"
                  />
                  <div className="careerErrorMessage">
                    <ErrorMessage name="careerMiddleName" />
                  </div>
                </div>
              </div>
              <div className="row m-3">
                <div className="col-md mbs">
                  <Field
                    name="careerLastName"
                    type="text"
                    className="form-control p-4"
                    placeholder="Last name"
                    required
                  />
                  <div className="careerErrorMessage">
                    <ErrorMessage name="careerLastName" />
                  </div>
                </div>
                <div className="col-md">
                  <Field as="select"
                    name="careerGender"
                    className="form-control applyform-gender"
                    id="validationCustom04"
                    required
                  >
                    <option selected disabled value="">
                      Gender
                  </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Field>
                  <div className="careerErrorMessage">
                    <ErrorMessage name="careerGender" />
                  </div>
                </div>
              </div>
              <div className="row m-3">
                <div className="col-md mbs">
                  <Field
                    name="careerPhone"
                    type="text"
                    className="form-control p-4"
                    placeholder="Phone"
                    required
                  />
                  <div className="careerErrorMessage">
                    <ErrorMessage name="careerPhone" />
                  </div>
                </div>
                <div className="col-md">
                  <Field
                    name="careerAddress"
                    type="text"
                    className="form-control p-4"
                    placeholder="Address"
                    required
                  />
                  <div className="careerErrorMessage">
                    <ErrorMessage name="careerAddress" />
                  </div>

                </div>
              </div>
              <div className="row m-3">
                <div className="col-md mbs">
                  <Field
                    name="careerEmail"
                    type="text"
                    className="form-control p-4"
                    placeholder="Email"
                    required
                  />
                  <div className="careerErrorMessage">
                    <ErrorMessage name="careerEmail" />
                  </div>
                </div>
                <div className="col-md">
                  <Field
                    name="careerExpectedSalary"
                    type="text"
                    className="form-control p-4"
                    placeholder="Expected Salary"
                  />
                  <div className="careerErrorMessage">
                    <ErrorMessage name="careerExpectedSalary" />
                  </div>
                </div>
              </div>
              <div className="row m-3">
                <div className="col-md mbs">
                  <Field as="textarea"
                    name="careerMessage"
                    rows="5"
                    className="form-control applyform-message"
                    placeholder="Message"
                  />
                  <div className="careerErrorMessage">
                    <ErrorMessage name="careerMessage" />
                  </div>
                </div>
                <div className="col-md">
                  <div className="m-4">
                    <input type="file" id="ApplyFormResume" className="d-none" name="careerResume" onChange={this.handleFileChange}/>
                    <button className="btn btn-info" 
                    onClick={e => {
                    e.preventDefault();
                    $('#ApplyFormResume').trigger('click');
                    }
                    }>                      
                      Resume/CV
                    </button>
                    <span className="careerFileUpload">{this.state.careerResume == null ? "Select File" : this.state.careerResume.name}</span>
                  </div>
                  <div className="m-4">
                    <input type="file" className="d-none" id="ApplyFormCoverLetter" onChange={this.handleFileChange} name="careerCoverLetter"/>
                    <button className="btn btn-info" 
                     onClick={e => {
                      e.preventDefault();
                      $('#ApplyFormCoverLetter').trigger('click');
                      }
                      }>
                      Cover Letter
                    </button>
                    <span className="careerFileUpload">{this.state.careerCoverLetter == null ? "Select File" : this.state.careerCoverLetter.name}</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-success ApplyForm-submit">
                  Submit
              </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    );
  }
}

export default ApplyForm;
