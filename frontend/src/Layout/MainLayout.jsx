import React from "react";
import { Layout, Menu, theme, Button } from "antd";
import {
  DownOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./MainLayout.css";
import FooterComponent from "../Components/Footer/FooterComponent";

const { Header, Content } = Layout;

const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Path to key mapping
  const pathKeyMap = {
    "/": "1",
    "/learning-material": "2",
    "/JobPortal": "3",
    "/DevelopersHub": "4",
    "/AboutUs": "5",
    "/ContactUs": "6",
    "/FAQs": "7",
  };

  // Get active key based on the current path
  const activeKey = pathKeyMap[location.pathname] || "1"; // Default to "1" if path doesn't match

  const items = [
    {
      key: "1",
      label: (
        <Link to="/" className="menu-link">
          <HomeOutlined style={{ fontSize: "22px", marginTop: "10px" }} />
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to="/learning-material" className="menu-link">
          Learning Material
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link to="/JobPortal" className="menu-link">
          Job Portal
        </Link>
      ),
    },
   {
  key: "4",
  label: (
    <Link to="/DevelopersHub" className="menu-link">
      Developers Hub
    </Link>
  ),
},
{
  key: "5",
  label: (
    <Link to="/Dashboard" className="menu-link">
      Dashboard
    </Link>
  ),
},
{
  key: "6",
  label: (
    <Link to="/AboutUs" className="menu-link">
      About us
    </Link>
  ),
},
{
  key: "7",
  label: (
    <Link to="/ContactUs" className="menu-link">
      Contact us
    </Link>
  ),
},
{
  key: "8",
  label: (
    <Link to="/FAQs" className="menu-link">
      FAQs
    </Link>
  ),
},
  ];

  return (
    <Layout style={{ margin: 0, padding: "0px" }}>
      {/* info banner */}
      <div style={{ backgroundColor: "#1677ff" }}>
        <div
          className="info-banner"
          style={{
            backgroundColor: "#1677ff",
            width: "100%",
            height: 30,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            maxWidth: "1400px",
            margin: "auto",
          }}
        >
          <div className="flex">
            <p style={{ color: "#fff", marginRight: 10 }}>
              <MailOutlined style={{ paddingRight: "5px" }} />
              info@engineerstudyhub.in
            </p>
            <p style={{ color: "#fff" }}>
              <PhoneOutlined style={{ padding: "0px 5px" }} />
              +91 9876543210
            </p>
          </div>
          <div className="Flex" style={{ color: "#fff" }}>
            <p>
              <DownOutlined style={{ paddingRight: "5px" }} />
              India
            </p>
          </div>
        </div>
      </div>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#ffffff",
          width: "100%",
          color: "#2baffc",
          marginRight: 20,
          boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div
          className="demo-logo"
          style={{
            color: "#000",
            marginRight: "20px",
          }}
        >
          <h1>Engineer StudyHub</h1>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={[activeKey]} // Set active key dynamically
          className="Menu-links"
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            backgroundColor: "transparent",
            color: "#fff",
            border: "none",
          }}
        />
        <Button
          onClick={() => navigate("/login")}
          style={{
            padding: "18px 30px",
            borderRadius: "6px",
            color: "#1677ff",
            fontWeight: "bold",
            marginRight: "10px",
            border: "1px solid #1677ff",
            background: "transparent",
          }}
        >
          Login
        </Button>
        <Button
          style={{
            backgroundColor: "#0958d9",
            padding: "18px 25px",
            borderRadius: "6px",
            color: "#fff",
          }}
          type="primary"
        >
          Sign Up
        </Button>
      </Header>
      <Layout
        style={{
          margin: 0,
          padding: "0px",
          backgroundImage: "linear-gradient(to right, #e0eafc, #cfdef3)",
        }}
      >
        <Layout style={{ padding: "0" }}>
          <Content
            style={{
              margin: 0,
              minHeight: "100vh",
              backgroundImage: "linear-gradient(to right, #e0eafc, #cfdef3)",
              borderRadius: 0,
            }}
          >
            {/* Outlet renders the child routes */}
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <FooterComponent />
    </Layout>
  );
};

export default MainLayout;
