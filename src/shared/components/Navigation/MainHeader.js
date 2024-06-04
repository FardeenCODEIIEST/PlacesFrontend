import React from "react";

import "./MainHeader.css";

// props.children will have the thing between opening and closing tags of the component
const MainHeader = (props) => {
  return <header className="main-header">{props.children}</header>;
};

export default MainHeader;
