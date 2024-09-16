import React from "react";
import { Breadcrumb, Layout, Menu, theme, Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./MainLayout.css";

const { Header, Content } = Layout;

// Route mappings for breadcrumbs
const breadcrumbNameMap = {
  "/": "Home",
  "/login": "Login",
  "/learning-material": "Learning Material",
  "/JobPortal": "JobPortal",
  "/interview-preparation": "Interview Preparation",
};

const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();
  const navigate = useNavigate();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
    ...pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      return (
        <Breadcrumb.Item key={url}>{breadcrumbNameMap[url]}</Breadcrumb.Item>
      );
    }),
  ];

  const currentPath = location.pathname;
  let activeKey = "1";
  if (currentPath.includes("learning-material")) activeKey = "2";
  if (currentPath.includes("JobPortal")) activeKey = "3";
  if (currentPath.includes("interview-preparation")) activeKey = "4";
  if (currentPath.includes("login")) activeKey = "5";

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
    // {
    //   key: "4",
    //   label: (
    //     <Link to="/interview-preparation" className="menu-link">
    //       Interview Preparation
    //     </Link>
    //   ),
    // },
  ];

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f4f9fd",
          width: "100%",
          color: "#2baffc",
          marginRight: 20,
        }}
      >
        <div
          className="demo-logo"
          style={{
            color: "#2baffc",
            marginRight: "20px",
          }}
        >
          <h1>Engineer StudyHub</h1>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          selectedKeys={[activeKey]} // Dynamically set active key
          className="Menu-links"
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            backgroundColor: "#f4f9fd",
            color: "#2baffc",
          }}
        />
        <Button
          onClick={() => navigate("/login")} // Navigate to login page
          style={{
            padding: "18px 30px",
            borderRadius: "6px",
            color: "#2baffc",
            fontWeight: "bold",
            marginRight: "3px",
            border: "none",
            background: "transparent",
          }}
          type="text"
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
          Join Us
        </Button>
      </Header>
      <Layout>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            {breadcrumbItems}
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: "100vh",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* Outlet renders the child routes */}
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
