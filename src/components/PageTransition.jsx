import React from "react";
import "../Transitions.css";

const PageTransition = ({ children }) => {
  return <div className="page-fade-in">{children}</div>;
};

export default PageTransition;
