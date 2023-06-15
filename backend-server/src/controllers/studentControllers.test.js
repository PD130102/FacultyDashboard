
const axios = require('axios');

describe('student service', () => {
it('should get all students', async () => {
    const response = await axios.get('http://localhost:6969/api/students' ,);
    // console.log(response)
    expect(response).toBeDefined();
// expect(response.body).any(Array)
// expect(response).toBeAnArray();
})

it('should get a student by id', async () => {
  const projectId = 1;
  const project = await axios.get("http://localhost:6969/api/students/100955599");
  expect(project.data).toEqual( {"studentId":100955599,"name":"student6","email":"student6@cb.students.amrita.edu","department":"CHE","year":"1","rollNumber":"1234567896","phoneNumber":"1234567896","createdAt":"2023-06-15T16:34:26.000Z","updatedAt":"2023-06-15T16:34:26.000Z"});
});

it('should get a studdent by email', async () => {
//   const project = await getProjectByTitle(title);
//   expect(project).toBeDefined();
  const project = await axios.get("http://localhost:6969/api/students/email/student2@cb.students.amrita.edu");
    // console.log(project.data)
//   expect(project).toBeDefined();
  expect(project.data).toEqual( {
    "studentId":725537024,
    "name":"student2",
    "email":"student2@cb.students.amrita.edu",
    "department":"CYB",
    "year":"3",
    "rollNumber":"1234567892",
    "phoneNumber":"1234567892",
    "createdAt":"2023-06-15T16:34:26.000Z",
    "updatedAt":"2023-06-15T16:34:26.000Z"});
});
})


// it('should delete course by id', async () => {
//   const projectId = 1;
//   const project = await axios.delete("http://192.168.239.39:6969/api/students/group/department");
//     // console.log(project.data)
// //   expect(project).toBeDefined();
//   expect(project.data).toEqual( {