// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Customers() {
//   const [userdata, setuserdata] = useState([]);
//   const [adminUsers, setAdminUsers] = useState([]);
//   const [managerUsers, setManagerUsers] = useState([]);
//   const [userUsers, setUserUsers] = useState([]);

//   const fetchallusers = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:8082/api/v1/user/customers",
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const userdetails = response.data;
//       setuserdata(userdetails);

//       const adminUsersData = userdetails.filter(
//         (user) => user.role === "admin"
//       );
//       setAdminUsers(adminUsersData);

//       const managerUsersData = userdetails.filter(
//         (user) => user.role === "manager"
//       );
//       setManagerUsers(managerUsersData);

//       const userUsersData = userdetails.filter((user) => user.role === "user");
//       setUserUsers(userUsersData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchallusers();
//   }, []);

//   return (
//     <div className="container">
//       <div className="table-responsive">
//         <h1>Admins</h1>
//         <table className="table table-hover">
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Role</th>
//               <th>Username</th>
//             </tr>
//           </thead>
//           <tbody>
//             {adminUsers.map((user) => (
//               <tr key={user._id}>
//                 <td>{user.firstname}</td>
//                 <td>{user.lastname}</td>
//                 <td>{user.email}</td>
//                 <td>{user.phone}</td>
//                 <td>{user.role}</td>
//                 <td>{user.username}</td>
//               </tr>
//             ))}
//           </tbody>
//           <h1>Manager</h1>
//         </table>
//         <table className="table table-hover">
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Role</th>
//               <th>Username</th>
//             </tr>
//           </thead>
//           <tbody>
//             {managerUsers.map((user) => (
//               <tr key={user._id}>
//                 <td>{user.firstname}</td>
//                 <td>{user.lastname}</td>
//                 <td>{user.email}</td>
//                 <td>{user.phone}</td>
//                 <td>{user.role}</td>
//                 <td>{user.username}</td>
//               </tr>
//             ))}
//           </tbody>
//           <h1>Users</h1>
//         </table>
//         <table className="table table-hover">
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Role</th>
//               <th>Username</th>
//             </tr>
//           </thead>
//           <tbody>
//             {userUsers.map((user) => (
//               <tr key={user._id}>
//                 <td>{user.firstname}</td>
//                 <td>{user.lastname}</td>
//                 <td>{user.email}</td>
//                 <td>{user.phone}</td>
//                 <td>{user.role}</td>
//                 <td>{user.username}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Customers;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Customers.css"; // Import your custom CSS file

// function Customers() {
//   const [userdata, setuserdata] = useState([]);
//   const [adminUsers, setAdminUsers] = useState([]);
//   const [managerUsers, setManagerUsers] = useState([]);
//   const [userUsers, setUserUsers] = useState([]);

//   const fetchallusers = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:8082/api/v1/user/customers",
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const userdetails = response.data;
//       setuserdata(userdetails);

//       const adminUsersData = userdetails.filter(
//         (user) => user.role === "admin"
//       );
//       setAdminUsers(adminUsersData);

//       const managerUsersData = userdetails.filter(
//         (user) => user.role === "manager"
//       );
//       setManagerUsers(managerUsersData);

//       const userUsersData = userdetails.filter((user) => user.role === "user");
//       setUserUsers(userUsersData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchallusers();
//   }, []);

//   return (
//     <div className="container mt-5">
//       <div className="card shadow-lg p-4 mb-4 bg-white rounded">
//         <h1 className="text-center text-primary mb-4">Admins</h1>
//         <div className="table-responsive">
//           <table className="table table-hover table-bordered">
//             <thead className="thead-dark">
//               <tr>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Role</th>
//                 <th>Username</th>
//               </tr>
//             </thead>
//             <tbody>
//               {adminUsers.map((user) => (
//                 <tr key={user._id}>
//                   <td>{user.firstname}</td>
//                   <td>{user.lastname}</td>
//                   <td>{user.email}</td>
//                   <td>{user.phone}</td>
//                   <td>{user.role}</td>
//                   <td>{user.username}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="card shadow-lg p-4 mb-4 bg-white rounded">
//         <h1 className="text-center text-primary mb-4">Managers</h1>
//         <div className="table-responsive">
//           <table className="table table-hover table-bordered">
//             <thead className="thead-dark">
//               <tr>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Role</th>
//                 <th>Username</th>
//               </tr>
//             </thead>
//             <tbody>
//               {managerUsers.map((user) => (
//                 <tr key={user._id}>
//                   <td>{user.firstname}</td>
//                   <td>{user.lastname}</td>
//                   <td>{user.email}</td>
//                   <td>{user.phone}</td>
//                   <td>{user.role}</td>
//                   <td>{user.username}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="card shadow-lg p-4 mb-4 bg-white rounded">
//         <h1 className="text-center text-primary mb-4">Users</h1>
//         <div className="table-responsive">
//           <table className="table table-hover table-bordered">
//             <thead className="thead-dark">
//               <tr>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Role</th>
//                 <th>Username</th>
//               </tr>
//             </thead>
//             <tbody>
//               {userUsers.map((user) => (
//                 <tr key={user._id}>
//                   <td>{user.firstname}</td>
//                   <td>{user.lastname}</td>
//                   <td>{user.email}</td>
//                   <td>{user.phone}</td>
//                   <td>{user.role}</td>
//                   <td>{user.username}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Customers;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Customers.css"; // Import your custom CSS file

function Customers() {
  const [userdata, setuserdata] = useState([]);
  const [adminUsers, setAdminUsers] = useState([]);
  const [managerUsers, setManagerUsers] = useState([]);
  const [userUsers, setUserUsers] = useState([]);

  const fetchallusers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8082/api/v1/user/customers",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const userdetails = response.data;
      console.log(userdetails);
      setuserdata(userdetails);

      const adminUsersData = userdetails.filter(
        (user) => user.role === "admin"
      );
      setAdminUsers(adminUsersData);

      const managerUsersData = userdetails.filter(
        (user) => user.role === "manager"
      );
      setManagerUsers(managerUsersData);

      const userUsersData = userdetails.filter((user) => user.role === "user");
      setUserUsers(userUsersData);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const deleteuser = await axios.delete(
        `http://localhost:8082/api/v1/user/customers/${id}`
      );
      console.log(deleteuser);
      fetchallusers(); // Refresh the user list after deletion
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchallusers();
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 mb-4 bg-white rounded">
        <h1 className="text-center text-primary mb-4">Admins</h1>
        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {adminUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role}</td>
                  <td>{user.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card shadow-lg p-4 mb-4 bg-white rounded">
        <h1 className="text-center text-primary mb-4">Managers</h1>
        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Username</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {managerUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role}</td>
                  <td>{user.username}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card shadow-lg p-4 mb-4 bg-white rounded">
        <h1 className="text-center text-primary mb-4">Users</h1>
        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Username</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role}</td>
                  <td>{user.username}</td>

                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Customers;
