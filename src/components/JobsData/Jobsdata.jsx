import React from 'react';

const Jobsdata = ({storeJobData}) => {
    const { job_responsibility, educational_requirements, experiences } = storeJobData;

    console.log(storeJobData)
    return (
        <div className="mt-32 ">
            <p>
              <span className="font-semibold">Job Description:</span>
              {job_responsibility}
            </p>
            <p>
              <span className="font-semibold">Job Responsibility:</span>
             
            </p>
            <p>Educational Requirements:</p>

            <p>Experiences:</p>
          </div>
    );
};

export default Jobsdata;