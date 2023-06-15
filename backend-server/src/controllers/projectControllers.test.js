
const axios = require('axios');

describe('Project service', () => {
it('should get all projects', async () => {
    const response = await axios.get('http://localhost:6969/api/projects' ,);
    // console.log(response)
    expect(response).toBeDefined();
// expect(response.body).any(Array)
// expect(response).toBeAnArray();
})

it('should get a project by id', async () => {
  const projectId = 1;
  const project = await axios.get("http://localhost:6969/api/projects/1");
    // console.log(project.data)
//   expect(project).toBeDefined();
  expect(project.data).toEqual({"projectId":1,
  "projectTitle":"project1",
  "projectDescription":"project1 description",
  "projectDomain":"AEE",
  "projectStartDate":"2023-06-15",
  "projectEndDate":"2023-06-15",
  "projectType":"Research",
  "projectStatus":"Ongoing",
  "MentorId":1,
  "MentorName":"faculty1",
  "createdAt":"2023-06-15T16:34:27.000Z",
  "updatedAt":"2023-06-15T16:34:27.000Z"
});
});

it('should get a project by title', async () => {
  const title = 'Project Title';
//   const project = await getProjectByTitle(title);
//   expect(project).toBeDefined();
  const project = await axios.get("http://localhost:6969/api/projects/title/project1");
    // console.log(project.data)
//   expect(project).toBeDefined();
  expect(project.data).toEqual( {
    "projectId":1,
    "projectTitle":"project1",
    "projectDescription":"project1 description",
    "projectDomain":"AEE",
    "projectStartDate":"2023-06-15",
    "projectEndDate":"2023-06-15",
    "projectType":"Research",
    "projectStatus":"Ongoing",
    "MentorId":1,
    "MentorName":"faculty1",
    "createdAt":"2023-06-15T16:34:27.000Z",
    "updatedAt":"2023-06-15T16:34:27.000Z"
  })
});

it('should delete course by id', async () => {
  const projectId = 1;
  const project = await axios.delete("http://localhost:6969/api/courses/1");
    // console.log(project.data)
//   expect(project).toBeDefined();
  expect(project.data).toEqual(0)
});
})
