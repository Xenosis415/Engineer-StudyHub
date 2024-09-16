import React from "react";
import { Button, Checkbox, Form, Input, Typography, Space, Select } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import "../../styles/LoginPage.css";

const { Title, Link } = Typography;
const { Option } = Select;

const LoginPage = () => (
  <div className="login-container">
    <div className="login-card">
      <div className="login-image">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
          alt="login"
          className="rounded-image"
        />
      </div>
      <div className="login-form">
        <div className="logo-container">
          <Title level={2} className="logo-text">
            Engineer StudyHub
          </Title>
        </div>
        <Title level={5} className="form-title">
          Sign into your account
        </Title>
        <Form
          name="login"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={(values) => console.log("Success:", values)}
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
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password size="large" />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ span: 24 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="login-button"
            >
              Login
            </Button>
          </Form.Item>
          <Space direction="vertical" size="small">
            <Link href="#!" className="link">
              Forgot password?
            </Link>
            <p className="signup-text">
              Don't have an account?{" "}
              <Link href="#!" className="link">
                Register here
              </Link>
            </p>
            {/* <div className="footer-links">
              <Link href="#!" className="footer-link">
                Terms of use.
              </Link>
              <Link href="#!" className="footer-link">
                Privacy policy
              </Link>
            </div> */}
          </Space>
        </Form>
      </div>
    </div>
  </div>
);

export default LoginPage;
