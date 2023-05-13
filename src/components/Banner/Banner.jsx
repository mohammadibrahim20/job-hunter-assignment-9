import React from "react";
import Person from "../../Images/person.png";
const Banner = () => {
  return (
    <section className="bg-custom ">
      <div className="container flex flex-wrap pt-6  md:pt-32">
        <div className="md:w-6/12">
          <div className="text-4xl md:text-7xl font-bold pt-8">
            <p className="md:my-4">One Step </p>
            <p className="md:my-4">Closer To Your </p>
            <p className="md:my-4 color-my">Dream Job </p>
          </div>
          <p className="md:mr-24 mt-6 mb-8"> 
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="my-btn">Get Started</button>
        </div>
        <div className="md:w-6/12 ">
            <img className="bg-bottom" src={Person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
