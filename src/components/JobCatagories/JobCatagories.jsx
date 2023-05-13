import React from "react";
import { useLoaderData } from "react-router-dom";
import CatagoryData from "../CatagoryData/CatagoryData";

const JobCatagories = () => {
  const data = useLoaderData();

  return (
    <div className="container">
      <h1 className="my-title">Job Category List</h1>
      <p className="text-center text-lg mb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-4 gap-5"> 
        {data.map((singleJob) => (
          <CatagoryData key={singleJob.id} singleJob={singleJob}></CatagoryData>
        ))}
      </div>
    </div>
  );
};

export default JobCatagories;
