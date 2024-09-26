import { Button, Modal, Input, theme, Card, Typography, Image } from 'antd';
import { DeleteFilled, EditFilled} from '@ant-design/icons';
import React, { useState } from 'react';
import AddResource from './AddResource';
import { Layout, Menu, Select } from 'antd';
import './Dashboard.css';
import 'antd/dist/reset.css';

const { Option } = Select;
const { Sider } = Layout;
const { Search } = Input;
const { Title } = Typography;

const tabList = [
    { key: 'tab1', tab: 'PYQ' },
    { key: 'tab2', tab: 'Notes' },
    { key: 'tab3', tab: 'Video' },
  ];
  


const Dashboard = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [submittedData, setSubmittedData] = useState([]);
    const [isEdit, setIsEdit] = useState(false);  
    const [editIndex, setEditIndex] = useState(null); 
    const [initialValues, setInitialValues] = useState(null);

    const [activeTabKey, setActiveTabKey] = useState('tab1');

    const onTabChange = (key) => {
      setActiveTabKey(key);
    };

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

    const handleNewSubmission = (newSubmission) => {
        if (isEdit) {
            const updatedData = submittedData.map((item, index) =>
                index === editIndex ? newSubmission : item
            );
            setSubmittedData(updatedData);
            setIsEdit(false);
            setEditIndex(null);
        } else {
            
            setSubmittedData((prevData) => [...prevData, newSubmission]);
        }
        setIsModalVisible(false);
        setInitialValues(null);
    }

        const viewPdf = (file) => {
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL, "_blank");
    };

    const openVideoLink = (url) => {
        window.open(url, '_blank');
    };

    //  delete an submition 
    const handleDelete =(index)=>{
        setSubmittedData((prevData)=> prevData.filter((_, i) => i !== index));
    }

    //update submition 
    const handleUpdate = (index) => {
        setInitialValues(submittedData[index]);  
        setEditIndex(index);
        setIsEdit(true);  
        setIsModalVisible(true);  
    };
    return (
        <Layout style={{ minHeight: '92vh' }}>
            <Sider width={300} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
                <h1 className="head-sty">Dashboard</h1>
                <h2 className="head-sty">All Filter</h2>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
                    <Menu.Item key="1">
                        <Select placeholder="Select Subject">
                        <Option value="Data Structures">Data Structures</Option>
                        <Option value="Algorithms">Algorithms</Option>
                        <Option value="Operating Systems">Operating Systems</Option>
                        <Option value="Database Systems">Database Systems</Option>
                        <Option value="Computer Networks">Computer Networks</Option>
                        <Option value="Software Engineering">Software Engineering</Option>
                        <Option value="Machine Learning">Machine Learning</Option>
                        <Option value="Artificial Intelligence">Artificial Intelligence</Option>
                        </Select>
                    </Menu.Item>

                    <Menu.Item key="2">
                        <Select placeholder="Select Semester">
                        <Option value="1st">1st Semester</Option>
                        <Option value="2nd">2nd Semester</Option>
                        <Option value="3rd">3rd Semester</Option>
                        <Option value="4th">4th Semester</Option>
                        <Option value="5th">5th Semester</Option>
                        <Option value="6th">6th Semester</Option>
                        <Option value="7th">7th Semester</Option>
                        <Option value="8th">8th Semester</Option>
                        </Select>
                    </Menu.Item>

                    <Menu.Item key="3">
                        <Select placeholder="Select University">
                        <Option value="RGPV">Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)</Option>
                        <Option value="DAVV">Devi Ahilya Vishwavidyalaya (DAVV)</Option>
                        <Option value="IITD">Indian Institute of Technology Delhi (IITD)</Option>
                        <Option value="IITB">Indian Institute of Technology Bombay (IITB)</Option>
                        <Option value="IIMB">Indian Institute of Management Bangalore (IIMB)</Option>
                        <Option value="DU">University of Delhi (DU)</Option>
                        <Option value="JNU">Jawaharlal Nehru University (JNU)</Option>
                        <Option value="XYZ">XYZ University</Option>
                        </Select>
                    </Menu.Item>

                    <Menu.Item key="4">
                        <Select placeholder="Select Branch">
                        <Option value="">Select a Branch</Option>
                        <Option value="EC">Electronics and Communication</Option>
                        <Option value="CS">Computer Science</Option>
                        <Option value="ME">Mechanical Engineering</Option>
                        <Option value="CE">Civil Engineering</Option>
                        <Option value="IT">Information Technology</Option>
                        <Option value="EE">Electrical Engineering</Option>
                        <Option value="BT">Biotechnology</Option>
                        <Option value="AE">Aerospace Engineering</Option>
                        </Select>
                    </Menu.Item>

                    <Menu.Item key="5">
                        <Button type="primary">Apply</Button>
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
                            <AddResource
                             onClose={handleCancel}
                             onSubmit={handleNewSubmission} 
                             initialValues={initialValues} />
                        </Modal>

                        {/* Display Submitted Details */}
                 
             <div className="submitted-details" style={{ marginTop: '20px' }}>
               <div className="cards" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', width: '100%', justifyContent: 'flex-start' }}>
                        {submittedData.length > 0 ? (
                        submittedData.map((submission, index) => (
                         <Card
                         key={index}
                         title={
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                       <div>
                       <b>{submission.university} {submission.branch} {submission.semester}</b>
                        {submission.subject && <p><strong>Subject:</strong> {submission.subject}</p>}
                       </div>
                          <div>
                        <Button
                        style={{ marginRight: '10px', background: 'white', color: 'black' }}
                        onClick={() => handleDelete(index)}
                        icon={<DeleteFilled />}
                         />
                        <Button
                        onClick={() => handleUpdate(index)}
                        icon={<EditFilled />}
                        />
                          </div>
                   </div>
                       }
                    style={{
                    flex: "1 1 300px", // Adjusted base size
                    minWidth: "300px", // Increased minimum width
                    maxWidth: "400px", // Increased maximum width
                    margin: "10px",
                         }}
                    tabList={tabList}
                    activeTabKey={activeTabKey}
                    onTabChange={onTabChange}>

                   {activeTabKey === 'tab1' && (
                    <>
                      {submission.title && submission.file && (
                       <>
                         <p> <strong>TitleOfPYQ:</strong> {submission.title}</p>
                         <Button type="primary" onClick={() => viewPdf(submission.file)}>
                          PYQ PDF
                         </Button>
                       </>
                        )}
                   </>
                  )}

                  {activeTabKey === 'tab2' && (
                    <>
                     {submission.noteTitle && submission.fileNote && (
                     <>
                        <p><strong>TitleOfNotes:</strong> {submission.noteTitle}</p>
                        <Button type="primary" onClick={() => viewPdf(submission.fileNote)}>
                         Notes PDF 
                       </Button>
                     </>
                     )}
                    </>
                  )}

             {activeTabKey === 'tab3' && (
              <div style={{ display: 'flex', alignItems: 'center' }}>

              {submission.thumbnailPreview && (
              <div style={{ marginRight: '20px', minWidth: '50px' }}>
              <Image
              width={80}
              height={100}
              src={submission.thumbnailPreview}
              alt="Video Thumbnail Preview"
              style={{ objectFit: 'cover' }}
               />
             </div>
              )}
              <div>
              {submission.videoTitle && (
              <p><strong>Title Video:</strong> {submission.videoTitle}</p>
              )}
             {submission.videoDes && (
             <p><strong>Description:</strong> {submission.videoDes}</p>
              )}
               {submission.videoLink && (
               <Button type="primary" onClick={() => openVideoLink(submission.videoLink)}>
               Watch Video
               </Button>
                )}
               </div>
                   </div>
                 )}

               </Card>
                     ))
                     ) : (
                 <p style={{ textAlign: 'center' }}>No submissions yet.</p>
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
