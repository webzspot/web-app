import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewEmails() {
    const [emailData, setEmailData] = useState([]);

    const fetchEmailData = async () => {
        try {
            const response = await axios.get("https://email-automation-ceyz.onrender.com/save-email");
            // console.log(response)
            setEmailData(response.data.data)
            
        } catch (error) {
            alert("Failed to fetch email data.");
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`https://email-automation-ceyz.onrender.com/save-email/${id}`);
            alert(response.data.message);
            fetchEmailData()
        } catch (error) {
            alert("Failed to delete email.");
        }
    };

    useEffect(() => {
        fetchEmailData();
    }, []);

    return (
        <div className=" mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center mb-6">Stored Emails</h2>
            <div>
                {emailData.map((emailEntry) => (
                    <div
                        key={emailEntry.id}
                        className="lg:flex lg:w-[60%] mx-auto justify-around items-start p-4 bg-gray-50 border border-gray-300 rounded-md mb-4"
                    >
                        <div>
                            <p><strong>Name:</strong> {emailEntry.name}</p>
                            <p><strong>Email:</strong> {emailEntry.email}</p>
                            <p><strong>Phone:</strong> {emailEntry.phoneNumber}</p>
                        </div>
                        <button
                            onClick={() => handleDelete(emailEntry.id)}
                            className="lg:px-6 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
            <Link
                to="/add-email"
                className="inline-block  lg:mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
                Add New Email
            </Link>
        </div>
    );
}

export default ViewEmails;
