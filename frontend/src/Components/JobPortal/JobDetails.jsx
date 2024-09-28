import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Col, Layout, Row } from "antd";
import {
    HomeOutlined, UsergroupAddOutlined,
    SolutionOutlined,
    ProfileOutlined, MessageOutlined,
    SettingOutlined,
    UserOutlined,
    LockOutlined,
    BookOutlined,
    ReadOutlined,
    TeamOutlined,
    UserAddOutlined
} from '@ant-design/icons';
import "./JobDetails.css";
import { useNavigate } from 'react-router-dom';

const { Sider, Content } = Layout;

const JobDetails = () => {
    const [selectedJobType, setSelectedJobType] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();
    const FeaturedJobCards = [
        {
            id: 1,
            package: '3 - 5 LPA',
            location: 'Remote',
            title: 'Junior Developer',
            tags: ['#JavaScript', '#React'],
            company: 'Freshers Inc.',
            views: 500,
            logo: require("../../assets/images/grow.png"),
            buttonColor: '#87CEEB',
            startDate: '2024-01-01',
            experience: '0-1 years',
        },
        {
            id: 2,
            package: '5 - 12 LPA',
            location: 'Bangalore Urban',
            title: ' Data Science  Engineer',
            tags: ['#API', '#React', '#.NET'],
            company: 'Anthology',
            views: 2092,
            logo: require("../../assets/images/anthology.png"),
            buttonColor: '#87CEEB'
        },
        {
            id: 3,
            package: '5 - 10 LPA',
            location: 'Noida',
            title: 'React JS Developer',
            tags: ['#jQuery', '#React', '#Angular'],
            company: 'Technoarch Softwares',
            views: 2042,
            logo: require("../../assets/images/tecnoarch.png"),
            buttonColor: '#B2FF87'
        },
        {
            id: 4,
            package: '8 - 12 LPA',
            location: 'Pune',
            title: 'Software Engineer |',
            tags: ['#SDK', '#JSON', '#XML'],
            company: 'Technoarch Softwares',
            views: 2042,
            logo: require("../../assets/images/zebra.png"),
            buttonColor: '#B2FF87'
        },
        {
            id: 5,
            package: '6 - 10 LPA',
            location: 'Noida',
            title: 'Python Developer',
            tags: ['#python', '#sql', '#DSA'],
            company: 'Impetus Technologies',
            views: 2042,
            logo: require("../../assets/images/impetus.png"),
            buttonColor: '#B2FF87'
        },
        {
            id: 6,
            package: '4.5 - 10 LPA',
            location: 'Noida',
            title: 'Jr. Node.js Developer',
            tags: ['#html/css', '#javascript', '#mongodb'],
            company: 'Excellence Technologies',
            views: 2042,
            logo: require("../../assets/images/excellence.png"),
            buttonColor: '#B2FF87'
        },
    ]
    const FreshersJobCards = [
        {
            id: 1,
            package: '15 - 30 LPA',
            location: 'Bangalore Urban',
            title: 'Software Development ',
            tags: ['#DSA', '#Problem solving'],
            company: 'Grow',
            views: 1251,
            logo: require("../../assets/images/grow.png"),
            buttonColor: '#FFDD87'
        },
        {
            id: 2,
            package: '5 - 12 LPA',
            location: 'Bangalore Urban',
            title: ' Data Science  Engineer',
            tags: ['#API', '#React', '#.NET'],
            company: 'Anthology',
            views: 2092,
            logo: require("../../assets/images/anthology.png"),
            buttonColor: '#87CEEB'
        },
        {
            id: 3,
            package: '5 - 10 LPA',
            location: 'Noida',
            title: 'React JS Developer',
            tags: ['#jQuery', '#React', '#Angular'],
            company: 'Technoarch Softwares',
            views: 2042,
            logo: require("../../assets/images/tecnoarch.png"),
            buttonColor: '#B2FF87'
        },
        {
            id: 4,
            package: '8 - 12 LPA',
            location: 'Pune',
            title: 'Software Engineer |',
            tags: ['#SDK', '#JSON', '#XML'],
            company: 'Technoarch Softwares',
            views: 2042,
            logo: require("../../assets/images/zebra.png"),
            buttonColor: '#B2FF87'
        },
        {
            id: 5,
            package: '6 - 10 LPA',
            location: 'Noida',
            title: 'Python Developer',
            tags: ['#python', '#sql', '#DSA'],
            company: 'Impetus Technologies',
            views: 2042,
            logo: require("../../assets/images/impetus.png"),
            buttonColor: '#B2FF87'
        },
        {
            id: 6,
            package: '4.5 - 10 LPA',
            location: 'Noida',
            title: 'Jr. Node.js Developer',
            tags: ['#html/css', '#javascript', '#mongodb'],
            company: 'Excellence Technologies',
            views: 2042,
            logo: require("../../assets/images/excellence.png"),
            buttonColor: '#B2FF87'
        },
    ];
    const ExperiencedJobCards = [
        {
            id: 1,
            package: '6 - 12 LPA',
            location: 'Pune',
            title: 'Senior Software Engineer',
            tags: ['#Java', '#Spring'],
            company: 'Experienced Corp.',
            views: 900,
            // logo: require("../../assets/images/experienced.png"),
            buttonColor: '#FFD700'
        },
       
    ];
    const InternshipJobCards = [
        {
            id: 1,
            package: '2 - 3 LPA',
            location: 'Bangalore',
            title: 'Internship in Data Science',
            tags: ['#Python', '#ML'],
            company: 'Internship Hub',
            views: 300,
            // logo: require("../../assets/images/internship.png"),
            buttonColor: '#FF69B4'
        },
        
    ];

    const job = FeaturedJobCards.find(job => job.id === parseInt(id));
    if (!job) return <div>Job not found</div>;

    return (
        <Layout>
            <Sider width={250} theme="dark">
                <div className="icon-container">
                    <div className="icon-item" onClick={() => setSelectedJobType('')}>
                        <HomeOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
                        <span>Home</span>
                    </div>
                    <div className="icon-item">
                        <span>Jobs</span>
                    </div>
                    <div className="icon-item" onClick={() => setSelectedJobType('freshers')}>
                        <UsergroupAddOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
                        <span>Freshers Job</span>
                    </div>
                    <div className="icon-item" onClick={() => setSelectedJobType('experienced')}>
                        <TeamOutlined style={{ fontSize: '24px', color: '#FFA500' }} />
                        <span>Experienced Job</span>
                    </div>
                    <div className="icon-item" onClick={() => setSelectedJobType('internship')}>
                        <BookOutlined style={{ fontSize: '24px', color: '#FF4500' }} />
                        <span>Internships</span>
                    </div>
                    <div className="icon-item">
                        <span>Request</span>
                    </div>
                    <div className="icon-item">
                        <ProfileOutlined style={{ fontSize: '24px', color: '#13c2c2' }} />
                        <span>Resume Review</span>
                    </div>
                    <div className="icon-item">
                        <span>Community</span>
                    </div>
                    <div className="icon-item">
                        <MessageOutlined style={{ fontSize: '24px', color: '#722ed1' }} />
                        <span>Discussions</span>
                    </div>
                    <div className="icon-item">
                        <ReadOutlined style={{ fontSize: '24px', color: '#722ed1' }} />
                        <span>Roadmaps</span>
                    </div>
                    <div className="icon-item">
                        <SolutionOutlined style={{ fontSize: '24px', color: '#722ed1' }} />
                        <span>Interview Experience</span>
                    </div>
                    <div className="icon-item">
                        <BookOutlined style={{ fontSize: '24px', color: '#722ed1' }} />
                        <span>Resources</span>
                    </div>
                    <div className="icon-item">
                        <span>Profile</span>
                    </div>
                    <div className="icon-item">
                        <UserOutlined style={{ fontSize: '24px', color: '#722ed1' }} />
                        <span>Update Profile</span>
                    </div>
                    <div className="icon-item">
                        <LockOutlined style={{ fontSize: '24px', color: '#722ed1' }} />
                        <span>Change Password</span>
                    </div>
                    <div className="icon-item">
                        <span>Others</span>
                    </div>
                    <div className="icon-item">
                        <SettingOutlined style={{ fontSize: '24px', color: '#722ed1' }} />
                        <span>Settings</span>
                    </div>
                </div>
            </Sider>

            <Layout>
                <Content style={{ padding: '20px' }}>
                    {selectedJobType === 'freshers' && (
                        <div>
                            <h2>Freshers Jobs</h2>
                            <div className="job-grid">
                                {FreshersJobCards.map((job) => (
                                    <Card key={job.id} style={{ margin: '10px', padding: '10px' }}>
                                        <div className="job-info">
                                            <img src={job.logo} alt={`${job.company} logo`} style={{ width: '100px' }} />
                                            <h3>{job.title}</h3>
                                        </div>
                                        <div class="job-buttons">
                                            <button class="btn">Apply Now</button>
                                            <button class="btn">Referrals</button>
                                            <button class="btn">View Details</button>
                                        </div>
                                        <p>Package: {job.package}</p>
                                        <p>Location: {job.location}</p>
                                        <p>Company: {job.company}</p>
                                        <p>Views: {job.views}</p>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                                <p style={{ margin: 0 }}>Job Offer: <strong>{job.package}</strong></p>
                                                <p style={{ margin: 0 }}>Start Date: <strong>{job.startDate}</strong></p>
                                                <p style={{ margin: 0 }}>Experience: <strong>{job.experience}</strong></p>
                                            </div>
                                           <p>A platform to learn in community, explore campuses & get placed in dream companies</p>

                                        </div>

                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}
                    {selectedJobType === 'experienced' && (
                        <div>
                            <h2>Experienced Jobs</h2>
                            <div className="job-grid">
                                {ExperiencedJobCards.map((job) => (
                                    <Card key={job.id} title={job.title} style={{ margin: '10px' }}>
                                        <p>Package: {job.package}</p>
                                        <p>Location: {job.location}</p>
                                        <p>Company: {job.company}</p>
                                        <p>Views: {job.views}</p>
                                        <img src={job.logo} alt={`${job.company} logo`} style={{ width: '100px' }} />
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}
                    {selectedJobType === 'internship' && (
                        <div>
                            <h2>Internships</h2>
                            <div className="job-grid">
                                {InternshipJobCards.map((job) => (
                                    <Card key={job.id} title={job.title} style={{ margin: '10px' }}>
                                        <p>Package: {job.package}</p>
                                        <p>Location: {job.location}</p>
                                        <p>Company: {job.company}</p>
                                        <p>Views: {job.views}</p>
                                        <img src={job.logo} alt={`${job.company} logo`} style={{ width: '100px' }} />
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}
                    {selectedJobType === '' && (
                        <div>
                            <h2>All Jobs</h2>
                            <div className="job-grid">
                                {FeaturedJobCards.map((job) => (
                                    <Card key={job.id} title={job.title} style={{ margin: '10px' }}>
                                        <p>Package: {job.package}</p>
                                        <p>Location: {job.location}</p>
                                        <p>Company: {job.company}</p>
                                        <p>Views: {job.views}</p>
                                        <img src={job.logo} alt={`${job.company} logo`} style={{ width: '100px' }} />
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}
                </Content>
            </Layout>
        </Layout>
    );
};

export default JobDetails;
