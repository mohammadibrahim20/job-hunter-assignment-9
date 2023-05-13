import {
  faCircleDollarToSlot,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const SingleJob = ({ singleJob }) => {
  const {
    job_title,
    company_name,
    company_logo,
    remote_or_onsite,
    fulltime_or_parttime,
    id,
    contact_information,
    salary,
  } = singleJob;
  const handleJobsDetails = (id) => {
    localStorage.setItem('job', id);
  };

  return (
    <div className="border rounded-lg p-10">
      <div className="">
        <img className="h-16" src={company_logo} alt="" />
      </div>
      <div>
        <h2 className="text-2xl font-bold my-2"> {job_title} </h2>
        <p className="font-semibold">{company_name}</p>
        <div className="flex gap-5 my-4 ">
          <p className="border-2 tracking-wide border-purple-500  px-5 py-1 rounded-md  color-my font-semibold text-lg">
            {remote_or_onsite}
          </p>
          <p className="border-2 tracking-wide border-purple-500  px-5 py-1 rounded-md  color-my font-semibold text-lg">
            {fulltime_or_parttime}
          </p>
        </div>
        <div className="md:flex gap-5 text-xs font-medium">
          <p className="text-gray-700 pt-2">
            <FontAwesomeIcon
              className="mr-2"
              icon={faLocationDot}
            ></FontAwesomeIcon>
            {contact_information.address}
          </p>
          <p className="text-gray-700 pt-2">
            <FontAwesomeIcon className="mr-2" icon={faCircleDollarToSlot} />
            {salary}
          </p>
        </div>
      </div>
      <div>
        <button className="pt-10 pb-8">
          <Link
            onClick={() => handleJobsDetails(id)}
            to={`/${id}`}
            className="my-btn"
          >
            View Details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SingleJob;
