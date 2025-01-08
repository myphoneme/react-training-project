import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./admin/components/Home";
import Login from "./admin/pages/Login";
import Registration from "./admin/pages/Registration";
import UserList from "./admin/components/users/UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastProvider } from "./admin/components/ToastContext"; // Correct import for ToastProvider
import PageNotFound from "./admin/components/PageNotFound";
import CategoryList from "./admin/components/Categories/CategoryList";
import PostList from "./admin/components/posts/PostList";
import Dashboard from "./front-end/Dashboard";
import ContactUs from "./front-end/ContactUs";
import About from "./front-end/About";
import AboutMe from "./front-end/AboutMe";
import { globalContex } from "./front-end/Context";
import { useState } from "react";
function App() {
  const [toggle, setToggle] = useState("dark");
  return (
    <globalContex.Provider value={{ toggle, setToggle }}>
      <ToastProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Layout />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/postlist" element={<PostList />} />
            <Route path="/userlist" element={<UserList />} />
            <Route path="/categorylist" element={<CategoryList />} />
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/contact"
              element={<ContactUs toggle={toggle} setToggle={setToggle} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </ToastProvider>
    </globalContex.Provider>
  );
}

export default App;
