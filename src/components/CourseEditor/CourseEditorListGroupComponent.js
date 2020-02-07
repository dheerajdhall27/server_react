import React from "react";


const CourseEditorListGroupComponent = () =>
    <div>
      <ul className="list-group ml-2 wbdv-module-list">
        <li className="list-group-item rounded-0 m-2 mt-2 text-truncate wbdv-module-item active bg-secondary">
          <a href="#" className="wbdv-module-item-title text-white">Module 1 -
            jQuery</a>
          <a href="#" className="button close text-white">
            <span aria-hidden="true">&times;</span>
          </a>
        </li>
        <li className="list-group-item rounded-0 m-2 mt-2 text-truncate wbdv-module-item active bg-secondary">
          <a href="#" className="wbdv-module-item-title text-white">Module 2 -
            Angular</a>
          <a href="#" className="button close text-white">
            <span aria-hidden="true">&times;</span>
          </a>
        </li>
        <li className="list-group-item rounded-0 m-2 mt-2 text-truncate wbdv-module-item active bg-secondary">
          <a href="#" className="wbdv-module-item-title text-white">Module 3 -
            React</a>
          <a href="#" className="button close text-white">
            <span aria-hidden="true">&times;</span>
          </a>
        </li>
        <li className="list-group-item rounded-0 m-2 mt-2 text-truncate wbdv-module-item active bg-secondary">
          <a href="#" className="wbdv-module-item-title text-white">Module 4 -
            Javascript</a>
          <a href="#" className="button close text-white">
            <span aria-hidden="true">&times;</span>
          </a>
        </li>
        <li className="list-group-item rounded-0 m-2 mt-2 text-truncate wbdv-module-item active bg-secondary">
          <a href="#" className="wbdv-module-item-title text-white">Module 5 - HTML</a>
          <a href="#" className="button close text-white">
            <span aria-hidden="true">&times;</span>
          </a>
        </li>
        <li className="list-group-item rounded-0 m-2 mt-2 text-truncate wbdv-module-item active bg-secondary">
          <a href="#" className="wbdv-module-item-title text-white">Module 6 - CSS</a>
          <a href="#" className="button close text-white">
            <span aria-hidden="true">&times;</span>
          </a>
        </li>
      </ul>
      <div className="row border-bottom">
        <button
            className="btn nav-btn col col-11 ml-4 m-4 wbdv-module-item-add-btn text-white">
          <i className="fa fa-plus pull-right"></i>
        </button>
      </div>

    </div>;

  export default CourseEditorListGroupComponent;