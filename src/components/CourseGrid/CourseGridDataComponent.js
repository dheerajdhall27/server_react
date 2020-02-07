import React from "react";
import CourseCardComponent from "./CourseCardComponent";
import CourseRowComponent from "../CourseTable/CourseRowComponent";

const CourseGridDataComponent = ({courses, deleteCourse, showEditor, refresh}) =>
    <div>
      <div className="container-fluid">
        <div className="card-deck">
          {
            courses.map(function(course, index) {
              return(
                  <div key={course._id}
                       className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                    <CourseCardComponent
                        deleteCourse={deleteCourse}
                        course={course}
                        showEditor={showEditor}
                        refresh={refresh}/>
                  </div>
              );
            })
          }
        </div>
      </div>
    </div>;

export default CourseGridDataComponent;
