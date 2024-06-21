import React, { useState } from "react";

export const InnerGrid = () => {
  const [value, setValue] = useState<Number>();
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
  };
  const handleClick = () => {
    setValue(1000);
  };
  return (
    <div className="flex justify-center h-">
      <div style={gridContainer}>
        <div style={gridItemStyle} onClick={handleClick}>
          <input
            style={inputCss}
            type="number"
            onChange={() => {
              setValue;
            }}
          ></input>
        </div>
        <div style={gridItemStyle}>2</div>
        <div style={gridItemStyle}>3</div>
        <div style={gridItemStyle}>4</div>
        <div style={gridItemStyle}>5</div>
        <div style={gridItemStyle}>6</div>
        <div style={gridItemStyle}>7</div>
        <div style={gridItemStyle}>8</div>
        <div style={gridItemStyle}>9</div>
      </div>
    </div>
  );
};
