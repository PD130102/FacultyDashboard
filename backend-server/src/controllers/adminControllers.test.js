
const axios = require('axios');

describe('Project service', () => {
it('should get all projects', async () => {
    const response = await axios.get('http://localhost:6969/api/admins' ,);
    // console.log(response)
    expect(response).toBeDefined();
// expect(response.body).any(Array)
// expect(response).toBeAnArray();
})

it('should get a project by id', async () => {
  const projectId = 1;
  const project = await axios.get("http://localhost:6969/api/admin/248788795");
    // console.log(project.data)
//   expect(project).toBeDefined();
  expect(project.data).toEqual({"adminId":248788795,
  "name":"admin8",
  "email":"admin8@cb.amrita.edu",
  "password":"$2b$10$xR0qKpZ9jWAVzyFiUsitru4t8eV2QNjAzc3fHuG3cMGlzSeQkyh2O",
  "department":"Dean Office",
  "createdAt":"2023-06-15T16:34:26.000Z",
  "updatedAt":"2023-06-15T16:34:26.000Z"});
});
});
