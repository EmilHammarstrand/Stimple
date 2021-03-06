import React from "react";

export default function Stats() {
  const example = {
		$rand: Math.floor(Math.random() * 100) + 1
	
	};

  return (
    <div className='stats-wrapper'>
        <h2 >Total Progress</h2>
      <div className="set-size charts-container">
        <div  style={example} className="pie-wrapper progress-45 style-2">
          <span className="label">
            45<span className="smaller">%</span>
          </span>
          <div className="pie">
            <div className="left-side half-circle"></div>
            <div className="right-side half-circle"></div>
          </div>
          <div className="shadow"></div>
        </div>
      </div>
    </div>
  );
}
