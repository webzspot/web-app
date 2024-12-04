import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-center space-x-6 text-white font-bold">
        <li>
          <Link to="/add-email" className="hover:underline">
            Add Email
          </Link>
        </li>
        <li>
          <Link to="/view-emails" className="hover:underline">
            View Emails
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
