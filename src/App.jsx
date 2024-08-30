import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Authencation/Login";
import Signup from "./Components/Authencation/Signup";
import Sales from "./Components/Sales";
import Overview from "./Components/Overview";
import Payment from "./Components/Payment";
import Products from "./Components/Product";
import Error from "./Components/Error";
import FeatureSection from "./Components/Header/Feature";
import ForgootenPassword from "./Components/Authencation/ForgootenPassword";
import AuthContextProvider from "./Context/AuthContextprovider";
import Setting from "./Profile/Setting";
import UpdateProfile from "./Profile/UpdateProfile";
import ChangePassword from "./Profile/ChangePassword";
import Admin, { adminloader } from "./Components/Admin/Admin";
import Customers from "./Components/Admin/Customers";
import AddEmploye from "./Components/Admin/AddEmploye";
import Employe, { employeeloader } from "./Components/Admin/Employee/Employe";
import ResetPassword from "./Components/Authencation/ResetPassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Sales" element={<Sales />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/products" element={<Products />} />
      <Route path="/featuresection" element={<FeatureSection />} />
      <Route path="/forgottenpassword" element={<ForgootenPassword />} />
      <Route path="/password-reset/:id/:token" element={<ResetPassword />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/update-profile" element={<UpdateProfile />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/admin" element={<Admin />} loader={adminloader} />
      <Route path="admincustomers" element={<Customers />} />
      <Route path="/addemploye" element={<AddEmploye />} />
      <Route path="/employee" element={<Employe />} loader={employeeloader} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <AuthContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
