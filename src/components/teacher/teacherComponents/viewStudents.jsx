import React from "react";
import {useSelector} from 'react-redux'
import Students from "./list/students";



export default function ViewStudents({copyComp2}) {
  const currentStudent = useSelector((state) => state.courses.Students);
  return (
    <div className="student-overview-container">

      <div className="search-students">
        
      
        <div className="focused-wrapper">
          <div className="student-list-dissapear">
          <h1>{currentStudent}</h1>
      {copyComp2}
      </div>
          <div className="side-border-teacher">
            <Students />
          </div>
        </div>
      </div>
    </div>
  );
}
