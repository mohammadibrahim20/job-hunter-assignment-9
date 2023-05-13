import {
  faCalendar,
  faDollarSign,
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import NavBotom from "../NavBotom/NavBotom";
import { addToDb } from "../Util/utilities";

const JobDetails = () => {
  const [jobs, setJobs] = useState([]);

  let { jobId } = useParams();
  const jobsSingleData = useLoaderData();

  useEffect(() => {
    fetch("/jobData.json")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  const handleCartItem = (id) => {
    addToDb(id);
  };
  // const storeJobData = jobs?.filter((job) => job.id === jobId);
  const storeJobData = jobsSingleData.filter((job) => job.id === jobId);
  const {
    remote_or_onsite,
    contact_information,
    job_responsibility,
    job_description,
    experiences,
    educational_requirements,
    job_title,
    company_name,
    id,
    salary,
  } = storeJobData[0];

  return (
    <div>
      <NavBotom>Job Details</NavBotom>
      <div className="container grid grid-cols-3 ">
        <div className="mt-32 col-span-2 ">
          <p>
            <span className="font-semibold">Job Description: </span>
            {job_description}
            <br />
          </p>
          <p className="pt-8">
            <span className="font-semibold">Job Responsibility: </span>
            {job_responsibility}
          </p>
          <p className="font-semibold pt-8">Educational Requirements:</p>
          <p>{educational_requirements}</p>
          <p className="font-semibold pt-8">Experiences:</p>
          <p>{experiences}</p>
        </div>
        <section>
          <div className="mt-32 border rounded-md bg-custom p-8">
            <div>
              <h3 className="text-2xl font-bold">Job Details</h3>
            </div>
            <hr className="border-1 my-2 border-purple-400" />
            <div>
              <FontAwesomeIcon
                className="text-purple-500"
                icon={faDollarSign}
              ></FontAwesomeIcon>
              <span>
                <span className="font-semibold ps-2">Salary : </span>
                {salary}
              </span>
            </div>
            <div className="mt-3">
              <FontAwesomeIcon
                className="text-purple-500"
                icon={faCalendar}
              ></FontAwesomeIcon>
              <span>
                <span className="font-semibold ps-2">Job Title : </span>
                {job_title}
              </span>
            </div>
            <br />
            <div>
              <h3 className="text-2xl font-bold">Contact Information</h3>
            </div>
            <hr className="border-1 my-2 border-purple-400" />
            <div className="mt-3">
              <FontAwesomeIcon
                className="text-purple-500"
                icon={faPhone}
              ></FontAwesomeIcon>
              <span>
                <span className="font-semibold ps-2">Phone : </span>
                {contact_information.phone}
              </span>
            </div>
            <div className="mt-3">
              <FontAwesomeIcon
                className="text-purple-500"
                icon={faEnvelope}
              ></FontAwesomeIcon>
              <span>
                <span className="font-semibold ps-2">Email : </span>
                {contact_information.email}
              </span>
            </div>
            <div className="mt-3">
              <FontAwesomeIcon
                className="text-purple-500"
                icon={faLocation}
              ></FontAwesomeIcon>
              <span>
                <span className="font-semibold ps-2">Address : </span>
                {contact_information.address}
              </span>
            </div>
          </div>
          <Link
            onClick={() => handleCartItem(id)}
            className="btn btn-block bg-my mt-8 mb-32"
          >
            Apply Now
          </Link>
        </section>
      </div>
    </div>
  );
};

export default JobDetails;
