import React from "react";
import dayjs from "dayjs"; // Ensure you have dayjs installed
import { Card, Button, Tag, Typography } from "antd";

const { Title, Text } = Typography;

function JobCard(props) {
  // Calculate the number of days since the job was posted
  const dateNow = dayjs(Date.now());
  const diffInDays = dateNow.diff(props.postedOn, "day");

  return (
    <div style={{ margin: "20px" }}>
      <Card
        hoverable
        style={{ borderRadius: "8px", border: "1px solid #d9d9d9" }}
        className="shadow-lg"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1 }}>
            <Title level={4}>
              {props.title} - {props.company}
            </Title>
            <Text>
              {props.type} &#x2022; {props.experience} &#x2022; {props.location}
            </Text>
            <div style={{ marginTop: "10px" }}>
              {props.skills?.map((skill) => (
                <Tag key={skill} color="blue">
                  {skill}
                </Tag>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Text type="secondary">
              Posted{" "}
              {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago
            </Text>
            <a href={props.Job_link} target="_blank" rel="noopener noreferrer">
              <Button type="primary">Apply</Button>
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default JobCard;
