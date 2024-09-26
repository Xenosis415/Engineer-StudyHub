import React, { useState,useRef } from 'react';
import { Button, Form, Checkbox, Select, Upload, Input, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const AddResource = ({ onClose,onSubmit }) => {


  const [university, setUniversity] = useState("");
  const [branch, setBranch] = useState("");
  const [subject, setSubject] = useState("");
  const [semester, setSemester] = useState("");
  const [pyqFile, setPyqFile] = useState(null); // State for file input
  const [noteFile, setNoteFile] = useState(null);
  const [title, setTitle] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const fileInputRef = useRef(null); 
  const fileInputRefs = useRef(null); 
  const fileInputRefImage = useRef(null); 
  const [videoTitle , setVideoTitle]=useState("");
  const [videoDes , setVideoDes]=useState("");
  const [videoLink , setVideoLink]=useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [thumbnailPreview, setThumbnailPreview] = useState(null); 
  const { Option } = Select;
  const [form] = Form.useForm(); 

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
      setPyqFile(file);
    } else {
      message.error("Please select a valid PDF file.");
      fileInputRef.current.value = ""; // Clear file input
    }
  };

  const handleFileNoteChanges = (info) => {
    const file = info.fileList[0]?.originFileObj;
    if (file && file.type === "application/pdf") {
      setNoteFile(file)
    } else {
      message.error("Please select a valid PDF file.");
      fileInputRefs.current.value = ""; // Clear file input
    }
  };
  const handleThumbnailChange = (info) => {
    const file = info.fileList[0]?.originFileObj;
    
    if (file && file.type.startsWith('image/')) {
      // Create a URL for the image file to preview it
      const imageURL = URL.createObjectURL(file);
      setThumbnailPreview(imageURL);
    } else {
      fileInputRefImage.current.value=""
      message.error('Please upload a valid image file for the thumbnail.');
    }
  };
  const handleSubmit = () => {
    const newSubmission = {
      university,
      branch,
      subject,
      semester,
      title,
      noteTitle,
      videoTitle,
      videoDes,
      videoLink,
      thumbnailPreview:thumbnailPreview,
      file: pyqFile,
      fileNote : noteFile
    };

    onSubmit(newSubmission); 
    message.success("Resource added successfully!");
    console.log("gehfvh vd vsvbh");
     
    // Clear input fields
    form.resetFields(); 
  
  };

  return (
    <div className='add-container'>
      <h1>Add Resources</h1>
      <div className='add-content'>
        <Form
          onFinish={handleSubmit}
          form={form}
          layout="vertical"
        >
          {/* university  */}

            <Form.Item
            label="University"
            name="university"
            rules={[{ required: true, message: 'Please select the Univercity!' }]}
          >
            <Select placeholder="Select University" value={university} onChange={setUniversity}>
            <Option value="RGPV">Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)</Option>
            <Option value="DAVV">Devi Ahilya Vishwavidyalaya (DAVV)</Option>
            <Option value="IITD">Indian Institute of Technology Delhi (IITD)</Option>
            <Option value="IITB">Indian Institute of Technology Bombay (IITB)</Option>
            <Option value="IIMB">Indian Institute of Management Bangalore (IIMB)</Option>
            <Option value="DU">University of Delhi (DU)</Option>
            <Option value="JNU">Jawaharlal Nehru University (JNU)</Option>
            <Option value="XYZ">XYZ University</Option>
            </Select>
          </Form.Item>

          {/* Branch  */}

           <Form.Item
            label="Branch"
            name="branch"
            rules={[{ required: true, message: 'Please select the semester!' }]}
          >
            <Select placeholder="Select Branch" value={branch} onChange={setBranch}>
            <Option value="">Select a Branch</Option>
            <Option value="EC">Electronics and Communication</Option>
            <Option value="CS">Computer Science</Option>
            <Option value="ME">Mechanical Engineering</Option>
            <Option value="CE">Civil Engineering</Option>
            <Option value="IT">Information Technology</Option>
            <Option value="EE">Electrical Engineering</Option>
            <Option value="BT">Biotechnology</Option>
            <Option value="AE">Aerospace Engineering</Option>
            </Select>
          </Form.Item>

              {/* semester  */}

          <Form.Item
            label="Semester"
            name="semester"
            rules={[{ required: true, message: 'Please select the semester!' }]}
          >
            <Select placeholder="Select Semester"  value={semester} onChange={setSemester}>
            <Option value="1st Semester">1st Semester</Option>
            <Option value="2nd Semester">2nd Semester</Option>
            <Option value="3rd Semester">3rd Semester</Option>
            <Option value="4th Semester">4th Semester</Option>
            <Option value="5th Semester">5th Semester</Option>
            <Option value="6th Semester">6th Semester</Option>
            <Option value="7th Semester">7th Semester</Option>
            <Option value="8th Semester">8th Semester</Option>
            </Select>
          </Form.Item>

         {/* subject  */}

          <Form.Item
            label="Subject"
            name="subject"
            rules={[{ required: true, message: 'Please select the subject!' }]}
          >
            <Select placeholder="Select Subject"  value={subject} onChange={setSubject}>
            <Option value="Data Structures">Data Structures</Option>
            <Option value="Algorithms">Algorithms</Option>
            <Option value="Operating Systems">Operating Systems</Option>
            <Option value="Database Systems">Database Systems</Option>
            <Option value="Computer Networks">Computer Networks</Option>
            <Option value="Software Engineering">Software Engineering</Option>
            <Option value="Machine Learning">Machine Learning</Option>
            <Option value="Artificial Intelligence">Artificial Intelligence</Option>
            </Select>
          </Form.Item>
 
         {/* Resource type checkbox  */}

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
         
         {/* pyq  */}

          {selectedOptions.includes("PYQ") && (
            <>
            <Form.Item
                label="PYQ Title"
                name="pyqtitle"
                rules={[{ required: true, message: 'Please provide the PYQ Title!' }]}
              >
                <Input placeholder="Enter Notes Title" value={title}  onChange={(e) => setTitle(e.target.value)}  />
              </Form.Item>
              <Form.Item
                label="Upload PYQ PDF"
                name="pyqFile"
                rules={[{ required: true, message: 'Please upload the PYQ PDF!' }]}
              >
               <Upload  ref={fileInputRef}
                onChange={handleFileChange} beforeUpload={() => false}>
               <Button icon={<UploadOutlined />}>Click to Upload</Button>
               </Upload>
              </Form.Item>
            </>
          )}

           {/* notes  */} 

          {selectedOptions.includes("Notes") && (    
            <>
              <Form.Item
                label="Notes Title"
                name="notestitle"
                rules={[{ required: true, message: 'Please provide the notes Title !' }]}
              >
                <Input placeholder="Enter Notes Title"  value={noteTitle}  onChange={(e) => setNoteTitle(e.target.value)}/>
              </Form.Item>

              <Form.Item
                label="Upload Notes PDF"
                name="notesFile"
                rules={[{ required: true, message: 'Please upload the notes PDF!' }]}
              >
                <Upload ref={fileInputRefs} onChange={handleFileNoteChanges} beforeUpload={() => false}>
                  <Button icon={<UploadOutlined />}>Click to Upload PDF</Button>
                </Upload>
              </Form.Item>
            </>
          )}

          {/* Video  */}

          {selectedOptions.includes('Video') && (
            <>
              <Form.Item
                label="Video Title"
                name="videoTitle"
                rules={[{ required: true, message: 'Please provide the video title!' }]}
              >
                <Input placeholder="Enter Video Title" value={videoTitle}  onChange={(e) => setVideoTitle(e.target.value)} />
              </Form.Item>

              <Form.Item
                label="Video Description"
                name="videoDescription"
                rules={[{ required: true, message: 'Please provide the video description!' }]}
              >
                <Input placeholder="Enter Video Description"  value={videoDes}  onChange={(e) => setVideoDes(e.target.value)}  />
              </Form.Item>

              <Form.Item
                label="YouTube Video Link"
                name="videoLink"
                rules={[{ required: true, message: 'Please provide the YouTube video link!' }]}
              >
                <Input placeholder="Enter YouTube Video Link" value={videoLink}  onChange={(e) => setVideoLink(e.target.value)} />
              </Form.Item>

              <Form.Item
                label="Upload Thumbnail for Video"
                name="videoThumbnail"
                rules={[{ required: true, message: 'Please upload the video thumbnail!' }]}
              >
                <Upload ref={fileInputRefImage} beforeUpload={() => false} onChange={handleThumbnailChange}>
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
