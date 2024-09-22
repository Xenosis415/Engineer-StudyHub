import React from "react";
import { Button, Carousel, Typography, Row, Col } from "antd";
import "./Home.css";
import Girl from "../../assets/images/Girl.png"
const { Title, Paragraph } = Typography;

const HeroSlider = () => {
  return (
    <Carousel autoplay>
      {/* Slide 1 */}
      <div className="slide-container">
        <Row
          className="slide-content"
          justify="space-between"
          align="middle"
          style={{
            backgroundColor: "#F9F8FF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            margin: 0,
          }}
        >
          <Col span={12}>
            <div className="left-section">
              <Title
                level={1}
                className="slide-heading"
                style={{ fontSize: "56px" }}
              >
                Unlock Your Potential
                <br />
                with Online Learning Materials
              </Title>
              <Paragraph className="slide-title">
                Access curated resources and study materials.
                <br />
                Stay ahead in your learning journey with expert content.
              </Paragraph>
              <div className="buttons">
                <Button
                  type="primary"
                  size="large"
                  style={{
                    backgroundColor: "#1677ff",
                    color: "#fff",
                    marginRight: "10px",
                  }}
                >
                  Get Started
                </Button>
                <Button size="large" style={{}}>
                  Explore More
                </Button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="right-section">
              <img
                src={Girl}
                alt="Student"
                className="student-image"
                style={{ height: "100%", maxWidth:600 }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </Carousel>
  );
};

export default HeroSlider;
