import React, { useState } from "react";
import "../styles/grid.scss";

const rowLen = 25;
const colLen = 25;
// set initial grid state to array of zeros
// for each element in a row initialize array with from() method to insert zeros on column

const Grid = () => {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < rowLen; i++) {
      rows.push(Array.from(Array(colLen), () => 0));
    }
    return rows;
  });

  return (
    <div className="grid-div">
      {grid.map((r) => r.map((c) => <div className="cells"></div>))}
    </div>
  );
};

export default Grid;
