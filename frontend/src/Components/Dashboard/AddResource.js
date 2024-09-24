import React, { useState,useRef } from 'react';
import { Button, Form, Checkbox, Select, Upload, Input, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const AddResource = ({ onClose,onSubmit }) => {
  const [university, setUniversity] = useState("");
  const [branch, setBranch] = useState("");
  const [subject, setSubject] = useState("");
  const [semester, setSemester] = useState("");
  const [pdfFile, setPdfFile] = useState(null); // State for file input
  const fileInputRef = useRef(null); 

  const [selectedOptions, setSelectedOptions] = useState([]);
  const { Option } = Select;

  const onCheckboxChange = (checkedValues) => {
    setSelectedOptions(checkedValues);
  };

  const validateCheckboxGroup = (rule, value) => {
    if (!value || value.length < 1) {
      return Promise.reject(new Error('Please select at least one resource type!'));
    }
    return Promise.resolve();
  };

  const handleFileChange = (info) => {
    const file = info.fileList[0]?.originFileObj;
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      message.error("Please select a valid PDF file.");
      fileInputRef.current.value = ""; // Clear file input
    }
  };

  const handleSubmit = () => {
    const newSubmission = {
      university,
      branch,
      subject,
      semester,
      file: pdfFile,
    };

    onSubmit(newSubmission); // Pass the new submission back to Dashboard
    message.success("Resource added successfully!");
    
    // Clear input fields
    setUniversity("");
    setBranch("");
    setSubject("");
    setSemester("");
    setPdfFile(null);
    fileInputRef.current.value = ""; // Reset file input
    onClose(); // Close the modal
  };

  return (
    <div className='add-container'>
      <h1>Add Resources</h1>
      <div className='add-content'>
        <Form
          onFinish={handleSubmit}
          // onFinishFailed={onFinishFailed}
          layout="vertical"
        >
            <Form.Item
            label="University"
            // name="univercity"
            // rules={[{ required: true, message: 'Please select the Univercity!' }]}
          >
            <Select placeholder="Select Univercity" value={university} onChange={setUniversity}>
              <Option value="1st">RGPV</Option>
              <Option value="2nd">DAVV</Option>
              <Option value="3rd">xyz</Option>
              <Option value="4th">abc</Option>
            </Select>
          </Form.Item>


           <Form.Item
            label="Branch"
            // name="Branch"
            // rules={[{ required: true, message: 'Please select the semester!' }]}
          >
            <Select placeholder="Select Branch" value={branch} onChange={setBranch}>
              <Option value="1st"> </Option>
              <Option value="2nd">CS</Option>
              <Option value="3rd"></Option>
              <Option value="4th">4th Semester</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Semester"
            // name="semester"
            // rules={[{ required: true, message: 'Please select the semester!' }]}
          >
            <Select placeholder="Select Semester"  value={semester} onChange={setSemester}>
              <Option value="1st">1st Semester</Option>
              <Option value="2nd">2nd Semester</Option>
              <Option value="3rd">3rd Semester</Option>
              <Option value="4th">4th Semester</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Subject"
            // name="subject"
            // rules={[{ required: true, message: 'Please select the subject!' }]}
          >
            <Select placeholder="Select Subject"  value={subject} onChange={setSubject}>
              <Option value="math">Mathematics</Option>
              <Option value="physics">Physics</Option>
              <Option value="cs">Computer Science</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Resource Type"
            name="resourceType"
            rules={[{ validator: validateCheckboxGroup }]}
          >
            <Checkbox.Group onChange={onCheckboxChange}>
              <Checkbox value="PYQ">PYQ</Checkbox>
              <Checkbox value="Notes">Notes</Checkbox>
              <Checkbox value="Video">Video</Checkbox>
            </Checkbox.Group>
          </Form.Item>

          {selectedOptions.includes("PYQ") && (
            <>
            <Form.Item
                label="PYQ Title"
                name="pyqtitle"
                rules={[{ required: true, message: 'Please provide the PYQ Title!' }]}
              >
                <Input placeholder="Enter Notes Title" />
              </Form.Item>
              <Form.Item
                label="Upload PYQ PDF"
                // name="pyqFile"
                rules={[{ required: true, message: 'Please upload the PYQ PDF!' }]}
              >
               <Upload onChange={handleFileChange} beforeUpload={() => false}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
              </Form.Item>
            </>
          )}

          {selectedOptions.includes("Notes") && (    
            <>
              <Form.Item
                label="Notes Title"
                name="notesHeading"
                rules={[{ required: true, message: 'Please provide the notes Title !' }]}
              >
                <Input placeholder="Enter Notes Title" />
              </Form.Item>

              <Form.Item
                label="Upload Notes PDF"
                name="notesFile"
                rules={[{ required: true, message: 'Please upload the notes PDF!' }]}
              >
                <Upload beforeUpload={() => false}>
                  <Button icon={<UploadOutlined />}>Click to Upload PDF</Button>
                </Upload>
              </Form.Item>
            </>
          )}

          {selectedOptions.includes('Video') && (
            <>
              <Form.Item
                label="Video Title"
                name="videoTitle"
                rules={[{ required: true, message: 'Please provide the video title!' }]}
              >
                <Input placeholder="Enter Video Title" />
              </Form.Item>

              <Form.Item
                label="Video Description"
                name="videoDescription"
                rules={[{ required: true, message: 'Please provide the video description!' }]}
              >
                <Input placeholder="Enter Video Description" />
              </Form.Item>

              <Form.Item
                label="YouTube Video Link"
                name="videoLink"
                rules={[{ required: true, message: 'Please provide the YouTube video link!' }]}
              >
                <Input placeholder="Enter YouTube Video Link" />
              </Form.Item>

              <Form.Item
                label="Upload Thumbnail for Video"
                name="videoThumbnail"
                rules={[{ required: true, message: 'Please upload the video thumbnail!' }]}
              >
                <Upload beforeUpload={() => false}>
                  <Button icon={<UploadOutlined />}>Click to Upload Thumbnail</Button>
                </Upload>
              </Form.Item>
            </>
          )}

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddResource;
