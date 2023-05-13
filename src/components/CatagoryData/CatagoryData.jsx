import React from "react";

const CatagoryData = ({ singleJob }) => {
  const { categoryName, logo, jobVacancyCount } = singleJob;
  return (
    <div className="p-10 bg-custom rounded-md ">
      <div className=" w-16 h-16 rounded-md bg-purple-100 drop-shadow-md flex justify-center items-center">
        <img className="w-9 " src={logo} alt="" />
      </div>
      <h4 className="font-semibold text-2xl mt-5"> {categoryName} </h4>
      <p> {jobVacancyCount}+ Jobs Available</p>
    </div>
  );
};

export default CatagoryData;
