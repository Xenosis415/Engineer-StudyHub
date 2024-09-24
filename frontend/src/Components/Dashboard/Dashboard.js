import { Button, Modal, Input, theme, Card, Row, Typography } from 'antd';
import React, { useState } from 'react';
import AddResource from './AddResource';
import { Layout, Menu, Select } from 'antd';
import './Dashboard.css';
import 'antd/dist/reset.css';

const { Option } = Select;
const { Sider } = Layout;
const { Search } = Input;
const { Title } = Typography;

const Dashboard = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [submittedData, setSubmittedData] = useState([]); // State for submitted data

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    // Function to handle new submission from AddResource component
    const handleNewSubmission = (newSubmission) => {
        setSubmittedData((prevData) => [...prevData, newSubmission]); // Update the submitted data
    };
    const viewPdf = (file) => {
        const fileURL = URL.createObjectURL(file); // Create a URL for the PDF
        window.open(fileURL, "_blank"); // Open the PDF in a new tab
      };

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}>
            <Sider
                width={300}
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}>
                <h1 className="head-sty">Dashboard</h1>
                <h2 className="head-sty">All Filter</h2>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{ height: '100%', borderRight: 0 }}>
                    {/* Filters */}
                    <Menu.Item key="1">
                        <Select placeholder="Select Subject">
                            <Option value="math">Mathematics</Option>
                            <Option value="physics">Physics</Option>
                            <Option value="cs">Computer Science</Option>
                        </Select>
                    </Menu.Item>

                    <Menu.Item key="2">
                        <Select placeholder="Select Semester">
                            <Option value="1st">1st Semester</Option>
                            <Option value="2nd">2nd Semester</Option>
                            <Option value="3rd">3rd Semester</Option>
                            <Option value="4th">4th Semester</Option>
                        </Select>
                    </Menu.Item>

                    <Menu.Item key="3">
                        <Select placeholder="Select Univercity">
                        <Option value="1">RGPV</Option>
                        <Option value="2">DAVV</Option>
                        <Option value="3">xyz</Option>
                        <Option value="4">abc</Option>
                        </Select>
                    </Menu.Item>

                    <Menu.Item key="4">
                        <Select placeholder="Select Branch">
                        <Option value="1"> EC</Option>
                        <Option value="2">CS</Option>
                        <Option value="3">xy</Option>
                        <Option value="4">ab</Option>
                        </Select>
                    </Menu.Item>

                    <Menu.Item key="5">
                        <Button  type="primary"  >Apply </Button>
                    </Menu.Item>

                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px', background: '#f0f0f0' }}>
                <div className="dash-container">
                    <div className="dash-content">
                        <div className="flex-container">
                            <Search
                                placeholder="Search Resources"
                                allowClear
                                style={{ marginBottom: 20, width: '400px' }}
                            />
                            <Button type="primary" onClick={showModal}>
                                Add Resource
                            </Button>
                        </div>
                        <Modal
                            open={isModalVisible}
                            onOk={handleOk}
                            onCancel={handleCancel}>
                            <AddResource onClose={handleCancel} onSubmit={handleNewSubmission} />
                        </Modal>

                        {/* Display Submitted Details */}
                        <div className="submitted-details" style={{ marginTop: "20px" }}>
                            <Title level={3}>Submitted Details:</Title>
                            <div className="cards" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                {submittedData.length > 0 ? (
                                    submittedData.map((submission, index) => (
                                        <Card key={index} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "15px", backgroundColor: "#fff" }}>
                                            <p><strong>University:</strong> {submission.university}</p>
                                            <p><strong>Branch:</strong> {submission.branch}</p>
                                            <p><strong>Subject:</strong> {submission.subject}</p>
                                            <p><strong>Semester:</strong> {submission.semester}</p>
                                            {submission.file && (
                                                <Button type="primary" onClick={() => viewPdf(submission.file)}>
                                                    View PDF
                                                </Button>
                                            )}
                                        </Card>
                                    ))
                                ) : (
                                    <p>No submissions yet.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </Layout>
    );
};

export default Dashboard;
