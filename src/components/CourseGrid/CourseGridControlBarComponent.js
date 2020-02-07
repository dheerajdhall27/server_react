import React from "react";

const CourseGridControlBarComponent = ({toggle}) =>
    <div>
      <div className="row table-secondary">
        <div className="col-6 p-3">
          <span className="ml-4 font-weight-bold">
            Title
          </span>
        </div>
        <div className="col-2 p-3 d-none d-md-block">
          <span className="font-weight-bold">
            Owned by <i className="fa fa-caret-down"></i>
          </span>
        </div>
        <div className="col-4 mt-3 ml-auto">
          <div className="row justify-content-center">
            <div className="col-1">
              <i onClick={toggle}
                 className="fa fa-list mr-sm-2 wbdv-button wbdv-list-layout"></i>
            </div>
            <div className="col-1">
              <i className="fa fa-sort wbdv-header wbdv-sort"></i>
            </div>
            <div className="col-1">
              <i className="fa fa-folder wbdv-header wbdv-folder"></i>
            </div>
          </div>
        </div>
      </div>
    </div>;

export default CourseGridControlBarComponent;