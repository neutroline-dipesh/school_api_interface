import React, { Component } from 'react';
import './OnlineApplication.css';
import Tab from './Tab';
import TabNav from './TabNav';
import $ from 'jquery';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { MdTrendingFlat } from "react-icons/md";
import * as Yup from 'yup';
class OnlineApplication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'Basic Information',
            selectedTranscriptFile: null
        }
    }
    setSelected = (tab) => {
        this.setState({ selected: tab });
    }
    handleTransciptUpload = event => {
        this.setState({
            selectedTranscriptFile: event.target.files[0],
            loaded: 0,
        });
    }
    componentDidMount(){
        this.handleClick = event =>{
            if($('#permanent-add:checkbox:checked').length > 0) {
                $('input[name=perAddline1]').val($('#tempAddline1').val());
                $('input[name="perAddline1"]').attr('disabled', true);
                $('input[name="perAddline2"]').val($('input[name="tempAddline2"]').val());
                $('input[name="perAddline2"]').attr('disabled', true);
                $('input[name="perCity"]').val($('input[name="tempCity"]').val());
                $('input[name="perCity"]').attr('disabled', true);
                $('input[name="perZip"]').val($('input[name="tempZip"]').val());
                $('input[name="perZip"]').attr('disabled', true);
                $('input[name="perState"]').val($('input[name="tempState"]').find(":selected").text());
                $('input[name="perState"]').attr('disabled', true);
            }
            else {
                $('input[name="perAddline1"]').val('');
                $('input[name="perAddline1"]').attr('disabled', false);
                $('input[name="perAddline2"]').val('');
                $('input[name="perAddline2"]').attr('disabled', false);
                $('input[name="perCity"]').val('');
                $('input[name="perCity"]').attr('disabled', false);
                $('input[name="perZip"]').val('');
                $('input[name="perZip"]').attr('disabled', false);
                $('input[name="perState"]').val('');
                $('input[name="perState"]').attr('disabled', false);
            }
        }

        // this.fatherGuardian = event => {
        //     $('input[name="gnFn"]').val($('input[name="fFn"]').val());
        //     $('input[name="gnMn"]').val($('input[name="fMn"]').val());
        //     $('input[name="gnLn"]').val($('input[name="fMn"]').val());
        // }
    }
    

    render() {
        const OnlineApplicationSchema = Yup.object().shape({
            inputfname: Yup.string().min(2, "Too Short!").required("Required"),
            inputmname: Yup.string().notRequired().min(2, "Too Short!"),
            inputlname: Yup.string().min(2, "Too Short!").required("Required"),
            OADOB: Yup.date().required("Required!"),
            nationality: Yup.string().required("Required"),
            motherTongue: Yup.string().required("Required"),
            extraInfo: Yup.string().notRequired(),
            oaPhone: Yup.string().required("Required!"),
            oaMobile: Yup.string().required("Required!"),
            oaEmail: Yup.string().email('must be a valid email!').required("This field can't be empyt!"),
            oaFax: Yup.string().required('Required!'),
            tempAddline1: Yup.string().required('Required!'),
            tempAddline2: Yup.string().notRequired(),
            tempDistrict: Yup.string().required('Required!'),
            tempState: Yup.string().required('Required!'),
            tempCity: Yup.string().required('Required!'),
            tempZip: Yup.string().required('Required!'),
            perAddline1: Yup.string().required('Required!'),
            perAddline2: Yup.string().notRequired(),
            perDistrict: Yup.string().required('Required!'),
            perState: Yup.string().required('Required!'),
            perCity: Yup.string().required('Required!'),
            perZip: Yup.string().required('Required!'),
            // fFn: Yup.string().min(2, "Too Short!").required("Required"),
            // fMn: Yup.string().notRequired().min(2, "Too Short!"),
            // fLn: Yup.string().min(2, "Too Short!").required("Required"),
            // fEl: Yup.string().notRequired(),
            // fOc: Yup.string().notRequired(),
            // fMn1: Yup.string().required('Required!'),
            // fM1: Yup.string().notRequired(),
            // fEmail: Yup.string().email('must be a valid email!').notRequired(),
            // mMn: Yup.string().notRequired().min(2, "Too Short!"),
            // mLn: Yup.string().min(2, "Too Short!").required("Required"),
            // mEl: Yup.string().notRequired(),
            // mOc: Yup.string().notRequired(),
            // mMn1: Yup.string().required('Required!'),
            // mM1: Yup.string().notRequired(),
            // mEmail: Yup.string().email('must be a valid email!').notRequired(),
            gnMn: Yup.string().notRequired().min(2, "Too Short!"),
            gnLn: Yup.string().min(2, "Too Short!").required("Required"),
            gnEl: Yup.string().notRequired(),
            gnOc: Yup.string().notRequired(),
            gnMn1: Yup.string().required('Required!'),
            gnM1: Yup.string().notRequired(),
            gnEmail: Yup.string().email('must be a valid email!').notRequired()
        });
        return (
            <Formik
                initialValues={{
                    inputBatch: '', inputStatus: '',
                    inputfname: '', inputmname: '',
                    inputlname: '', nationality: '',
                    motherTongue: '', OADOB: '', inputGender: '',
                    inputBG: '', extraInfo: '', oaPhone: '',
                    oaMobile: '', oaEmail: '', oaFax: '',
                    tempAddline1: '', tempAddline2: '', tempState: '',
                    tempDistrict: '', tempCity: '', tempZip: '',
                    perAddline1: '', perAddline2: '', perState: '',
                    perDistrict: '', perCity: '', perZip: '',
                    // fFn: '', fMn: '', fLn: '', fEl: '', fOc: '',
                    // fMn1: '', fMn2: '', fEmail: '',
                    // mFn: '', mMn: '', mLn: '', mEl: '',
                    // mOc: '', mMn1: '', mMn2: '', mEmail: '',
                    gnFn: '', gnMn: '', gnLn: '', gnEl: '',
                    gnOc: '', gnMn1: '', gnMn2: '', gnEmail: ''
                }}

                validationSchema={OnlineApplicationSchema}
            >
                <Form>
                    <div className="OnlineApplication mt-4">
                        <div className="container">
                            <TabNav tabs={['Basic Information', 'Contact', 'Address', `Guardian's detail`, `Documents`]} selected={this.state.selected} setSelected={this.setSelected}>
                                <Tab isSelected={this.state.selected === 'Basic Information'}>
                                    <div class="table-responsive-md">
                                        <table className="table table-borderless">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="" className="label-control">Batch</label>
                                                    </td>
                                                    <td>
                                                        <Field name="inputBatch" as="select" className="form-control">
                                                            <option>Select Batch</option>
                                                            <option>...</option>
                                                        </Field>
                                                        <div className="errorMessage">
                                                            <ErrorMessage name="inputBatch" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <label htmlFor="inputStatus" className="label-control">Status</label>
                                                    </td>
                                                    <td>
                                                        <Field name="inputStatus" as="select" className="form-control">
                                                            <option>Select Status</option>
                                                            <option>...</option>
                                                        </Field>
                                                        <div className="errorMessage">
                                                            <ErrorMessage name="inputStatus" />
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <label className="label-control">Name of Student</label>
                                                    </td>
                                                    <td>
                                                        <Field className="form-control" name="inputfname" placeholder="First Name" required />
                                                        <div className="errorMessage">
                                                            <ErrorMessage name="inputfname" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <Field className="form-control" name="inputmname" placeholder="Middle Name" />
                                                        <div className="errorMessage">
                                                            <ErrorMessage name="inputmname" />
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <Field className="form-control" name="inputlname" placeholder="Last Name" />
                                                        <div className="errorMessage">
                                                            <ErrorMessage name="inputlname" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><label className="label-control">Date of birth</label></td>
                                                    <td>
                                                        <Field name="OADOB" className="form-control" placeholder="Date Of Birth" />
                                                        <div className="errorMessage">
                                                            <ErrorMessage name="OADOB" />
                                                        </div>
                                                    </td>
                                                    <td><label className="label-control">Gender</label></td>
                                                    <td>
                                                        <Field name="inputGender" as="select" className="form-control">
                                                            <option>Select Gender...</option>
                                                            <option>Male</option>
                                                            <option>Female</option>
                                                            <option>Other</option>
                                                        </Field>
                                                        <div className="errorMessage">
                                                            <ErrorMessage name="inputGender" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><label className="label-control">Nationality</label></td>
                                                    <td>
                                                        <Field name="nationality" className="form-control" placeholder="Nationality" />
                                                        <div className="errorMessage">
                                                            <ErrorMessage name="nationality" />
                                                        </div>
                                                    </td>

                                                    <td><label className="label-control">Mother Tongue</label></td>
                                                    <td>
                                                        <Field name="motherTongue" className="form-control" placeholder="Mother Tongue" />
                                                        <div className="errorMessage">
                                                            <ErrorMessage name="motherTongue" />
                                                        </div>
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="label-control">Blood Group</label>
                                                    </td>
                                                    <td>
                                                        <Field name="inputBG" as="select" className="form-control">
                                                            <option>Blood Group...</option>
                                                            <option>O+ve</option>
                                                            <option>A+ve</option>
                                                            <option>B+ve</option>
                                                            <option>AB+ve</option>

                                                            <option>O-ve</option>
                                                            <option>A-ve</option>
                                                            <option>B-ve</option>
                                                            <option>AB-ve</option>
                                                        </Field>
                                                        <div className="errorMessage">
                                                            <ErrorMessage name="inputBG" />
                                                        </div>
                                                    </td>
                                                    <td><label className="label-control">Extra Info</label></td>
                                                    <td>
                                                        <Field as="textfield" name="extraInfo" className="form-control oa-extrainfo" placeholder="Extra Info" />
                                                        <div className="errorMessage">
                                                            <ErrorMessage name="extraInfo" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-right" colSpan="4">
                                                        <button className="btn btn-success btn-next" onClick={(e) => {
                                                            e.preventDefault();
                                                            this.setState({ selected: 'Contact' });
                                                        }}><MdTrendingFlat /></button>
                                                    </td>
                                                </tr>
                                            </tbody>

                                        </table>
                                    </div>

                                </Tab>
                                <Tab isSelected={this.state.selected === 'Contact'}>
                                    <div className="container">
                                        <table className="table table-borderless">
                                            <tbody>
                                                <tr>
                                                    <td><label className="label-control">Phone</label></td>
                                                    <td>
                                                        <Field name="oaPhone" className="form-control" placeholder="Phone" />
                                                        <div className="errorMessage">
                                                            <ErrorMessage name="oaPhone" />
                                                        </div>
                                                    </td>
                                                    <td><label className="label-control">Mobile</label></td>
                                                    <td>
                                                        <Field name="oaMobile" className="form-control" placeholder="Mobile" />
                                                        <div className="errorMessage">
                                                            <ErrorMessage name="oaMobile" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><label className="label-control">Email</label></td>
                                                    <td>
                                                        <Field name="oaEmail" className="form-control" placeholder="Email" />
                                                        <div className="errorMessage">
                                                            <ErrorMessage name="oaEmail" />
                                                        </div>
                                                    </td>
                                                    <td><label className="label-control">Fax</label></td>
                                                    <td>
                                                        <Field name="oaFax" className="form-control" placeholder="Fax" />
                                                        <div className="errorMessage">
                                                            <ErrorMessage name="oaFax" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-right" colSpan="4">
                                                        <button className="btn btn-success btn-next" onClick={(e) => {
                                                            e.preventDefault();
                                                            this.setState({ selected: 'Address' });
                                                        }}><MdTrendingFlat /></button>
                                                    </td>
                                                </tr>

                                            </tbody>

                                        </table>
                                    </div>
                                </Tab>

                                <Tab isSelected={this.state.selected === 'Address'}>
                                    <p className="h5">Temporary Address</p>
                                    <hr />
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td><label className="label-control">Address Line 1</label></td>
                                                <td colSpan="3">
                                                    <Field name="tempAddline1" placeholder="Address Line 1" className="form-control" id="tempAddline1" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="tempAddline1" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label className="label-control">Address Line 2</label></td>
                                                <td colSpan="3">
                                                    <Field name="tempAddline2" placeholder="Address Line 2" className="form-control" id="tempAddline2" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="tempAddline2" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label className="label-control">State/Province</label></td>
                                                <td>
                                                    <Field name="tempState" as="select" className="form-control" id="tempState">
                                                        <option selected>Select State...</option>
                                                        <option>...</option>
                                                    </Field>
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="tempState" />
                                                    </div></td
                                                >
                                                <td><label className="label-control">District</label></td>
                                                <td>
                                                    <Field name="tempDistrict" as="select" className="form-control" id="temp-district">
                                                        <option>Select District...</option>
                                                        <option>...</option>
                                                    </Field>
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="tempDistrict" />
                                                    </div></td
                                                >
                                            </tr>
                                            <tr>
                                                <td><label className="label-control">City</label></td>
                                                <td>
                                                    <Field name="tempCity" className="form-control" placeholder="City" id="tempCity" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="tempCity" />
                                                    </div>
                                                </td>
                                                <td><label className="label-control">Postal/Zip Code</label></td>
                                                <td>
                                                    <Field name="tempZip" className="form-control" placeholder="Zip Code" id="tempZip" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="tempZip" />
                                                    </div>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                    <hr />
                                    <p className="h4">Permanent Address</p>
                                    <hr />
                                    <input type="checkbox" name="perAdd" id="permanent-add" className="permanent-add" onClick={this.handleClick}/>                                       
                                    <label className="m-3">Same as Temporary Address</label>
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td><label className="label-control">Address Line 1</label></td>
                                                <td colSpan="3">
                                                    <Field placeholder="Address Line 1" className="form-control" name="perAddline1" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="perAddline1" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label className="label-control">Address Line 2</label></td>
                                                <td colSpan="3">
                                                    <Field placeholder="Address Line 2" className="form-control" name="perAddline2" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="perAddline2" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label className="label-control">State/Province</label></td>
                                                <td>
                                                    <Field name="perState" as="select" className="form-control">
                                                        <option selected>Select State...</option>
                                                        <option>...</option>
                                                    </Field>
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="perState" />
                                                    </div></td
                                                >
                                                <td><label className="label-control">District</label></td>
                                                <td>
                                                    <Field name="perDistrict" as="select" className="form-control">
                                                        <option selected>Select District...</option>
                                                        <option>...</option>
                                                    </Field>
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="perDistrict" />
                                                    </div></td
                                                >
                                            </tr>
                                            <tr>
                                                <td><label className="label-control">City</label></td>
                                                <td>
                                                    <Field className="form-control" placeholder="City" name="perCity" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="perCity" />
                                                    </div>
                                                </td>
                                                <td><label className="label-control">Postal/Zip Code</label></td>
                                                <td>
                                                    <Field className="form-control" placeholder="Zip Code" name="perZip" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="perZip" />
                                                    </div>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td className="text-right" colSpan="4">
                                                    <button className="btn btn-success btn-next" onClick={(e) => {
                                                        e.preventDefault();
                                                        this.setState({ selected: `Guardian's detail` });
                                                    }}><MdTrendingFlat /></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Tab>
                                {/* <Tab isSelected={this.state.selected === `Father's detail`}>
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td><label className="label-control">Name of Father</label></td>
                                                <td>
                                                    <Field className="form-control" placeholder="First Name" name="fFn" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="fFn" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <Field className="form-control" placeholder="Middle Name" name="fMn" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="fMn" />
                                                    </div>
                                                </td>
                                                <td>

                                                    <Field className="form-control" placeholder="Last Name" name="fLn" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="fLn" />
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td><label className="label-control">Eligibility</label></td>
                                                <td>
                                                    <Field className="form-control" placeholder="Eligibility" name="fEl" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="fEl" />
                                                    </div>
                                                </td>
                                                <td><label className="label-control">Occupation</label></td>
                                                <td>
                                                    <Field className="form-control" placeholder="Occupation" name="fOc" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="fOc" />
                                                    </div>
                                                </td>

                                            </tr>

                                            <tr>
                                                <td><label className="label-control">Mobile 1</label></td>
                                                <td>
                                                    <Field className="form-control" placeholder="Mobile Number" name="fMn1" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="fMn1" />
                                                    </div>
                                                </td>
                                                <td><label className="label-control">Mobile 2</label></td>
                                                <td>
                                                    <Field className="form-control" placeholder="Mobile Number" name="fMn2" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="fMn2" />
                                                    </div>
                                                </td>

                                            </tr>

                                            <tr>
                                                <td><label className="label-control">Email</label></td>
                                                <td>
                                                    <Field className="form-control" placeholder="Email" name="fEmail" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="fEmail" />
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="text-right" colSpan="4">
                                                    <button className="btn btn-success btn-next" onClick={(e) => {
                                                        e.preventDefault();
                                                        this.setState({ selected: `Mother's detail` });
                                                    }}><MdTrendingFlat /></button>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>

                                </Tab> */}
                                {/* <Tab isSelected={this.state.selected === `Mother's detail`}>
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td><label className="label-control">Name of Mother</label></td>
                                                <td>
                                                    <Field className="form-control" placeholder="First Name" name="mFn" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="mFn" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <Field className="form-control" placeholder="Middle Name" name="mMn" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="mMn" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <Field className="form-control" placeholder="Last Name" name="mLn" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="mLn" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label className="label-control">Eligibility</label></td>
                                                <td>
                                                    <Field className="form-control" placeholder="Eligibility" name="mEl" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="mEl" />
                                                    </div>
                                                </td>
                                                <td><label className="label-control">Occupation</label></td>
                                                <td>
                                                    <Field className="form-control" placeholder="Occupation" name="mOc" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="mOc" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label className="label-control">Mobile 1</label></td>
                                                <td>
                                                    <Field className="form-control" placeholder="Mobile Number" name="mMn1" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="mMn1" />
                                                    </div>
                                                </td>
                                                <td><label className="label-control">Mobile 2</label></td>
                                                <td>
                                                    <Field className="form-control" placeholder="Mobile Number" name="mMn2" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="mMn2" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label className="label-control">Email</label></td>
                                                <td>
                                                    <Field className="form-control" placeholder="Email" name="mEmail" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="mEmail" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-right" colSpan="4">
                                                    <button className="btn btn-success btn-next" onClick={(e) => {
                                                        e.preventDefault();
                                                        this.setState({ selected: `Guardian's detail` });
                                                    }}><MdTrendingFlat /></button>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </Tab> */}
                                <Tab isSelected={this.state.selected === `Guardian's detail`}>
                                    <input type="radio" value="Father" name="guardian"
                                        onClick={()=>{
                                            console.log('father')
                                        }} />
                                    <label className="m-2">Father is Guardian</label>
                                    <input type="radio" value="Mother" name="guardian" /> <label className="m-2">Mother is Guardian</label>
                                    <input type="radio" value="Others" name="guardian" /> <label className="m-2">Others</label>
                                    <table className="table table-borderless">
                                        <thead>
                                            <tr>
                                                <td><label className="label-control">Name of Guardian</label></td>
                                                <td className="m-4">
                                                    <Field className="form-control" placeholder="First Name" name="gnFn" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="gnFn" />
                                                    </div>
                                                </td>
                                                <td className="m-4">
                                                    <Field className="form-control" placeholder="Middle Name" name="gnMn" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="fnMn" />
                                                    </div>
                                                </td>
                                                <td className="m-4">
                                                    <Field className="form-control" placeholder="Last Name" name="gnLn" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="gnLn" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label className="label-control">Eligibility</label></td>
                                                <td>
                                                    <Field className="form-control" placeholder="Eligibility" name="gnEl" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="gnEl" />
                                                    </div>
                                                </td>
                                                <td><label className="label-control">Occupation</label></td>
                                                <td>
                                                    <Field className="form-control" placeholder="Occupation" name="gnOc" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="gnOc" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label className="label-control">Mobile 1</label></td>
                                                <td>
                                                    <Field className="form-control" placeholder="Mobile Number" name="gnMn1" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="gnMn1" />
                                                    </div></td
                                                >
                                                <td><label className="label-control">Mobile 2</label></td>
                                                <td>
                                                    <Field className="form-control" placeholder="Mobile Number" name="gnMn2" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="gnMn2" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><label className="label-control">Email</label></td>
                                                <td>
                                                    <Field className="form-control" placeholder="Email" name="gnEmail" />
                                                    <div className="errorMessage">
                                                        <ErrorMessage name="gnEmail" />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-right" colSpan="4">
                                                    <button className="btn btn-success btn-next" onClick={(e) => {
                                                        e.preventDefault();
                                                        this.setState({ selected: `Documents` });
                                                    }}><MdTrendingFlat /></button>
                                                </td>
                                            </tr>
                                        </thead>

                                    </table>
                                </Tab>
                                <Tab isSelected={this.state.selected === `Documents`}>
                                    <p>Upload your Transcript here</p>
                                    <input type="checkbox" value="notAvailable" name="document" onClick={
                                        () => {
                                            if($('input[name="document"]:checkbox:checked').length > 0){
                                                $('#transcriptfile').prop('disabled', true);
                                                this.setState({
                                                    selectedTranscriptFile:null,
                                                });
                                            }else{
                                                $('#transcriptfile').prop('disabled', false);
                                            } 
                                        }
                                    } /> <label className="m-2">Not Available</label>

                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroupFileAddontranscript">
                                                Upload
                                    </span>
                                        </div>
                                        <div className="custom-file">
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                id="transcriptfile"
                                                name="transciptfile"
                                                aria-describedby="inputGroupFileAddontranscript"
                                                onChange={this.handleTransciptUpload}

                                            />
                                            <label className="custom-file-label" htmlFor="transcriptfile">
                                                {this.state.selectedTranscriptFile == null ? 'Choose file' : this.state.selectedTranscriptFile.name}
                                            </label>
                                        </div>
                                    </div>
                                    <div className="text-right m-4">
                                        <button className="btn btn-success m-4">Submit</button>
                                    </div>
                                </Tab>
                            </TabNav>
                        </div>
                    </div >
                </Form>
            </Formik>
        );
    }
}
export default OnlineApplication;
