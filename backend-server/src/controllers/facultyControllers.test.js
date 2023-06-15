
const axios = require('axios');

describe('Project service', () => {
it('should get all projects', async () => {
    const response = await axios.get('http://localhost:6969/api/faculties',);
    // console.log(response)
    expect(response).toBeDefined();
// expect(response.body).any(Array)
// expect(response).toBeAnArray();
})

// it('should get a faculty by id', async () => {
//   const projectId = 1;
//   const project = await axios.get("http://localhost:6969/api/faculties/1",);
//   expect(project.data).toEqual( {
//         projectId: 1,
//         projectTitle: 'project1',
//         projectDescription: 'project1 description',
//         projectDomain: 'ECE',
//         projectStartDate: '2023-06-12',
//         projectEndDate: '2023-06-12',
//         projectType: 'Funded-Research',
//         projectStatus: 'Other',
//         MentorId: 5,
//         MentorName: 'faculty1',
//         createdAt: '2023-06-12T16:39:38.000Z',
//         updatedAt: '2023-06-12T16:39:38.000Z'
//       });
// });

it('should get a faculty by email', async () => {
  const title = 'Project Title';
//   const project = await getProjectByTitle(title);
//   expect(project).toBeDefined();
  const project = await axios.get("http://localhost:6969/api/faculties/email/fac1@cb.amrita.edu");
    // console.log(project.data)
//   expect(project).toBeDefined();
  expect(project.data).toEqual({"facultyId":1,"name":"faculty1","email":"fac1@cb.amrita.edu","password":"$2b$10$UH6gp22oB6DG0mv0NxjuIObOt3./taMivklZ2l9xJ.4CmF80U8Xoe","department":"CHE","designation":"Adjunct Professor","phoneNumber":"1234567891","papers":6,"publications":8,"citations":8,"projects":7,"createdAt":"2023-06-15T16:34:26.000Z","updatedAt":"2023-06-15T16:34:26.000Z"});
})

it('group faculty by the department', async () => {
  const projectId = 1;
  const project = await axios.get("http://localhost:6969/api/faculties/group/department");
    // console.log(project.data)
//   expect(project).toBeDefined();
      expect(project.data).toEqual([{"department":"CHE","faculties":[{"facultyId":1,"name":"faculty1","email":"fac1@cb.amrita.edu","password":"$2b$10$UH6gp22oB6DG0mv0NxjuIObOt3./taMivklZ2l9xJ.4CmF80U8Xoe","department":"CHE","designation":"Adjunct Professor","phoneNumber":"1234567891","papers":6,"publications":8,"citations":8,"projects":7,"createdAt":"2023-06-15T16:34:26.000Z","updatedAt":"2023-06-15T16:34:26.000Z"}]},{"department":"CSE","faculties":[{"facultyId":2,"name":"faculty2","email":"fac2@cb.amrita.edu","password":"$2b$10$rdSqjlX.dkIDCl7xEYb2vO0THc/olb9RE32onmXfXJHrwOAQRT/KO","department":"CSE","designation":"Visiting Instructor","phoneNumber":"1234567892","papers":6,"publications":3,"citations":2,"projects":2,"createdAt":"2023-06-15T16:34:26.000Z","updatedAt":"2023-06-15T16:34:26.000Z"},{"facultyId":8,"name":"faculty8","email":"fac8@cb.amrita.edu","password":"$2b$10$ARlG6iaFiqHh1xVaogl9veQ5lhQxL4L0wxTimiEXUy2XDwORp3Snq","department":"CSE","designation":"Visiting Assistant Professor","phoneNumber":"1234567898","papers":8,"publications":0,"citations":1,"projects":4,"createdAt":"2023-06-15T16:34:26.000Z","updatedAt":"2023-06-15T16:34:26.000Z"}]},{"department":"AEE","faculties":[{"facultyId":3,"name":"faculty3","email":"fac3@cb.amrita.edu","password":"$2b$10$gYgi.i1pMQpPGEQ8JuyM6uXRIBo5NwlDsgVsl02kU/CjS0yLBwHb.","department":"AEE","designation":"Visiting Professor","phoneNumber":"1234567893","papers":9,"publications":0,"citations":2,"projects":0,"createdAt":"2023-06-15T16:34:26.000Z","updatedAt":"2023-06-15T16:34:26.000Z"}]},{"department":"EEE","faculties":[{"facultyId":4,"name":"faculty4","email":"fac4@cb.amrita.edu","password":"$2b$10$2P1KScZSPRLJ82WPcXYXNO3xwfRw4OVACgpheyOqgkSO.EhZqwxr.","department":"EEE","designation":"Adjunct Professor","phoneNumber":"1234567894","papers":7,"publications":7,"citations":6,"projects":7,"createdAt":"2023-06-15T16:34:26.000Z","updatedAt":"2023-06-15T16:34:26.000Z"},{"facultyId":7,"name":"faculty7","email":"fac7@cb.amrita.edu","password":"$2b$10$rhz4gRjHXF7m6LyX2yTjReT2Eg8NAQmC3ogN33jeH.qvASPhU2dXu","department":"EEE","designation":"Visiting Instructor","phoneNumber":"1234567897","papers":7,"publications":0,"citations":7,"projects":5,"createdAt":"2023-06-15T16:34:26.000Z","updatedAt":"2023-06-15T16:34:26.000Z"}]},{"department":"ECE","faculties":[{"facultyId":5,"name":"faculty5","email":"fac5@cb.amrita.edu","password":"$2b$10$tBY8Pv9hwutE9CFtoFddPuQXMPaqMNE3Z.yfHEZ8kYYFuWeiTiPCq","department":"ECE","designation":"Teaching Assistant","phoneNumber":"1234567895","papers":0,"publications":9,"citations":4,"projects":9,"createdAt":"2023-06-15T16:34:26.000Z","updatedAt":"2023-06-15T16:34:26.000Z"}]},{"department":"CYB","faculties":[{"facultyId":6,"name":"faculty6","email":"fac6@cb.amrita.edu","password":"$2b$10$N3cqCAYkwJvhVCVmi6rzx.SFmKIISWJgTDdO658VM77VMsmgp/B1m","department":"CYB","designation":"Professor","phoneNumber":"1234567896","papers":3,"publications":9,"citations":2,"projects":8,"createdAt":"2023-06-15T16:34:26.000Z","updatedAt":"2023-06-15T16:34:26.000Z"}]},{"department":"AIE","faculties":[{"facultyId":9,"name":"faculty9","email":"fac9@cb.amrita.edu","password":"$2b$10$7K1QazvjmKMQeuMcKstkBOya7qozXiuUOfXHZ9lsxQAPm8Db2JL5S","department":"AIE","designation":"Research Assistant","phoneNumber":"1234567899","papers":9,"publications":5,"citations":8,"projects":1,"createdAt":"2023-06-15T16:34:26.000Z","updatedAt":"2023-06-15T16:34:26.000Z"}]},{"department":"ARE","faculties":[{"facultyId":10,"name":"faculty10","email":"fac10@cb.amrita.edu","password":"$2b$10$VmotZW6SDduPoJHWpTNWgu/GeSxUlx09xyGZEqGcTz2TzHTLxG55O","department":"ARE","designation":"Undergraduate Student","phoneNumber":"12345678910","papers":0,"publications":4,"citations":8,"projects":1,"createdAt":"2023-06-15T16:34:26.000Z","updatedAt":"2023-06-15T16:34:26.000Z"}]}]);
})
})



