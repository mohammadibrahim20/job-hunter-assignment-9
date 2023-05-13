import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavBotom from "../NavBotom/NavBotom";
import Recharts from "../Recharts/Recharts";

const Stastics = () => {
  return (
    <div>
      <NavBotom>Assignmen Mark</NavBotom>
      <div className="container flex justify-center pt-32">

        <div className="bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 bg-opacity-5 rounded-lg p-7  items-center">
          <h3 className="text-4xl color-my ps-7 pb-5">Assignment Analytics</h3>
          <div className="ps-7 flex items-center pb-5">
            <FontAwesomeIcon className="text-yellow-400 bg-white rounded-full p-3 text-lg" icon={faStar}></FontAwesomeIcon>
            <div className="ps-2">
                <h3 className="text-2xl font-medium ">58.00</h3>
                <p>Average Assignment Mark</p>
            </div>
          </div>
          <Recharts />
        </div>
      </div>
    </div>
  );
};

export default Stastics;
