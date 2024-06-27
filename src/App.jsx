import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import NavBar from "./Design/components/NavBar";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Profile from "./Pages/Profile/Profile";
import Footer from "./Design/components/Footer";
import Admin from "./Pages/Admin/Admin";
import Sidebar from "./Design/components/Sidebar";
import Mail from "./Pages/Admin/Mail";
import Post from "./Pages/Admin/Post";
import Quotes from "./Pages/Admin/Quotes";
import Users from "./Pages/Admin/Users";
import Category from "./Pages/Admin/Category";
import Listen from "./Pages/Listen/Listen";
import Read from "./Pages/Read/Read";
import PostDetail from "./Pages/PostDetail/PostDetail";
import CategoryDetail from "./Pages/CategoryDetail/CategoryDetail";
import AudioPostDetail from "./Pages/AudioPostDetail.jsx/AudioPostDetail";
import QuotePage from "./Pages/QuotePage/QuotePage";
import PostDetailByAdmin from "./Pages/Admin/PostDetailByAdmin";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="main-content">
        <Outlet /> {/* This will render the child routes */}
      </div>
      <Footer />
    </div>
  );
};

const NoNavLayout = () => {
  return (
    <div className=" flex flex-row">
      <Sidebar />
      <div className="w-full">
        <Outlet /> {/* This will render the child routes */}
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes that include NavBar and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/listen" element={<Listen />} />
          <Route path="/read" element={<Read />} />
          <Route path="/postdetail/:id" element={<PostDetail />} />
          <Route path="/audiodetail/:id" element={<AudioPostDetail />} />
          <Route path="/category/:name" element={<CategoryDetail />} />
        </Route>
        <Route path="/quotes/:name" element={<QuotePage />} />

        {/* Routes that include Sidebar and no NavBar */}
        <Route element={<NoNavLayout />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/category" element={<Category />} />
          <Route path="/post" element={<Post />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/users" element={<Users />} />
          <Route
            path="/postdetailbyadmin/:id"
            element={<PostDetailByAdmin />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
