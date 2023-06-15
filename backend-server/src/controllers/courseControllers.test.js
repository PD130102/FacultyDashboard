const axios = require('axios');

describe('Project service', () => {
it('should get all projects', async () => {
    const response = await axios.get('http://localhost:6969/api/courses' ,);
    expect(response).toBeDefined();
// expect(response.body).any(Array)
// expect(response).toBeAnArray();
})});

it('should get a course by id', async () => {
    const project = await axios.get("http://localhost:6969/api/courses/2");
  // console.log(project)
  //   expect(project).toBeDefined();
    expect(project).toEqual({"courseId":2,"courseName":"course2","courseCode":"course2","courseDescription":"course2","courseDepartment":"CSE","courseStartDate":"2023-06-15T16:34:25.000Z","courseEndDate":"2023-06-15T16:34:25.000Z","courseCredits":4,"courseMode":"Online","courseType":"Elective","courseStatus":"Ongoing","createdAt":"2023-06-15T16:34:28.000Z","updatedAt":"2023-06-15T16:34:28.000Z"});
  });

  it('create new course', async () => {
    const projectId = 1;
    const project = await axios.post("http://localhost:6969/api/courses/",{
        "courseId": 1,
        "courseName": "course1",
        "courseCode": "course1",
        "courseDescription": "course1",
        "courseDepartment": "AEE",
        "courseStartDate": "2023-06-12T16:39:36.000Z",
        "courseEndDate": "2023-06-12T16:39:36.000Z",
        "courseCredits": 0,
        "courseMode": "Online",
        "courseType": "Core",
        "courseStatus": "Completed",
    });
      // console.log(project.data)
    expect(project).toBeDefined();
    // expect(project.data).toEqual( {
    //     "courseId": 17,
    //     "courseName": "course1",
    //     "courseCode": "course1",
    //     "courseDescription": "course1",
    //     "courseDepartment": "AEE",
    //     "courseStartDate": "2023-06-12T16:39:36.000Z",
    //     "courseEndDate": "2023-06-12T16:39:36.000Z",
    //     "courseCredits": 0,
    //     "courseMode": "Online",
    //     "courseType": "Core",
    //     "courseStatus": "Completed",
    //   });
  });

  // it('should delete course by id', async () => {
  //   const projectId = 1;
  //   const project = await axios.delete("http://localhost:6969/api/courses/2");
  //     console.log(project)
  // //   expect(project).toBeDefined();
  //   expect(project).toEqual(1);
  // });