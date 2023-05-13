import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ListJob from "../ListJob/ListJob";
import NavBotom from "../NavBotom/NavBotom";
import { getShoppingCart } from "../Util/utilities";

const ApplyJob = () => {
  const applyData = useLoaderData();
  const [applyJob, setApplyJob] = useState(applyData);
  const [filters, setFilter] = useState([])

  
  


  useEffect(() => {
    const storeJob = getShoppingCart();
    const savedJob = [];
    for (const id in storeJob) {
      const addJob = applyJob.find((p) => p.id === id);
      if (addJob) {
        savedJob.push(addJob);
      }
    }
    setApplyJob(savedJob);
    setFilter(savedJob);
  }, []);
  const handleRemote = (jobTime)=>{
  
    const remotJob = filters.filter(j => j.remote_or_onsite === jobTime)
    setApplyJob(remotJob);

  }
  const handleAll= ()=>{
  
    
    setApplyJob(filters);

  }
 


  return (
    <div>
      <NavBotom>Applied Jobs</NavBotom>

      <div className="container relative">
        <div className="dropdown inset-y-0 absolute right-7 mt-32">
          <p
            tabIndex={0}
            className="btn bg-gray-100 hover:bg-slate-100 text-black px-7 border-0 m-1"
          >
            Filter By{" "}
            <FontAwesomeIcon
              className="ml-2"
              icon={faArrowDown}
            ></FontAwesomeIcon>
          </p>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link onClick={()=>handleAll()}>All</Link>
            </li>
            <li>
              <Link onClick={()=>handleRemote('Remote')}>Remote Job</Link>
            </li>
            <li>
              <Link onClick={()=>handleRemote('Onsite')}>Onsite</Link>
            </li>
          </ul>
        </div>
      </div>

      <section className="container pt-48">
        
          {applyJob.map((jobapply, index) => ( <ListJob
          key={index}
          jobapply={jobapply}
          ></ListJob>
          ))}
        
      </section>
    </div>
  );
};

export default ApplyJob;
