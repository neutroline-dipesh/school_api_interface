import React from "react";
import SchoolLevels from "./SchoolLevel";
import { preschooldata } from "./SchoolLevelData";
import "../../assets/css/imagehover.css";

const PreSchoolLevel = () => {
  return (
    <div>
      {preschooldata.map((item, index) => {
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

export default PreSchoolLevel;
