import {API_URL} from "../common/constants";

export const createCourse = (course) =>
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());

export const findAllCourses = async () =>{
  const courses = await fetch(API_URL);

  return await courses.json();
};

export const deleteCourse = async (courseId) => {
  const response = await fetch(`${API_URL}/${courseId}`, {
    method: 'DELETE'
  })

  return await response.json()
};

export const updateCourse = async (courseId, newCourse) => {
  const response = await fetch(`${API_URL}/${courseId}`, {
    method: 'PUT',
    body: JSON.stringify(newCourse),
    headers: {
      "content-type": "application/json"
    }
  });

  return await response.json();
};