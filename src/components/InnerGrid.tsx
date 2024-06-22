import React, { useState } from "react";
interface innerGridProps {
  values: number[];
  index: number;
  handleChange: (i: number, index: number, value: number) => void;
}
export const InnerGrid: React.FC<innerGridProps> = ({
  values,
  index,
  handleChange,
}) => {
  const gridContainer: any = {
    display: "grid",
    gridTemplateColumns: "80px 80px 80px",
    gridTemplateRows: "80px 80px 80px",
    gap: "1px",
    backgroundColor: "#2196F3",
    padding: "1px",
    width: "250px",
    height: "250px",
  };
  const gridItemStyle: any = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "1px solid rgba(0, 0, 0, 0.8)",
    marginLeft: "2px",
    marginRigt: "2px",
    fontSize: "30px",
    textAlign: "center",

    // width: "160px",
  };
  const inputCss: any = {
    height: "80px",
    width: "80px",
    textAlign: "center",
  };
  //   console.log("values are ", values);

  //   const handleClick = () => {
  //     setValue(1000);
  //   };

  return (
    <div className="flex justify-center ">
      <div className="flex">
        {values.map((value, i) => (
          <div key={i}>
            <input
              style={inputCss}
              type="number"
              value={value}
              onChange={(e) => {
                handleChange(index, i, parseInt(e.target.value));
              }}
            ></input>
          </div>
        ))}
      </div>
    </div>
  );
};
