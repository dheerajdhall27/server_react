import React from "react";

const CourseEditorHeadingWidgetComponent = () =>
    <div>
      <div className="border rounded m-4">
        <div className="row mt-2">

          <div className="col ml-2">
            <h4>Heading Widget</h4>
          </div>

          <div className="col-auto">
            <button className="btn btn-warning mr-1">
              <i className="fa fa-arrow-circle-up"></i>
            </button>
            <button className="btn btn-warning mr-1">
              <i className="fa fa-arrow-circle-down"></i>
            </button>
            <select className="nav-item mr-1">
              <option value="Heading">Heading</option>
            </select>
            <button className="btn btn-danger mr-2">
              <i className="fa fa-times-circle"></i>
            </button>
          </div>

        </div>

        <div className="row mx-2 mt-2">
          <input className="form-control" placeholder="Heading Text"/>
        </div>

        <div className="row mx-2 mt-2">
          <select className="form-control">
            <option>Heading 1</option>
          </select>
        </div>

        <div className="row mx-2 mt-2">
          <input className="form-control" placeholder="Widget name"/>
        </div>

        <div className="row mx-2 mt-2">
          <h6>Preview</h6>
        </div>

        <div className="row mx-2 mt-2">
          <h1>Heading</h1>
        </div>
      </div>
    </div>;

  export default CourseEditorHeadingWidgetComponent;