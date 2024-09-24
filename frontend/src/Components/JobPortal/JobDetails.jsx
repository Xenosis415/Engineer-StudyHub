import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import "./JobDetails.css";

const { Search } = Input;
const onSearch = (value) => {
    console.log("Search value:", value);
  };
const JobDetails = () => {
    const { id } = useParams();
    const FeaturedJobCards = [
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
    ]
 const job = FeaturedJobCards.find(job => job.id === parseInt(id));
    if (!job) return <div>Job not found</div>;

    return ( 
        <div className="search-bar">
            <Search
              placeholder="Search for jobs,Company,etc"
              onSearch={onSearch}
              enterButton
              className="custom-search-input"
            />
          </div>
        // <div className="job-container">
        //     <div className="job-grid">
        //         <div className="job-info">
        //             <p className="package">Package: {job.package}</p>
        //             <p className="location">Job Location: <strong>{job.location}</strong></p>
        //             <h3 className="job-title">{job.title}</h3>
        //             <div className="tags">
        //                 {job.tags.map((tag, index) => (
        //                     <span key={index} className="tag">{tag}</span>
        //                 ))}
        //             </div>
        //             <div className="job-footer" style={{ backgroundColor: job.buttonColor }}>
        //                 <div className="company-info">
        //                     <img src={job.logo} alt={`${job.company} logo`} className="company-logo" />
        //                     <p className="company-name">{job.company}</p>
        //                 </div>
        //                 <button className="view-btn">View</button>
        //             </div>
        //             <p className="views">👁️ {job.views}</p>
        //             <div className="background-logos">
        //                 <img src={job.logo} alt={job.company} className="logo" />
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default JobDetails;
