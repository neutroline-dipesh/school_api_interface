import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Tabs/Home";
import SchoolLogin from "./components/Header/SchoolLogin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/Tabs/AboutUs";
import StudentLogin from "./components/StudentPortal/StudentLogin";
import Career from "./components/Career/Career";
import ContactUs from "./components/ContactFormContainer/contactForm";
import OurStaffs from "./components/Tabs/OurStaffs";
import { ProgramsAndAd } from "./components/ProgramsAndAdmissions/ProgramsAndAd";
import Album from "./components/Gallery/Album";
import OnlineAdmission from "./components/ProgramsAndAdmissions/OnlineAdmission";
import OnlineApplication from "./components/ProgramsAndAdmissions/OnlineApplication/OnlineApplication";
import AdmissionProcedure from "./components/ProgramsAndAdmissions/AdmissionProcedure";
import Science from "./components/ProgramsAndAdmissions/Science";
import Management from "./components/ProgramsAndAdmissions/Management";
import NewsEvents from "./components/NewsAndEvents/NewsEvents";
import SchoolHeader from "./components/Header/SchoolHeader";
import NewsPage from "./components/NewsAndEvents/NewsPage";
import OnlineClass from "./components/OnlineClass/OnlineClass";
import MiddleSchoolLevel from "./components/ProgramsAndAdmissions/MiddleSchoolLevel";
import HighSchoolLevel from "./components/ProgramsAndAdmissions/HighSchoolLevel";
import PreSchoolLevel from "./components/ProgramsAndAdmissions/PreSchoolLevel";
import ElementaryLevel from "./components/ProgramsAndAdmissions/ElementaryLevel";
import ScholarshipInfo from "./components/ProgramsAndAdmissions/ScholarshipInfo";
import Formalities from "./components/ProgramsAndAdmissions/Formalities";
import GalleryPhotos from "./components/Gallery/GalleryPhotos";
import OurVision from "./components/OurVision/OurVision";
import FounderMessage from "./components/FounderMessage/FounderMessage";
import Staff from "./components/Faculties/Staff";
import History from "./components/SchoolHistory/History";
import Blog from "./components/blogContainer/Blog.js";
// import FooterHead from "./components/footer/FooterHead";
import ApplyForm from "./components/Career/ApplyForm";
import JobDesc from "./components/Career/JobDesc";
import FooterHead from "./components/NewFooter/FooterHead";
import Footer from "./components/NewFooter/Footer";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <SchoolHeader />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/schoolLogin" component={SchoolLogin} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/founderMessage" component={FounderMessage} />
          <Route path="/vision" component={OurVision} />
          <Route path="/faculties" component={Staff} />
          <Route path="/history" component={History} />
          <Route path="/programsAndAdmissions" component={ProgramsAndAd} />
          <Route path="/OnlineAdmission" component={OnlineAdmission} />
          <Route path="/onlineApplication" component={OnlineApplication} />
          <Route path="/AdmissionProcedure" component={AdmissionProcedure} />
          <Route path="/Science" component={Science} />
          <Route path="/Management" component={Management} />
          <Route path="/newsPage" component={NewsPage} />
          <Route path="/ElementarySchool" component={ElementaryLevel} />
          <Route path="/MiddleSchool" component={MiddleSchoolLevel} />
          <Route path="/HighSchool" component={HighSchoolLevel} />
          <Route path="/PreSchool" component={PreSchoolLevel} />
          <Route path="/scholarships" component={ScholarshipInfo} />
          <Route path="/formalities" component={Formalities} />
          <Route path="/newsAndEvents" component={NewsEvents} />
          <Route path="/onlineClass" component={OnlineClass} />
          <Route path="/ourStaffs" component={OurStaffs} />
          <Route path="/gallery" exact component={Album} />
          <Route path="/gallery/photos" component={GalleryPhotos} />
          <Route path="/blogs" component={Blog} />
          <Route path="/career" exact component={Career} />
          <Route path="/career/jobDesc" component={JobDesc}/>
          <Route path="/career/jobForm" component={ApplyForm}/>
          <Route path="/studentPortal" component={StudentLogin} />
          <Route path="/contactUs" component={ContactUs} />
        </Switch>
        <FooterHead />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
