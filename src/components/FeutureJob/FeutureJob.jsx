import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleJob from "../SingleJob/SingleJob";

const FeutureJob = () => {
  const [isWork, setWork] = useState(false)
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("jobData.json");
      const datas = await res.json();
      setData(datas)
    };
    loadData();
  }, []);
  console.log(isWork)
  const showAllJobs = () => {
    setWork(true)
  };

  return (
    <div className="container">
      <h1 className="my-title">Featured Jobs</h1>
      <p className="text-center text-lg mb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-2 gap-5">
        {isWork ? 
        data.map((singleJob) => ( <SingleJob key={singleJob.id} singleJob={singleJob}></SingleJob>)) 
        :        
        data.slice(0,4).map((singleJob) => ( <SingleJob key={singleJob.id} singleJob={singleJob}></SingleJob>)) 
        } 
      </div>
      <div className="text-center my-8">
        {
          isWork ? ""
          : <Link onClick={showAllJobs} className="my-btn">
          See All Jobs
        </Link> 
        }
      </div>
    </div>
  );
};

export default FeutureJob;
