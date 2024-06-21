import { InnerGrid } from "./InnerGrid";
export const Grid = () => {
  const gridContainer: any = {
    display: "grid",
    gridTemplateColumns: "250px 250px 250px",
    gridTemplateRows: "250px 250px 250px",
    gap: "1px",
    backgroundColor: "#2196F3",
    padding: "10px",
    width: "780px",
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

  return (
    <div className="flex justify-center h-">
      <div style={gridContainer}>
        <div style={gridItemStyle}>
          <InnerGrid />
        </div>
        <div style={gridItemStyle}>
          {" "}
          <InnerGrid />
        </div>
        <div style={gridItemStyle}>
          {" "}
          <InnerGrid />
        </div>
        <div style={gridItemStyle}>
          {" "}
          <InnerGrid />
        </div>
        <div style={gridItemStyle}>
          {" "}
          <InnerGrid />
        </div>
        <div style={gridItemStyle}>
          {" "}
          <InnerGrid />
        </div>
        <div style={gridItemStyle}>
          {" "}
          <InnerGrid />
        </div>
        <div style={gridItemStyle}>
          {" "}
          <InnerGrid />
        </div>
        <div style={gridItemStyle}>
          {" "}
          <InnerGrid />
        </div>
      </div>
    </div>
  );
};
