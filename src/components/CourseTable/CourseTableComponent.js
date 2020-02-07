import React from 'react';
import CourseTableControlBarComponent
  from "./CourseTableControlBarComponent";
import CourseTableDataComponent from "./CourseTableDataComponent";



const CourseTableComponent = ({courses, toggle, deleteCourse, showEditor, refresh}) =>
    <div>
      <CourseTableControlBarComponent toggle={toggle}/>
      <CourseTableDataComponent
          courses={courses}
          deleteCourse={deleteCourse}
          showEditor={showEditor}
          refresh={refresh}/>
    </div>;

export default CourseTableComponent;
