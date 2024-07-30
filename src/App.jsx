import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import User from "./pages/User";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import { Provider } from "react-redux";
import store from "./redux/store";
import "antd/dist/reset.css";

const { Content, Sider } = Layout;

function App() {
  const [students, setStudents] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider>
            <Navbar isLoggedIn={isLoggedIn} />
          </Sider>
          <Layout className="site-layout">
            <Content style={{ margin: "16px" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                  path="/students"
                  element={
                    isLoggedIn ? (
                      <Students students={students} setStudents={setStudents} />
                    ) : (
                      <Login setIsLoggedIn={setIsLoggedIn} />
                    )
                  }
                />
                <Route
                  path="/teachers"
                  element={
                    isLoggedIn ? (
                      <Teachers />
                    ) : (
                      <Login setIsLoggedIn={setIsLoggedIn} />
                    )
                  }
                />
                <Route path="/user" element={<User />} />
                <Route
                  path="/login"
                  element={<Login setIsLoggedIn={setIsLoggedIn} />}
                />
                <Route path="/admin" element={<AdminPanel />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
