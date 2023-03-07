import React from "react";
import "./Statistic.css";

function Statistika({ stats, title }) {
  return (
    <>
      <section className="statistics">
        <div className="box">
          <h2 className="title">Upload stats</h2>

          <ul className="stat-list">
            <li className="item1">
              <span className="label">.docs</span>
              <span className="percentage">4%</span>
            </li>
            <li className="item2">
              <span className="label">.mp3</span>
              <span className="percentage">14%</span>
            </li>
            <li className="item3">
              <span className="label">.pdf</span>
              <span className="percentage">41%</span>
            </li>
            <li className="item4">
              <span className="label">.mp4</span>
              <span className="percentage">12%</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Statistika;
