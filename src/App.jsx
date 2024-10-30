// // import React from "react";

// // import {
// //   createBrowserRouter,
// //   createRoutesFromElements,
// //   Route,
// //   RouterProvider,
// // } from "react-router-dom";
// // import Navbar from "./Navbar/Navbar";
// // import Home from "./Components/Home";
// // import Login, { loginloader } from "./Components/Authencation/Login";
// // import Signup, { signuploader } from "./Components/Authencation/Signup";
// // import Sales from "./Components/Sales";
// // import Overview from "./Components/Overview";
// // import Payment from "./Components/Payment";
// // import Products from "./Components/Product";
// // import Error from "./Components/Error";
// // import FeatureSection from "./Components/Header/Feature";
// // import ForgootenPassword from "./Components/Authencation/ForgootenPassword";
// // import AuthContextProvider from "./Context/AuthContextprovider";
// // import Setting from "./Profile/Setting";
// // import UpdateProfile from "./Profile/UpdateProfile";
// // import ChangePassword from "./Profile/ChangePassword";
// // import Admin, { adminloader } from "./Components/Admin/Admin";
// // import Customers from "./Components/Admin/Customers";
// // import AddEmploye from "./Components/Admin/AddEmploye";
// // import Employe, { employeeloader } from "./Components/Admin/Employee/Employe";
// // import ResetPassword from "./Components/Authencation/ResetPassword";
// // import ContactPage from "./Components/Contact";
// // import UserLoginInfo from "./Components/Admin/UserLoginInfo";
// // import { ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import AdminNavbar from "./Admin/components/Navbar";
// // import { MdHeight } from "react-icons/md";
// // import Footer from "./Components/BottomPages/Footer";
// // import Paymentsucess from "./Payments/Paymentsucess";
// // import Prepaymentpage, {
// //   PrepaymentPageloader,
// // } from "./Payments/Prepaymentpage";
// // import PaymentPage, { paymentpageloader } from "./Payments/PaymentPage";

// // const router = createBrowserRouter(
// //   createRoutesFromElements(
// //     <Route path="/" element={path != "/admin/*" && <Navbar />}>
// //       <Route index element={<Home />} />
// //       <Route path="/login" element={<Login />} loader={loginloader} />
// //       <Route path="/signup" element={<Signup />} loader={signuploader} />
// //       <Route path="/Sales" element={<Sales />} />
// //       <Route path="/overview" element={<Overview />} />
// //       <Route path="/payment" element={<Payment />} />
// //       <Route path="/products" element={<Products />} />
// //       <Route path="/featuresection" element={<FeatureSection />} />
// //       <Route path="/forgottenpassword" element={<ForgootenPassword />} />
// //       <Route path="/password-reset/:id/:token" element={<ResetPassword />} />
// //       <Route path="/setting" element={<Setting />} />
// //       <Route path="/update-profile" element={<UpdateProfile />} />
// //       <Route path="/change-password" element={<ChangePassword />} />
// //       <Route path="/admin" element={<Admin />} loader={adminloader} />
// //       <Route path="admincustomers" element={<Customers />} />
// //       <Route path="/addemploye" element={<AddEmploye />} />
// //       <Route path="/employee" element={<Employe />} loader={employeeloader} />
// //       <Route path="/userlogininfo" element={<UserLoginInfo />} />
// //       <Route path="/contactus" element={<ContactPage />} />
// //       <Route
// //         path="/prepaymentpage"
// //         element={<Prepaymentpage />}
// //         loader={PrepaymentPageloader}
// //       />
// //       <Route
// //         path="/paymentpage"
// //         element={<PaymentPage />}
// //         loader={paymentpageloader}
// //       />
// //       <Route path="/paymentsuccess" element={<Paymentsucess />} />

// //       {/* /admin routes here  */}
// //       <Route path="/admin/navbar" element={<AdminNavbar />} />

// //       <Route path="*" element={<Error />} />
// //     </Route>
// //   )
// // );

// // function App() {
// //   return (
// //     <div>
// //       <ToastContainer
// //         position="top-right"
// //         autoClose={3000}
// //         hideProgressBar={false}
// //         newestOnTop={true}
// //         closeOnClick
// //         rtl={false}
// //         pauseOnFocusLoss
// //         draggable
// //         pauseOnHover
// //         limit={3}
// //         toastStyle={{
// //           backgroundColor: "#F8F8FF",
// //           color: "black",
// //           borderRadius: "8px",
// //           padding: "16px",
// //         }}
// //         progressStyle={{
// //           // Custom style for the progress bar
// //           backgroundColor: "#EEEEEE",
// //         }}
// //       />

// //       <AuthContextProvider>
// //         <RouterProvider router={router}>
// //           <Route/>
// //         </RouterProvider>
// //       </AuthContextProvider>
// //     </div>
// //   );
// // }

// // export default App;

import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Components/Home";
import Login, { loginloader } from "./Components/Authencation/Login";
import Signup, { signuploader } from "./Components/Authencation/Signup";
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
import ContactPage from "./Components/Contact";
import UserLoginInfo from "./Components/Admin/UserLoginInfo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminNavbar from "./Admin/components/Navbar";
import Paymentsucess from "./Payments/Paymentsucess";
import Prepaymentpage, {
  PrepaymentPageloader,
} from "./Payments/Prepaymentpage";
import PaymentPage, { paymentpageloader } from "./Payments/PaymentPage";

// admin page

import AdminDashboard from "./Admin/pages/DashBoard";
import Adminsidebar from "./Admin/components/Slidebar";
import Admincustomers from "./Admin/pages/Customer";
import Admininventory from "./Admin/pages/Inventory";
import AdminProducts from "./Admin/pages/Products";
import Adminreport from "./Admin/pages/Report";
import AdminRevenueState from "./Admin/pages/RevenueStats";
import AdminSalesCategory from "./Admin/pages/SalesCategory";
import AdminSeetings from "./Admin/pages/Settings";
import AdminTransction from "./Admin/pages/Transaction";

// Define the AppWrapper component
const AppWrapper = () => {
  const location = useLocation(); // Get the current location

  return (
    <>
      {location.pathname.startsWith("/admin") ? null : <Navbar />}{" "}
      {/* Render Navbar conditionally */}
      <Outlet /> {/* Render the matched route's element */}
    </>
  );
};

// Define the router after the AppWrapper
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} loader={loginloader} />
      <Route path="/signup" element={<Signup />} loader={signuploader} />
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
      <Route path="/admin/customers" element={<Customers />} />
      <Route path="/addemploye" element={<AddEmploye />} />
      <Route path="/employee" element={<Employe />} loader={employeeloader} />
      <Route path="/userlogininfo" element={<UserLoginInfo />} />
      <Route path="/contactus" element={<ContactPage />} />
      <Route
        path="/prepaymentpage"
        element={<Prepaymentpage />}
        loader={PrepaymentPageloader}
      />
      <Route
        path="/paymentpage"
        element={<PaymentPage />}
        loader={paymentpageloader}
      />
      <Route path="/paymentsuccess" element={<Paymentsucess />} />
      <Route path="/admin/navbar" element={<AdminNavbar />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/products" element={<AdminProducts />} />
      <Route path="/admin/invenroty" element={<Admininventory />} />
      <Route path="/admin/report" element={<Adminreport />} />
      <Route path="/admin/transaction" element={<AdminTransction />} />
      <Route path="/admin/customer" element={<Admincustomers />} />

      <Route path="/admin/seetings" element={<AdminSeetings />} />
      <Route path="/admin/sidebar" element={<Adminsidebar />} />

      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={3}
        toastStyle={{
          backgroundColor: "#F8F8FF",
          color: "black",
          borderRadius: "8px",
          padding: "16px",
        }}
        progressStyle={{
          backgroundColor: "#EEEEEE",
        }}
      />

      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </div>
  );
}
export default App;
