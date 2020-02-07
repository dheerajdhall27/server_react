import React from "react";
import CourseGridDataComponent from "./CourseGridDataComponent";
import CourseGridControlBarComponent from "./CourseGridControlBarComponent";

const CourseGridComponent = ({toggle, courses, deleteCourse, showEditor, refresh}) =>
    <div>
      <CourseGridControlBarComponent toggle={toggle}/>
      <CourseGridDataComponent courses={courses}
                               deleteCourse={deleteCourse}
                               showEditor={showEditor}
                               refresh={refresh}/>
    </div>

export default CourseGridComponent;