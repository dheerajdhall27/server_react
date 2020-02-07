import React from "react";
import CourseEditorListGroupComponent from "./CourseEditorListGroupComponent";
import CourseEditorLessonTabsComponent from "./CourseEditorLessonTabsComponent";
import CourseEditorTopicPillsComponent from "./CourseEditorTopicPillsComponent";
import CourseEditorHeadingWidgetComponent
  from "./CourseEditorHeadingWidgetComponent";

const CourseEditorComponent = ({hideEditor, currentCourse}) =>
    <div>
      <div className="row">
        <div className="col-md-4 bg-dark">
          <div className="row">
            <div className="col-2">
              <button className="btn nav-btn wbdv-course-editor wbdv-close">
                <i className="fa fa-times"
                   onClick={hideEditor}></i>
              </button>
            </div>
            <div className="col-auto">
              <span className="navbar-brand wbdv-course-title text-white">
                {currentCourse.title}
              </span>
            </div>
          </div>

          <CourseEditorListGroupComponent/>
        </div>

        <div className="col-md-8 pl-0">
          <CourseEditorLessonTabsComponent/>

          <CourseEditorTopicPillsComponent/>

          <div className="d-flex justify-content-end">
            <div>
              <button className="btn btn-success mr-2">
                Save
              </button>
            </div>
            <div className="mt-1 mr-2">
              <label htmlFor="customSwitch1">Preview</label>
            </div>
            <div className="custom-control custom-switch mt-1">
              <input type="checkbox" className="custom-control-input"
                     id="customSwitch1"/>
                <label className="custom-control-label"
                       htmlFor="customSwitch1"></label>
            </div>
          </div>

          <CourseEditorHeadingWidgetComponent/>

          <div>
            <button className="btn btn-danger wbdv-add-widget-btn">
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>

      </div>
    </div>;

  export default CourseEditorComponent;