import React from "react";
import { Input, Button, Card } from "antd";
import "./JobPortal.css"; // Ensure this CSS file includes the styles below

const { Search } = Input;

const onSearch = (value) => {
  console.log("Search value:", value);
};

const cardData = [
  {
    title: "Job Hiring",
    description:
      "Apply for the jobs of your interest and get the offer letter in the next step.",
    stats: [
      { number: "3290+", label: "jobs live" },
      { number: "4000+", label: "total openings" },
    ],
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEpvYiUyMEhpcmluZ3xlbnwwfHwwfHx8MA%3D%3D", // Add path to your image
  },
  {
    title: "Be an Intern",
    description:
      "Apply for the Internships of your interest and get the offer letter in the next step.",
    stats: [
      { number: "340+", label: "internships live" },
      { number: "1500+", label: "total openings" },
    ],
    img: "data:image/jpeg;base64,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", // Add path to your image
  },
  {
    title: "Project Hub",
    description:
      "Paid projects that give you hands-on experience for a better career.",
    stats: [
      { number: "62+", label: "projects live" },
      { number: "62+", label: "ongoing projects" },
    ],
    img: "https://media.istockphoto.com/id/1257392472/photo/multicultural-teams-have-the-opportunity-bring-rich-and-varied-points-of-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yhu6JcC1k2YIJIQrhev-IpP6c1hNDruW4zXHiFmGapA=", // Add path to your image
  },
  {
    title: "Event Hiring",
    description:
      "Participate in the events directly conducted by the companies to highlight your profile.",
    stats: [
      { number: "20+", label: "events live" },
      { number: "35+", label: "total openings" },
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7iVZefP_faOJoPSUonTxNFl6HYPrmUncpBzrYCanho3L8lvnGU7r_GVf09FvIqlgQrLU&usqp=CAU", // Add path to your image
  },
];

function JobPortal() {
  return (
    <div className="job-portal">
      <div className="background-logos">
        {/* Add paths to your company logos */}
        <img src="logo1.png" alt="Company Logo 1" className="logo" />
        <img src="logo2.png" alt="Company Logo 2" className="logo" />
        <img src="logo3.png" alt="Company Logo 3" className="logo" />
        {/* Add more logos as needed */}
      </div>
      <header className="jobPortal-upper-header">
        <div className="heading-jobPortal">
          <h1>Your Ultimate Job Search Companion</h1>
        </div>
        <div className="para-jobPortal">
          <p>
            Are you looking for the perfect job or ideal candidates? Find your
            dream job with thousands of job postings across industries.
          </p>
          <div className="search-bar">
            <Search
              placeholder="Search for jobs or candidates"
              onSearch={onSearch}
              enterButton
            />
          </div>
        </div>
      </header>
      <main className="content-sections">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="info-card"
            cover={<img alt={card.title} src={card.img} />}
            hoverable
          >
            <Card.Meta title={card.title} description={card.description} />
            <div className="card-stats">
              {card.stats.map((stat, idx) => (
                <div key={idx} className="stat">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
            <Button type="primary">Explore More</Button>
          </Card>
        ))}
      </main>
      <div className="thread-animation"></div>
    </div>
  );
}

export default JobPortal;
