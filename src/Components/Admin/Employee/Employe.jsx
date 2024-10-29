// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Employe() {
//   const [normalusers, setnormalusers] = useState();
//   const fetchallusers = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:8082/api/v1/user/getroleusers",
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const userdetails = response.data;
//       console.log(userdetails);
//       setnormalusers(userdetails);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     fetchallusers();
//   }, []);
//   return (
//     <div>
//       <h1>All Users</h1>
//       {normalusers &&
//         normalusers.map((user) => {
//           return (
//             <div key={user._id}>
//               <h1>{user.firstname}</h1>
//               <h1>{user.lastname}</h1>
//               <h1>{user.email}</h1>
//               <h1>{user.username}</h1>
//               <h1>{user.phone}</h1>
//             </div>
//           );
//         })}
//     </div>
//   );
// }

// export default Employe;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { redirect } from "react-router-dom";
export async function employeeloader() {
  if ("user" in localStorage) {
    const user = JSON.parse(localStorage.getItem("user"));
    const userrole = user.role;
    // if (userrole !== "manager") {
    //   return redirect("/");
    // }
    if (userrole === "manager" || userrole === "admin") {
      return null;
    }
  }

  return null;
}

function Employe() {
  const [normalusers, setnormalusers] = useState([]);

  const fetchallusers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8082/api/v1/user/getroleusers",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const userdetails = response.data;
      console.log(userdetails);
      setnormalusers(userdetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchallusers();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">All Users</h1>
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {normalusers.length > 0 ? (
              normalusers.map((user) => (
                <tr key={user._id}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.phone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No Users Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employe;
