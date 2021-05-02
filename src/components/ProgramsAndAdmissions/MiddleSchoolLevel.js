import React from "react";
import SchoolLevels from "./SchoolLevel";
import { middleschooldata } from "./SchoolLevelData";

const MiddleSchoolLevel = () => {
  return (
    <div>
      {middleschooldata.map((item, index) => {
        return (
          <SchoolLevels
            key={index}
            title={item.title}
            topdetail={item.topdetail}
            image1={item.image1}
            image2={item.image2}
            footdetail={item.footdetail}
          />
        );
      })}
    </div>
  );
};

export default MiddleSchoolLevel;
