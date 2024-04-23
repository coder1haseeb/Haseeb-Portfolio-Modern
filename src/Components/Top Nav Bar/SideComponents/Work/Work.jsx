import React, { useEffect } from "react";

const Work = ({ refObj }) => {
  useEffect(() => {
    if (refObj.current) {
      refObj.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [refObj]);
  return (
    <div ref={refObj} className="child_component_main_page_div">
      <div className="top_div_for_the_heading_of_current_component">
        My Work
      </div>
    </div>
  );
};

export default Work;
