import React from "react";
import {updateCourse} from "../../services/CourseService";

class CourseCardComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    editing: false,
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

  render() {
    return (
        <div>
          <div className="card mt-4">
            <div className="card-body">
              <i className="fa fa-file fa-5x text-primary"/>
            </div>
            <div className="card-footer">
              {
                this.state.editing === false &&
                <div className="text-truncate">
                  <i className="fa fa-file wbdv-icon text-muted">
                    <button
                        onClick={() => this.props.showEditor(this.state.course)}
                        className="btn nav-btn">
                      {this.state.course.title}
                    </button>
                  </i>
                </div>
              }
              {
                this.state.editing === true &&
                <input className="form-control"
                       onChange={(e) => this.setState({
                         course: {
                           ...this.state.course,
                           title:e.target.value
                         }
                       })}
                       value={this.state.course.title}/>
              }
              <div className="row">
                <div className="col-0">
                  {
                    this.state.editing === false &&
                    <div className="row">
                      <div className="col-12">
                        <span>Modified at:
                          {
                            new Date(this.state.course.date).getHours() + ":" + new Date(this.state.course.date).getMinutes()
                          }
                        </span>
                      </div>
                      <div className="col-1">
                        <i onClick={this.toggleEdit} className="fa fa-pencil"></i>
                      </div>
                      <div className="col-1">
                        <i onClick={() => this.props.deleteCourse(this.props.course._id)}
                           className="fa fa-trash"></i>
                      </div>
                    </div>
                  }
                </div>
                <div className="col-2">
                  {
                    this.state.editing &&
                    <i onClick={async () => {
                      let newCourse = {
                        ...this.state.course,
                        date: new Date()
                      }
                      await updateCourse(this.state.course._id, newCourse)
                      await this.props.refresh()
                      this.setState({
                        editing: false,
                        course: this.props.course
                      })
                    }}
                    className="fa fa-check"></i>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}


export default CourseCardComponent;