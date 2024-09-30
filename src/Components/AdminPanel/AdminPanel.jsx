import React from "react";
import { Layout, Menu, Input, Select, Button, Table } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import "./AdminPanel.css";

const { Header, Sider, Content } = Layout;
const { Option } = Select;

function AdminPanel() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Left Sider (Menu / Dashboard Navigation) */}
      <Sider theme="dark" collapsible>
        <div className="logo">
          <h1 style={{ color: "#fff", padding: "10px" }}>Admin Panel</h1>
        </div>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">Dashboard</Menu.Item>
          <Menu.Item key="2">Upload Resources</Menu.Item>
          <Menu.Item key="3">Manage Resources</Menu.Item>
        </Menu>
      </Sider>

      {/* Main Content Area */}
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />

        {/* Content Area */}
        <Content style={{ margin: "16px" }}>
          <div className="content-container">
            <h1>Dashboard</h1>
            <h2>Resource Management</h2>

            <form>
              <Select
                placeholder="Select Degree"
                style={{ width: 300, marginRight: 16 }}
              >
                <Option value="B.E">Bachelor of Engineering (B.E.)</Option>
                <Option value="B.Tech">Bachelor of Technology (B.Tech)</Option>
                <Option value="B.Arch">
                  Bachelor of Architecture (B.Arch)
                </Option>
                <Option value="M.E">Master of Engineering (M.E.)</Option>
                <Option value="M.Tech">Master of Technology (M.Tech)</Option>
                <Option value="MBA">
                  Master of Business Administration (MBA)
                </Option>
              </Select>

              <Select
                placeholder="Select Department"
                style={{ width: 400, marginRight: 16 }}
              >
                <Option value="CSE">
                  Computer Science and Engineering (CSE)
                </Option>
                <Option value="EEE">
                  Electronics and Electrical Engineering (EEE)
                </Option>
                <Option value="EIE">
                  Electronics and Instrumentation Engineering(EIE)
                </Option>
                <Option value="ECE">
                  Electronics and Communication Engineering (ECE)
                </Option>
                <Option value="ME">Mechanical Engineering (ME)</Option>
                <Option value="CE">Civil Engineering (CE)</Option>
                <Option value="ChE">Chemical Engineering (ChE)</Option>
                <Option value="AE">Aerospace Engineering (AE)</Option>
                <Option value="BT">Biotechnology (BT)</Option>
                <Option value="IT">Information Technology (IT)</Option>
                <Option value="Auto.E">Automobile Engineering (Auto.E)</Option>
                <Option value="BME">Biomedical Engineering (BME)</Option>
                <Option value="EnvE">Environmental Engineering (EnvE)</Option>
                <Option value="TE">Telecommunication Engineering (TE)</Option>
                <Option value="ICE">
                  Instrumentation and Control Engineering (ICE)
                </Option>
                <Option value="VLSI">VLSI Design</Option>
                <Option value="EMB">Embedded Systems</Option>
                <Option value="PS">Power Systems</Option>
                <Option value="Thermal.E">Thermal Engineering</Option>
                <Option value="SE">Structural Engineering</Option>
                <Option value="Soft.E">Software Engineering</Option>
              </Select>

              <Select
                placeholder="Select Semester"
                style={{ width: 150, marginRight: 16 }}
              >
                <Option value="S1">Semester 1</Option>
                <Option value="S2">Semester 2</Option>
                <Option value="S3">Semester 3</Option>
                <Option value="S4">Semester 4</Option>
                <Option value="S5">Semester 5</Option>
                <Option value="S6">Semester 6</Option>
                <Option value="S7">Semester 7</Option>
                <Option value="S8">Semester 8</Option>
              </Select>

              <Select
                placeholder="Select Subject"
                style={{ width: 300, marginRight: 16 }}
              >
                <Option value="MATH">Mathematics</Option>
                <Option value="PHYS">Physics</Option>
                <Option value="CHEM">Chemistry</Option>
                <Option value="EM">Engineering Mechanics</Option>
                <Option value="CP">Computer Programming</Option>
                <Option value="EE">Electrical Engineering</Option>
                <Option value="EG">Engineering Graphics</Option>
                <Option value="TD">Thermodynamics</Option>
                <Option value="FM">Fluid Mechanics</Option>
                <Option value="DS">Data Structures</Option>
                <Option value="ALGO">Algorithms</Option>
                <Option value="CN">Computer Networks</Option>
                <Option value="DBMS">Database Management Systems</Option>
                <Option value="OS">Operating Systems</Option>
                <Option value="SE">Software Engineering</Option>
                <Option value="EC">Electric Circuits</Option>
                <Option value="CS">Control Systems</Option>
                <Option value="PS">Power Systems</Option>
                <Option value="EM">Electrical Machines</Option>
                <Option value="MC">Microcontrollers</Option>
                <Option value="MOS">Mechanics of Solids</Option>
                <Option value="TD">Thermodynamics</Option>
                <Option value="FM">Fluid Mechanics</Option>
                <Option value="HT">Heat Transfer</Option>
                <Option value="MV">Mechanical Vibrations</Option>
                <Option value="ACN">Advanced Computer Networks</Option>
                <Option value="AI">Artificial Intelligence</Option>
                <Option value="ML">Machine Learning</Option>
                <Option value="DM">Data Mining</Option>
                <Option value="CC">Cloud Computing</Option>
                <Option value="PE">Power Electronics</Option>
                <Option value="CS">Control Systems</Option>
                <Option value="ED">Electric Drives</Option>
                <Option value="RES">Renewable Energy Systems</Option>
                <Option value="HVE">High Voltage Engineering</Option>
              </Select>

              <Button type="primary" className="Btn" style={{ marginTop: 16 }}>
                File Upload
              </Button>
            </form>

            {/* Resource Table (Example) */}
            <Table
              columns={[
                { title: "Title", dataIndex: "title", key: "title" },
                { title: "Category", dataIndex: "category", key: "category" },
                { title: "Subject", dataIndex: "subject", key: "subject" },
                { title: "Semester", dataIndex: "semester", key: "semester" },
                {
                  title: "Action",
                  dataIndex: "",
                  key: "x",
                  render: () => <a>Delete</a>,
                },
              ]}
              dataSource={[]}
              style={{ marginTop: 24 }}
            />
          </div>
        </Content>

        {/* Right Sidebar (Search and Filter) */}
        <Sider
          width={300}
          theme="light"
          style={{ padding: "16px", background: "#f0f2f5" }}
        >
          <div style={{ marginBottom: 16 }}>
            <Input
              placeholder="Search Resources"
              prefix={<SearchOutlined />}
              style={{ marginBottom: 16 }}
            />

            <h3>Filter Options</h3>

            <Select
              placeholder="Select Semester"
              style={{ width: "100%", marginBottom: 16 }}
            >
              <Option value="S1">Semester 1</Option>
              <Option value="S2">Semester 2</Option>
              <Option value="S3">Semester 3</Option>
              <Option value="S4">Semester 4</Option>
              <Option value="S5">Semester 5</Option>
              <Option value="S6">Semester 6</Option>
              <Option value="S7">Semester 7</Option>
              <Option value="S8">Semester 8</Option>
            </Select>

            <Select
              placeholder="Select Subject"
              style={{ width: "100%", marginBottom: 16 }}
            >
              <Option value="MATH">Mathematics</Option>
              <Option value="PHYS">Physics</Option>
              <Option value="CHEM">Chemistry</Option>
              <Option value="EM">Engineering Mechanics</Option>
              <Option value="CP">Computer Programming</Option>
              <Option value="EE">Electrical Engineering</Option>
              <Option value="EG">Engineering Graphics</Option>
              <Option value="TD">Thermodynamics</Option>
              <Option value="FM">Fluid Mechanics</Option>
              <Option value="DS">Data Structures</Option>
              <Option value="ALGO">Algorithms</Option>
              <Option value="CN">Computer Networks</Option>
              <Option value="DBMS">Database Management Systems</Option>
              <Option value="OS">Operating Systems</Option>
              <Option value="SE">Software Engineering</Option>
              <Option value="EC">Electric Circuits</Option>
              <Option value="CS">Control Systems</Option>
              <Option value="PS">Power Systems</Option>
              <Option value="EM">Electrical Machines</Option>
              <Option value="MC">Microcontrollers</Option>
              <Option value="MOS">Mechanics of Solids</Option>
              <Option value="TD">Thermodynamics</Option>
              <Option value="FM">Fluid Mechanics</Option>
              <Option value="HT">Heat Transfer</Option>
              <Option value="MV">Mechanical Vibrations</Option>
              <Option value="ACN">Advanced Computer Networks</Option>
              <Option value="AI">Artificial Intelligence</Option>
              <Option value="ML">Machine Learning</Option>
              <Option value="DM">Data Mining</Option>
              <Option value="CC">Cloud Computing</Option>
              <Option value="PE">Power Electronics</Option>
              <Option value="CS">Control Systems</Option>
              <Option value="ED">Electric Drives</Option>
              <Option value="RES">Renewable Energy Systems</Option>
              <Option value="HVE">High Voltage Engineering</Option>
            </Select>

            <Button icon={<FilterOutlined />} type="primary" block>
              Apply Filters
            </Button>
          </div>
        </Sider>
      </Layout>
    </Layout>
  );
}

export default AdminPanel;
