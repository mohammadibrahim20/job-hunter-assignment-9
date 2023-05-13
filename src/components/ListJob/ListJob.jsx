import {
  faCircleDollarToSlot,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const ListJob = ({ jobapply }) => {
 
  const {
    remote_or_onsite,
    contact_information,
    id,
    job_title,
    fulltime_or_parttime,
    company_name,
    salary,
    company_logo,
  } = jobapply;

  return (
    <div className="border rounded-md flex justify-between mb-5">
      <div className="flex items-center rounded-md m-8 p-10 bg-gray-200 w-52 h-52">
        <img className="object-cover" src={company_logo} alt="" />
      </div>
      <div className="flex flex-1 items-center justify-between pr-12">
        <div>
          <h2 className="text-3xl font-bold">{job_title}</h2>
          <p className="text-2xl font-semibold">{company_name}</p>
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
          <Link 
          to={`/${id}`}
          className="my-btn">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ListJob;
