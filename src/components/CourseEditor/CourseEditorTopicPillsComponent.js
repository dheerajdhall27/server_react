import React from "react";

const CourseEditorTopicPillsComponent = () =>
    <div>
      <ul className="nav nav-pills m-3 wbdv-topic-pill-list">
        <li className="nav-item mr-md-4 wbdv-topic-pill">
          <a href="#" className="nav-link active">
            Topic 1
          </a>
        </li>
        <li className="nav-item mr-md-4 wbdv-topic-pill">
          <a href="#" className="nav-link">
            Topic 2
          </a>
        </li>
        <li className="nav-item mr-md-4 wbdv-topic-pill">
          <a href="#" className="nav-link">
            Topic 2
          </a>
        </li>
        <li className="nav-item mr-md-4 wbdv-topic-pill">
          <a href="#" className="nav-link">
            Topic 2
          </a>
        </li>
        <li className="nav-item wbdv-topic-add-btn">
          <button className="btn nav-btn">
            <i className="fa fa-plus-square fa-2x"></i>
          </button>
        </li>
      </ul>
    </div>;

  export default CourseEditorTopicPillsComponent;
