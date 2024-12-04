import React, { useState } from "react";
import axios from "axios";

function AddEmail() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newEmailData = { name, email, phoneNumber };

        try {
            const response = await axios.post("https://email-automation-ceyz.onrender.com/save-email", newEmailData);
            alert(response.data.message);
            setName('')
            setEmail('')
            setPhoneNumber('')
        } catch (error) {
            alert("Failed to save email.");
        }
    };

    return (
        <div className=" bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-center mb-6">Add Email Data</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white rounded-md"
                >
                    Save Email
                </button>
            </form>
        </div>
    );
}

export default AddEmail;
