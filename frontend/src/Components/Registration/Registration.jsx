import React, { useState } from "react";
import { Button, Form, Input, Typography, notification, Select } from "antd";
import axios from "axios";
import { Link } from "react-router-dom"; // Updated import
import "./RegistrationPage.css"; // Ensure this CSS file includes the styles below

const { Title } = Typography;
const { Option } = Select;

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Make the POST request to the backend
      await axios.post("http://localhost:5000/api/signup", {
        email: values.email,
        password: values.password,
        role: values.role,
      });
      // Notify the user of success
      notification.success({ message: "Registration successful" });
      // Redirect or update UI as needed
      // For example, navigate to the login page:
      // window.location.href = '/login';
    } catch (error) {
      notification.error({
        message: "Registration failed",
        description: error.response?.data?.message || "An error occurred",
      });
    }
    setLoading(false);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-image">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
            alt="register"
            className="rounded-image"
          />
        </div>
        <div className="register-form">
          <div className="logo-container">
            <Title level={2} className="logo-text">
              Engineer StudyHub
            </Title>
          </div>
          <Title level={5} className="form-title">
            Create an account
          </Title>
          <Form
            name="register"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="role"
              label="Select your role"
              rules={[{ required: true, message: "Please select your role!" }]}
            >
              <Select size="large" placeholder="Select role">
                <Option value="student">Student</Option>
                <Option value="company">Company</Option>
                <Option value="admin">Admin</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="email"
              label="Email address"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
                {
                  min: 6,
                  message: "Password must be at least 6 characters long",
                },
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="register-button"
                loading={loading}
              >
                Register
              </Button>
            </Form.Item>
            <p className="login-text">
              Already have an account?{" "}
              <Link to="/login" className="link">
                Login here
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
