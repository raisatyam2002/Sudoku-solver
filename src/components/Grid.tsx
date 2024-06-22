import { InnerGrid } from "./InnerGrid";
import { useState } from "react";
import { initialGrid } from "../utils/gridGenerator";
import { check } from "../utils/check";
export const Grid = () => {
  //   const initialGrid = Array.from({ length: 9 }, () => Array(9).fill(0));
  //   console.log("intiail is ", initialGrid);

  const [grid, setGrid] = useState(initialGrid);

  //   const gridContainer: any = {
  //     display: "grid",
  //     gridTemplateColumns: "250px 250px 250px",
  //     gridTemplateRows: "250px 250px 250px",
  //     gap: "1px",
  //     backgroundColor: "#2196F3",
  //     padding: "10px",
  //     width: "780px",
  //   };
  //   const gridItemStyle: any = {
  //     backgroundColor: "rgba(255, 255, 255, 0.8)",
  //     border: "1px solid rgba(0, 0, 0, 0.8)",
  //     marginLeft: "2px",
  //     marginRigt: "2px",
  //     fontSize: "30px",
  //     textAlign: "center",

  //     // width: "160px",
  //   };
  //   console.log(grid[0]);

  //   const updateGrid = (row: number, col: number, value: number) => {
  //     console.log("row is", row, " col is ", col, " value is ", value);

  //     setGrid((prevGrid) => {
  //       const newGrid = [...prevGrid];

  //       newGrid[row][col] = value;
  //       console.log("new entry", newGrid[row][col]);

  //       return newGrid;
  //     });
  //   };

  const handleChange = (row: number, col: number, value: number) => {
    setGrid((prevGrid) => {
      const newGrid = [...prevGrid];
      newGrid[row][col] = value;
      return newGrid;
    });
  };

  return (
    <div className="flex justify-center border-4 w-90v h-90v mx-auto mt-10">
      <div>
        {grid.map((_, index) => (
          <div key={index}>
            <InnerGrid
              key={index}
              values={grid[index]}
              handleChange={handleChange}
              index={index}
            />
          </div>
        ))}
        <button
          className="bg-blue-400"
          onClick={() => {
            if (check(grid)) {
              alert("wohho");
            } else {
              alert("oops");
            }
          }}
        >
          submit
        </button>
      </div>
    </div>
  );
};
