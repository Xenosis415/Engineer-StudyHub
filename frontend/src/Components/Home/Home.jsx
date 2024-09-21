import React from "react";
import { Button, Layout } from "antd";
import "./Home.css";
import Highlight from "./Highlight";

const { Content } = Layout;

const Home = () => {
  return (
    <div>
      <Layout className="hero-layout">
        {/* Hero Section */}
        <Content className="hero-content">
          <div className="hero-text">
            <h1>Empower Your Engineering Journey</h1>
            <p>
              Access the Best Learning Material, Exam Preparation, and Career
              Guidance for Engineering Students.
            </p>
            <div className="hero-buttons">
              <Button type="primary" size="large" href="#get-started">
                Get Started
              </Button>
              <Button
                type="default"
                size="large"
                href="#learn-more"
                style={{ marginLeft: "10px", color: "#000" }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </Content>
      </Layout>
      <Highlight/>
    </div>
  );
};

export default Home;
