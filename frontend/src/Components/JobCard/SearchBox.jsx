import React, { useState } from "react";
import { Input, Select, Space } from "antd";

const { Search } = Input;

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({
    experience: "",
    jobType: "",
    jobMode: "",
    location: "",
    salary: "",
  });

  const onSearch = (value) => {
    console.log("Search text:", value);
    console.log("Filters:", filters);
    // Handle search logic here
  };

  const handleChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
    console.log(`Selected ${key}:`, value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <Search
        placeholder="Search for jobs or candidates"
        enterButton
        size="large"
        onSearch={onSearch}
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      />
      <Space style={{ margin: 20 }}>
        <Select
          defaultValue="Experience"
          style={{ width: 120 }}
          onChange={(value) => handleChange("experience", value)}
          options={[
            { value: "Fresher", label: "Fresher" },
            { value: "1-2 Years", label: "1-2 Years" },
            { value: "3-4 Years", label: "3-4 Years" },
            { value: "5-6 Years", label: "5-6 Years" },
            { value: "7-8 Years", label: "7-8 Years" },
            { value: "9-10 Years", label: "9-10 Years" },
            { value: "10+ Years", label: "10+ Years" },
          ]}
        />
        <Select
          defaultValue="Job Type"
          style={{ width: 120 }}
          onChange={(value) => handleChange("jobType", value)}
          options={[
            { value: "Part Time", label: "Part Time" },
            { value: "Full Time", label: "Full Time" },
          ]}
        />
        <Select
          defaultValue="Job Mode"
          style={{ width: 120 }}
          onChange={(value) => handleChange("jobMode", value)}
          options={[
            { value: "On-Site", label: "On-Site" },
            { value: "Hybrid", label: "Hybrid" },
            { value: "Work From Home", label: "Work From Home" },
          ]}
        />
        <Select
          defaultValue="Location"
          style={{ width: 120 }}
          onChange={(value) => handleChange("location", value)}
          options={[
            { value: "Noida", label: "Noida" },
            { value: "Gurgaon", label: "Gurgaon" },
            { value: "Chennai", label: "Chennai" },
            { value: "Delhi", label: "Delhi" },
            { value: "Mumbai", label: "Mumbai" },
            { value: "Pune", label: "Pune" },
            { value: "Hyderabad", label: "Hyderabad" },
            { value: "Bangalore", label: "Bangalore" },
            { value: "Kolkata", label: "Kolkata" },
            { value: "Mysuru", label: "Mysuru" },
            { value: "Surat", label: "Surat" },
            { value: "South Delhi", label: "South Delhi" },
          ]}
        />
        <Select
          defaultValue="Salary"
          style={{ width: 200 }}
          onChange={(value) => handleChange("salary", value)}
          options={[
            {
              value: "Below > 5,00,000 lakhs",
              label: "Below > 5,00,000 lakhs",
            },
            {
              value: "5,00,000 - 10,00,000 lakhs",
              label: "5,00,000 - 10,00,000 lakhs",
            },
            {
              value: "10,00,000 - 15,00,000 lakhs",
              label: "10,00,000 - 15,00,000 lakhs",
            },
            {
              value: "15,00,000 - 25,00,000 lakhs",
              label: "15,00,000 - 25,00,000 lakhs",
            },
            {
              value: "25,00,000 lakhs < above",
              label: "25,00,000 lakhs < above",
            },
          ]}
        />
      </Space>
    </div>
  );
};

export default SearchBox;
