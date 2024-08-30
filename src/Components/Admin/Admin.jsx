import React from "react";
import { Link, redirect } from "react-router-dom";
import Sidebar from "./Sidebar";

export async function adminloader() {
  if ("user" in localStorage) {
    const user = JSON.parse(localStorage.getItem("user"));
    const userrole = user.role;
    if (userrole !== "admin") {
      return redirect("/");
    }
  }

  return null;
}

function Admin() {
  return (
    <div>
      <Link to="/admincustomers">Customers</Link>
      <Link to="/addemploye">Add Employe</Link>
    </div>
  );
}

export default Admin;
