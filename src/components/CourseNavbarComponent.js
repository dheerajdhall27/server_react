import React from 'react';

const CourseNavbarComponent = ({updateForm, newCourseTitle, addCourse}) =>
    <div className="mr-n3">
      <nav className="navbar sticky-top navbar-expand-md navbar-light bg-primary">
        <div className="col-0">
          <button className="btn nav-btn wbdv-field wbdv-hamburger">
            <i className="fa fa-bars wbdv-field wbdv-hamburger text-white"></i>
          </button>
        </div>
        <div className="col-0">
          <span
              className="navbar-brand d-none d-lg-block wbdv-label wbdv-course-manager text-white">
            Course Manager
          </span>
        </div>
        <div className="col-8">
          <input onChange={updateForm}
                 value={newCourseTitle}
                 className="form-control wbdv-field wbdv-new-course"
                 placeholder="New Course Title"
                 type="text"/>
        </div>

        <div className="col-0">
          <button onClick={addCourse}
              className="btn nav-btn wbdv-button wbdv-add-course">
            <i className="fa fa-plus-circle fa-2x"></i>
          </button>
        </div>
      </nav>
    </div>;

  export default CourseNavbarComponent;