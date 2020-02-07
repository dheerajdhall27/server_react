import React from "react";

const CourseEditorLessonTabsComponent = () =>
    <div>
      <ul className="nav nav-tabs border-0 bg-dark">
        <li className="nav-item">
          <a href="#" className="nav-link text-white wbdv-build-tab">Lesson
            1</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link wbdv-page-tab active">Lesson 2</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white wbdv-theme-tab">Lesson
            3</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white wbdv-store-tab">Lesson
            4</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white wbdv-apps-tab">Lesson
            5</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white wbdv-settings-tab">Lesson
            6</a>
        </li>
        <li className="nav-item">
          <button className="btn nav-btn wbdv-new-page-btn">
            <i className="fa fa-plus"></i>
          </button>
        </li>
      </ul>
    </div>;

  export default CourseEditorLessonTabsComponent;