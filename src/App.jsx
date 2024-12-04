import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AddEmail from "./AddEmail";
import ViewEmails from "./ViewEmail";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="">
                <Routes>
                    <Route path="/add-email" element={<AddEmail />} />
                    <Route path="/view-emails" element={<ViewEmails />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
