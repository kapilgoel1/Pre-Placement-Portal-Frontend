import React from "react";

const CourseContext = React.createContext({
  course: "",
  setCourse: () => {},
});

export default CourseContext;
