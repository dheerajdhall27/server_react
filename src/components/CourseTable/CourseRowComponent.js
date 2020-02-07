import React from "react";
import {findAllCourses, updateCourse} from "../../services/CourseService";

class CourseRowComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    editing: false,
    selected: false,
    course: this.props.course
  };

  toggleEdit = () =>
      this.setState(prevState => {
        if(prevState.editing === false) {
          return({
            editing: true
          });
        } else {
          return({
            editing: false
          });
        }
      });

  updateCourseData = async () =>{
    let newCourse = {
      ...this.state.course,
      date: new Date()
    };
    await updateCourse(this.state.course._id, newCourse)
    await this.props.refresh();
    this.setState({
      editing: false,
      course: this.props.course,
      selected: false
    });
  };


  toggleSelected = () =>
      this.setState(prevState => {
        if(prevState.selected === false) {
          return({
            selected: true
          });
        } else if(prevState.editing === false)  {
          return({
            selected: false
          });
        }
      });

  render(){
    return(
        <div onClick={this.toggleSelected} className={this.state.selected === true ? "row border bg-primary" : "row border"}>
          <div className="col-6 p-3">
            <div className="row">
              <div className="col-0 ml-4 text-truncate">
                {
                  !this.state.editing &&
                  <div>
                    <i className="fa fa-file wbdv-row wbdv-icon"></i>
                    <button className={this.state.selected === true ? "ml-2 btn nav-btn wbdv-row wbdv-title text-white" : "ml-2 btn nav-btn wbdv-row wbdv-title text-primary"}
                       href="#"
                       onClick={() => this.props.showEditor(this.state.course)}>
                      {this.state.course.title}
                    </button>
                  </div>
                }
                {
                  this.state.editing &&
                  <input className="form-control"
                      onChange={(e) =>  this.setState({
                    course: {
                      ...this.state.course,
                      title: e.target.value
                    }
                  })}
                  value={this.state.course.title}/>
                }
              </div>
            </div>
          </div>
          <div className={this.state.selected === true ? "col-2 p-3 d-none d-md-block text-white" : "col-2 p-3 d-none d-md-block"}>
            <span className="ml-1">me</span>
          </div>
          <div className="col-2 p-3 d-none d-lg-block">
            <span className={this.state.selected === true ? "ml-1 text-white": "ml-1"}>
              {
                new Date(this.state.course.date).getHours() + ":" + new Date(this.state.course.date).getMinutes()
              }
            </span>
          </div>
          <div className="col-2 p-3 ml-auto">
            <div className="row">
              {
                this.state.editing === false &&
                <div className="row">
                  <div className="col-0 mr-2">
                    <i onClick={e => {
                      e.stopPropagation();
                      this.toggleEdit();
                      this.setState({
                        selected: true
                      })
                    }} className={this.state.selected === true ? "fa fa-pencil text-white" : "fa fa-pencil"}/>
                  </div>
                  <div className={this.state.selected === true ? "col-0 mr-2 text-white" : "col-0 mr-2"}>
                    <i onClick={e => {
                      e.stopPropagation();
                      this.props.deleteCourse(this.props.course._id);
                    }}
                       className="fa fa-trash"/>
                  </div>
                </div>
              }
              <div className="col-0">
                {
                  this.state.editing &&
                  <i  onClick={this.updateCourseData}
                      className="fa fa-check"/>
                }
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default CourseRowComponent;