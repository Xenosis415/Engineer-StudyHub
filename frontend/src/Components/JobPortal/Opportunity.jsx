import React from 'react';
import { Card, Col, Row  } from 'antd';
import image2 from "../../assets/images/image2.png";
import {Typography } from 'antd';
import "./Opportunity.css";
import { useNavigate } from "react-router-dom";







const { Title, Paragraph, Text, Link } = Typography;
const HeadingStyle = {
    textAlign: 'left'
    };


const { Meta } = Card;
const gridStyle = {
  width: '350px',
  textAlign: 'center',
  display: 'inline-block',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'left',
  marginTop: '10px'
  
};
const opportunityinfo = {
  height:'50px',
  width: '50px',
  borderRadius: '50%',
  paddingRight: '10px'
}
const opportunitydesc = {
  display: 'flex',
  marginTop: '20px',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  background: "#faebd7",
  padding: '10px'
}


function Opportunity(opportunity) {
  const navigate = useNavigate();

const TrendingOpportunitiesCards = [


  {
    id:1,
    package: '15 - 30 LPA',
    location: 'Bangalore Urban',
    title: 'Code Cubicle 3.0',
    tags: ['#OFFLINE', '#FREE', '#DSA'],
    organizedBy: 'Shipra Gupta',
    description: 'Code Cubicle 3.0 is a modern coding environment designed for developers seeking seamless integration, collaboration, and efficiency. This platform offers advanced features like real-time code collaboration, version control, and cloud-based storage, making it ideal for remote teams. Its intuitive interface supports multiple programming languages, customizable workflows, and integrated debugging tools to enhance productivity. With built-in AI assistance, Code Cubicle 3.0 helps automate repetitive tasks, providing smart code suggestions and error detection. Whether you are a solo developer or part of a large team, this platform offers a comprehensive suite of tools to streamline development, boost performance, and foster innovation.',
    logo: 'https://frontendehubbucket.s3.ap-south-1.amazonaws.com/backend/community/events/code_cubicle_3.01725604551267.jpg',
    buttonColor: '#FFDD87',
    avatar: 'https://th.bing.com/th/id/OIP.Yfk_G0fp_4dgRhw058G6iAHaKV?w=790&h=1103&rs=1&pid=ImgDetMain'
},
  {
      id: 2,
      package: '5 - 12 LPA',
      location: 'Bangalore Urban',
      title: 'Scroll Hacks',
      tags: ['#ONLINE', '#FREE', '#HACKATON'],
      organizedBy: 'Shipra Gupta',
      description: 'Scroll Hacks is a modern digital workshop or series of hackathons focused on optimizing web and mobile scrolling experiences. It gathers developers, UX/UI designers, and creative technologists to brainstorm, prototype, and implement new scrolling techniques for websites and apps. The event encourages participants to create smoother, faster, and more interactive scrolling features by leveraging advanced front-end technologies like JavaScript, CSS animations, and user-friendly design practices. With the growing demand for seamless navigation and immersive digital experiences, Scroll Hacks aims to drive innovation, making user interactions more intuitive, efficient, and visually engaging across devices.',
      logo: "https://frontendehubbucket.s3.ap-south-1.amazonaws.com/backend/community/events/scroll_hacks1725302427205.jpg",
      buttonColor: '#87CEEB',
      avatar: 'https://th.bing.com/th/id/OIP.Yfk_G0fp_4dgRhw058G6iAHaKV?w=790&h=1103&rs=1&pid=ImgDetMain'

  },
  {
      id: 3,
      location: 'Noida',
      title: 'CODE N’ SURGE 2024',
      tags: ['#OFFLINE', '#PAID', '#HACKATON'],
            organizedBy: 'Shipra Gupta',
      description: 'CODE N’ SURGE 2024 is an upcoming tech conference and hackathon, bringing together programmers, developers, and innovators to collaborate on cutting-edge technology solutions. Scheduled for 2024, this event aims to foster creativity, innovation, and problem-solving through competitive coding challenges, workshops, and keynote sessions led by industry leaders. Participants will have the opportunity to showcase their skills in areas such as artificial intelligence, machine learning, blockchain, and software development. CODE N’ SURGE 2024 offers networking opportunities, prizes, and mentorship for individuals and teams, encouraging the next generation of tech talent to push the boundaries of innovation.',
      logo: "https://frontendehubbucket.s3.ap-south-1.amazonaws.com/backend/community/events/code_n%E2%80%99_surge_20241725301732309.jpg",
      buttonColor: '#B2FF87',
      avatar: 'https://th.bing.com/th/id/OIP.Yfk_G0fp_4dgRhw058G6iAHaKV?w=790&h=1103&rs=1&pid=ImgDetMain'
  },
  {
      id: 4,
      location: 'Pune',
      title: 'Women in Tech 4th Edition - Summer internship 2025',
      tags: ['#ONLINE', '#FREE', '#DSA'],
      organizedBy: 'Shipra Gupta',
      description: 'The Women in Tech 4th Edition - Summer Internship is a program designed to empower women pursuing careers in technology. This initiative offers hands-on experience, mentorship, and professional development opportunities for women studying or starting careers in fields like software development, data science, AI, cybersecurity, and more. Through partnerships with leading tech companies, the program provides real-world exposure to industry projects, fostering both technical and leadership skills. The goal is to address the gender gap in tech by supporting aspiring women technologists, helping them build networks, and equipping them with the skills needed to thrive in the tech industry.',
      logo: 'https://frontendehubbucket.s3.ap-south-1.amazonaws.com/backend/community/events/women_in_tech_4th_edition_-_summer_internship_20251724841366405.jpg',
      buttonColor: '#B2FF87',
      avatar: 'https://th.bing.com/th/id/OIP.Yfk_G0fp_4dgRhw058G6iAHaKV?w=790&h=1103&rs=1&pid=ImgDetMain'
  },
  {
      id: 5,
      location: 'Noida',
      title: 'Sensathon`24',
      tags: ['#OFFLINE', '#PAID', '#HACKATHON'],
      organizedBy: 'Shipra Gupta',
      description: 'Sensathon 24 is an upcoming hackathon centered around sensor technology and its innovative applications across various industries. Participants, including developers, engineers, and tech enthusiasts, will come together to create solutions that utilize sensors for real-world challenges, such as environmental monitoring, health diagnostics, smart cities, and IoT devices. The event encourages experimentation with various sensors like motion detectors, temperature sensors, and bio-sensors, pushing the boundaries of what these technologies can achieve. Sensathon 24 will feature workshops, mentorship sessions, and collaborative coding sprints, empowering teams to build prototypes that showcase the future of sensor-driven solutions.',
      logo: 'https://frontendehubbucket.s3.ap-south-1.amazonaws.com/backend/community/events/sensathon%27241723635329145.jpg',
      buttonColor: '#B2FF87',
      avatar: 'https://th.bing.com/th/id/OIP.Yfk_G0fp_4dgRhw058G6iAHaKV?w=790&h=1103&rs=1&pid=ImgDetMain'
  },
  {
      id: 6,
      location: 'Noida',
      title: 'Hack Colossus',
      tags: ['#OFFLINE', '#PAID', '#HACKATHON'],
      organizedBy: 'Shipra Gupta',
      description: 'Hack Colossus is a large-scale hackathon that brings together tech enthusiasts, developers, and innovators to collaborate on solving complex challenges. Known for its grand scope and high-stakes competitions, Hack Colossus spans several days, offering participants the opportunity to create groundbreaking solutions in areas like artificial intelligence, cybersecurity, blockchain, and sustainability. The event includes coding marathons, workshops, mentorship, and networking opportunities, attracting both students and professionals from around the world. With substantial prizes, recognition, and potential career opportunities at stake, Hack Colossus is designed to inspire creativity, push boundaries, and drive technological innovation on a global scale.',
      logo: 'https://frontendehubbucket.s3.ap-south-1.amazonaws.com/backend/community/events/hack_colossus1724841798534.jpg',
      buttonColor: '#B2FF87',
      avatar: 'https://th.bing.com/th/id/OIP.Yfk_G0fp_4dgRhw058G6iAHaKV?w=790&h=1103&rs=1&pid=ImgDetMain'
  },
]



  const handleViewClick = (id) => {
    navigate(`/opportunity/${id}`);
}
    
    return(
        <div className='event-container'>
            <Typography>
                <Title className='header' style={HeadingStyle} >Trending Opportunities</Title>
            </Typography>

          <Row gutter={16}>
          {TrendingOpportunitiesCards.map((opportunity) => (
          <Col span={8}>
          
          <Card  key={opportunity.id}
    hoverable
    style={gridStyle}
  >
    <div >
      <img className='logo-img' alt="example" src={opportunity.logo}/>
      <div className="new-tags">
                                {opportunity.tags.map((tag, index) => (
                                    <span key={index} className="new-tag">{tag}</span>
                                ))}
                            </div>
   </div>
   <h3 style={{marginTop: '10px'}}>{opportunity.title}</h3>
    
    
    <div style={opportunitydesc}>
      <img  style={opportunityinfo} src={opportunity.avatar}/>
      <div>
        <h4>Organized by</h4>
        <p>{opportunity.organizedBy}</p>
      </div>
      <button className="view-btn" onClick={() => handleViewClick(opportunity.id)}>Know More</button>
    </div>
  </Card>
 
          </Col>
           ))}
          </Row>


        </div>
    )
}

export default Opportunity