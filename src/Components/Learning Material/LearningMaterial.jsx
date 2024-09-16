import React, { useState } from "react";
import { Select, List, Card } from "antd";

const { Option } = Select;

const LearningMaterial = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [materials, setMaterials] = useState([]);

  const courses = [
    { value: "btech_1st_sem", label: "BTECH 1st Sem All Branch" },
    { value: "btech_2nd_sem", label: "BTECH 2nd Sem All Branch" },
    { value: "btech_3rd_sem", label: "BTECH 3rd Sem All Branch" },
    { value: "btech_4th_sem", label: "BTECH 4th Sem All Branch" },
    { value: "btech_5th_sem", label: "BTECH 5th Sem All Branch" },
    { value: "btech_6th_sem", label: "BTECH 6th Sem All Branch" },
    { value: "btech_7th_sem", label: "BTECH 7th Sem All Branch" },
    { value: "btech_8th_sem", label: "BTECH 8th Sem All Branch" },
  ];

  const subjects = {
    btech_1st_sem: [
      "Mathematics",
      "Physics",
      "English",
      "Computer Fundamentals",
    ],
    btech_2nd_sem: ["Mathematics", "Physics", "CAO", "DTE"],
    btech_3rd_sem: [
      "Java",
      "Operating System",
      "Computer Architecture",
      "Computer Networks",
    ],
    btech_4th_sem: ["(DBMS)Database Management System", "ACN", "DSA", "DOS"],
    btech_5th_sem: ["Artificial Intelligence", "DM", "Advanced DSA", "M3"],
    btech_6th_sem: ["Data Science", "Machine Learning", "Cloud Computing"],
    btech_7th_sem: ["Data Mining", "Data Warehousing", "Data Visualization"],
    btech_8th_sem: [
      "Data Engineering",
      "Data Science",
      "Python",
      "Computer Networks and Security",
      "Waste Management",
    ],
  };

  const learningMaterials = {
    Mathematics: ["PYQs", "Notes", "Syllabus", "Video Lectures"],
    Physics: ["PYQs", "Notes", "Syllabus", "Video Lectures"],
    English: ["PYQs", "Notes", "Syllabus", "Video Lectures"],
    "Computer Fundamentals": ["PYQs", "Notes", "Syllabus", "Video Lectures"],
    CAO: ["PYQs", "Notes", "Syllabus", "Video Lectures"], // Computer Architecture and Organization
    DTE: ["PYQs", "Notes", "Syllabus", "Video Lectures"], // Digital and Telecommunication Engineering
    Java: ["PYQs", "Notes", "Syllabus", "Video Lectures"],
    "Operating System": ["PYQs", "Notes", "Syllabus", "Video Lectures"],
    "Computer Architecture": ["PYQs", "Notes", "Syllabus", "Video Lectures"],
    "Computer Networks": ["PYQs", "Notes", "Syllabus", "Video Lectures"],
    "(DBMS)Database Management System": [
      "PYQs",
      "Notes",
      "Syllabus",
      "Video Lectures",
    ],
    ACN: ["PYQs", "Notes", "Syllabus", "Video Lectures"], // Advanced Computer Networks
    DSA: ["PYQs", "Notes", "Syllabus", "Video Lectures"], // Data Structures and Algorithms
    DOS: ["PYQs", "Notes", "Syllabus", "Video Lectures"], // Distributed Operating Systems
    "Artificial Intelligence": ["PYQs", "Notes", "Syllabus", "Video Lectures"],
    DM: ["PYQs", "Notes", "Syllabus", "Video Lectures"], // Discrete Mathematics
    "Advanced DSA": ["PYQs", "Notes", "Syllabus", "Video Lectures"],
    M3: ["PYQs", "Notes", "Syllabus", "Video Lectures"], // Mathematics 3
    "Data Science": ["PYQs", "Notes", "Syllabus", "Video Lectures"],
    "Machine Learning": ["PYQs", "Notes", "Syllabus", "Video Lectures"],
    "Cloud Computing": ["PYQs", "Notes", "Syllabus", "Video Lectures"],
    "Data Mining": ["PYQs", "Notes", "Syllabus", "Video Lectures"],
    "Data Warehousing": ["PYQs", "Notes", "Syllabus", "Video Lectures"],
    "Data Visualization": ["PYQs", "Notes", "Syllabus", "Video Lectures"],
    "Data Engineering": ["PYQs", "Notes", "Syllabus", "Video Lectures"],
    Python: ["PYQs", "Notes", "Syllabus", "Video Lectures"],
    "Computer Networks and Security": [
      "PYQs",
      "Notes",
      "Syllabus",
      "Video Lectures",
    ],
    "Waste Management": ["PYQs", "Notes", "Syllabus", "Video Lectures"],
  };

  const handleCourseChange = (value) => {
    setSelectedCourse(value);
    setSelectedSubject(null); // Reset subject on course change
    setMaterials([]);
  };

  const handleSubjectChange = (value) => {
    setSelectedSubject(value);
    setMaterials(learningMaterials[value] || []);
  };

  return (
    <div>
      <h2>Learning Material</h2>
      <Select
        placeholder="Select Course"
        style={{ width: 300, marginBottom: 20 }}
        onChange={handleCourseChange}
        value={selectedCourse}
      >
        {courses.map((course) => (
          <Option key={course.value} value={course.value}>
            {course.label}
          </Option>
        ))}
      </Select>

      <Select
        placeholder="Select Subject"
        style={{ width: 300, marginBottom: 20, marginLeft: "20px" }}
        onChange={handleSubjectChange}
        value={selectedSubject}
        disabled={!selectedCourse} // Disable subject dropdown until a course is selected
      >
        {selectedCourse &&
          subjects[selectedCourse].map((subject) => (
            <Option key={subject} value={subject}>
              {subject}
            </Option>
          ))}
      </Select>

      {materials.length > 0 && (
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={materials}
          renderItem={(item) => (
            <List.Item>
              <Card title={item}>
                {item} for {selectedSubject}
              </Card>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default LearningMaterial;
