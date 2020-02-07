import React from "react";
import CourseTableComponent from "../components/CourseTable/CourseTableComponent";
import CourseGridComponent from "../components/CourseGrid/CourseGridComponent";
import CourseNavbarComponent from "../components/CourseNavbarComponent";
import {createCourse, findAllCourses, deleteCourse} from "../services/CourseService"
import CourseEditorComponent
  from "../components/CourseEditor/CourseEditorComponent";

class CourseManagerContainer extends React.Component{
  state = {
    layout: 'table',
    showEditor: false,
    currentCourse:'',
    newCourseTitle: '',
    courses : []
  };

  componentDidMount() {
    this.reRender();
  }

  showEditor = (course) =>
      this.setState({
        showEditor: true,
        currentCourse: course
      });

  hideEditor = () =>
      this.setState({
        showEditor: false
      });

  toggleListAndGrid = async () =>
  {
    this.reRender()
    this.setState(prevState => {
      if(prevState.layout === 'table') {
        return({
          layout:'grid'
        });
      } else {
        return({
          layout: 'table'
        });
      }
    });
  };

  updateForm = (e) =>
      this.setState({
        newCourseTitle: e.target.value
      });

  reRender = async () => {
    const allCourses = await findAllCourses();
    this.setState({
      courses: allCourses
    })
  };

  addCourse = async () =>
  {
    if(this.state.newCourseTitle === '') {
      alert('Please Enter a Course Title');
      return;
    }
    const newCourse = {
      title: this.state.newCourseTitle,
      date: new Date()
    };

    this.setState({
      newCourseTitle: ''
    });

    console.log("title: " + this.state.newCourseTitle);

    const actualCourse = await createCourse(newCourse);
    console.log(actualCourse);

    this.reRender()
  };

  deleteCourse = async (id) => {
    const status = await deleteCourse(id);

    this.reRender()
  };

  render() {
    return(
        <div>
          {
            this.state.showEditor === false &&
            <CourseNavbarComponent
                addCourse={this.addCourse}
                updateForm={this.updateForm}
                newCourseTitle={this.state.newCourseTitle}/>
          }
          {
            this.state.showEditor === true &&
            <CourseEditorComponent
                hideEditor={this.hideEditor}
                currentCourse={this.state.currentCourse}/>
          }
          {
            this.state.layout === 'table' &&
            this.state.showEditor === false &&
            <CourseTableComponent
                toggle={this.toggleListAndGrid}
                courses={this.state.courses}
                deleteCourse={this.deleteCourse}
                showEditor={this.showEditor}
                refresh={this.reRender}/>
          }
          {
            this.state.layout === 'grid' &&
            this.state.showEditor === false &&
            <CourseGridComponent
                toggle={this.toggleListAndGrid}
                courses={this.state.courses}
                deleteCourse={this.deleteCourse}
                showEditor={this.showEditor}
                refresh={this.reRender}/>
          }
        </div>
    );
  }
}



export default CourseManagerContainer