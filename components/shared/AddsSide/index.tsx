import React from "react";
type rightAside = {
  setShowRight: any;
  showRight: boolean;
};
const AddsSide: React.FC<rightAside> = (props: rightAside) => {
  const { setShowRight, showRight } = props;
  return (
    <div className="adds_side_parent_class">
      <div>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => setShowRight(!showRight)}
        >
          Close
        </span>
      </div>
    </div>
  );
};

export default AddsSide;
