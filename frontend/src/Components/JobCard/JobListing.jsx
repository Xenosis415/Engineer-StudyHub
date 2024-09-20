import React from "react";
import "./JobListing.css";
import Navbar from "./Navbar";
import SearchBox from "./SearchBox";
import Card from "./Card";

function JobListing() {
  return (
    <div>
      <Navbar />
      <SearchBox />
      <Card />
    </div>
  );
}

export default JobListing;
