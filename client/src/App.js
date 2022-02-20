import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";

import Community from "./components/views/Community";
import AuthDetails from "./components/views/AuthDetails";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Cohorts from "./components/Cohorts";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/cohorts" element={<Cohorts />} />
                    <Route
                        exact
                        path="/cohorts/team-asphalt"
                        element={<Community />}
                    />
                    <Route
                        exact
                        path="/register/details"
                        element={<AuthDetails />}
                    />
                    <Route exact path="/register/signup" element={<SignUp />} />
                    <Route exact path="/register/signin" element={<Login />} />
                </Routes>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
