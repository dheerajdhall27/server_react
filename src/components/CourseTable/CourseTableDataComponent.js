import React from "react";
import CourseRowComponent from "./CourseRowComponent";

const CourseTableDataComponent = ({courses, deleteCourse, showEditor, refresh}) =>
    <div>
        {
            courses.map(function(course, index) {
                return(
                    <CourseRowComponent key={course._id}
                                        deleteCourse={deleteCourse}
                                        course={course}
                                        showEditor={showEditor}
                                        refresh={refresh}/>
                );
            })
        }
    </div>;

export default CourseTableDataComponent;