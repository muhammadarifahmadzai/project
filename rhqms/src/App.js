import "./App.css";
import {  Route, Routes } from "react-router-dom";
import PatientLoginPage from "./general/login";
import PatientSignupPage from "./general/signup";
import HomePage from "./general/home";
import AboutPage from "./general/about"; 
import FeedbackPage from "./general/feedback";
import Services from "./general/services";

function App() {
  return (
    <div>
      <Services/>
      
      
           {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/login" element={<PatientLoginPage />} />
        <Route path="/signup" element={<PatientSignupPage />} />
      </Routes> */}
    </div>
  );
}

export default App;
