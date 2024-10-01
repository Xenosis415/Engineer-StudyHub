import React from "react";
import "./EventCards.css";
import { useNavigate } from "react-router-dom";

function EventCards() {
  const navigate = useNavigate();

  const eventsData = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/1310732641/vector/hiring-job-template.jpg?s=1024x1024&w=is&k=20&c=MJU1ny6Z7grv34TisFrfrufDejpICycnhC-LGxtMIjs=",
      title: "Utkarsh Sharma",
      date: "25 Sep 2024",
      time: "11am to 5pm",
      organizedBy: "Organizer 1",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/1646520411/photo/banner-of-find-team-members-through-interviews-and-selection-with-recruitment-as-companies.jpg?s=1024x1024&w=is&k=20&c=vQ4ZYDTro0_FTRDbReU0BwRptXcmIKB1xlEXJQPDi-0=",
      title: "Event 2",
      date: "25 Sep 2024",
      time: "11 AM",
      organizedBy: "Organizer 2",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/1429704071/vector/group-diversity-silhouette-multiethnic-people-from-the-side-community-of-colleagues-or.jpg?s=1024x1024&w=is&k=20&c=-iOdkD8lM1xqbkGV0qRdxsvCTICc7gRyHKh09IKgxGE=",
      title: "Event 3",
      date: "25 Sep 2024",
      time: "11 AM",
      organizedBy: "Organizer 3",
    },
    {
      id: 4,
      image:
        "https://media.istockphoto.com/id/1299920551/vector/online-video-conference-landing-page-concept-colleague-team-chatting.jpg?s=1024x1024&w=is&k=20&c=GQRYD0r_w-FKwI1AukkhK6EsEYmxuOYPHObbojLaY8Q=",
      title: "Event 4",
      date: "25 Sep 2024",
      time: "11 AM",
      organizedBy: "Organizer 4",
    },
    {
      id: 5,
      image:
        "https://media.istockphoto.com/id/1091290824/vector/business-landing-pages-marketing-website-design-layout-template-people-promotion-modern.jpg?s=1024x1024&w=is&k=20&c=L4BEVX61orR-cbaRm_fCLAxnW2mCddroSuOL6dKco7U=",
      title: "Event 5",
      date: "25 Sep 2024",
      time: "11 AM",
      organizedBy: "Organizer 5",
    },
    {
      id: 6,
      image:
        "https://media.istockphoto.com/id/869155894/vector/online-training.jpg?s=1024x1024&w=is&k=20&c=EkqnifWAxeCPsHC581NMtMPYznWuf0DGGP0v1JDsb-E=",
      title: "Event 6",
      date: "25 Sep 2024",
      time: "11 AM",
      organizedBy: "Organizer 6",
    },
  ];

  const handleViewClick = (id) => {
    navigate(`/event/${id}`);
  };

  return (
    <div className="event-container">
      <h1 className="header">Events</h1>
      <div className="event-grid">
        {eventsData.map((event) => (
          <div
            key={event.id}
            className="card"
            onClick={() => handleViewClick(event.id)}
          >
            <img className="card-cover" alt={event.title} src={event.image} />
            <div className="card-info">
              <h3 className="card-title">{event.title}</h3>
              <div className="card-datetime">
                <p className="card-date">Date: {event.date}</p>
                <p className="card-time">Time: {event.time}</p>
              </div>
              <p className="organized-by">Description: {event.organizedBy}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCards;
