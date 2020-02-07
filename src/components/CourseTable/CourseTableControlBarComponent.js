import React from "react";

const CourseTableControlBarComponent = ({toggle}) =>
    <div>
      <div className="row table-secondary">
        <div className="col-6 p-3">
          <span className="ml-4 font-weight-bold">
            Title
          </span>
        </div>
        <div className="col-2 p-3 d-none d-md-block">
          <span className="font-weight-bold">
            Owned by
          </span>
        </div>
        <div className="col-2 p-3 d-none d-lg-block">
          <span className="font-weight-bold">
            Last Modified by
          </span>
        </div>
        <div className="col-2 p-3 ml-auto">
          <div className="row">
            <div className="col-2">
              <i onClick={toggle}
                 className="fa fa-th mr-sm-2 wbdv-button wbdv-grid-layout"></i>
            </div>
            <div className="col-2">
              <i className="fa fa-sort wbdv-header wbdv-sort"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

export default CourseTableControlBarComponent;