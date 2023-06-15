
const axios = require('axios');

describe('event service', () => {
it('should get all event', async () => {
    const response = await axios.get('http://localhost:6969/api/events' ,);
    // console.log(response)
    expect(response).toBeDefined();
// expect(response.body).any(Array)
// expect(response).toBeAnArray();
})

it('should get a event by id', async () => {
  const projectId = 1;
  const project = await axios.get("http://localhost:6969/api/events/2");
  expect(project.data).toEqual( {"eventId":2,
  "facultyId":10,
  "name":"event2",
  "date":"2023-06-15T16:34:25.000Z",
  "startTime":"16:34:25",
  "endTime":"16:34:25",
  "isStarred":false,
  "createdAt":"2023-06-15T16:34:28.000Z","updatedAt":"2023-06-15T16:34:28.000Z"});
});

it('should get a event by facultyid', async () => {
  const title = 'Project Title';
  const project = await axios.get("http://localhost:6969/api/events/faculty/4");
    // console.log(project.data)
  expect(project).toBeDefined();
  expect(project.data).toEqual( [{"eventId":5,"facultyId":4,"name":"event5","date":"2023-06-15T16:34:25.000Z","startTime":"16:34:25","endTime":"16:34:25","isStarred":false,"createdAt":"2023-06-15T16:34:28.000Z","updatedAt":"2023-06-15T16:34:28.000Z"},{"eventId":6,"facultyId":4,"name":"event6","date":"2023-06-15T16:34:25.000Z","startTime":"16:34:25","endTime":"16:34:25","isStarred":false,"createdAt":"2023-06-15T16:34:28.000Z","updatedAt":"2023-06-15T16:34:28.000Z"},{"eventId":9,"facultyId":4,"name":"event9","date":"2023-06-15T16:34:26.000Z","startTime":"16:34:26","endTime":"16:34:26","isStarred":false,"createdAt":"2023-06-15T16:34:28.000Z","updatedAt":"2023-06-15T16:34:28.000Z"}]);
});

it('should delete event by id', async () => {
  const projectId = 1;
  const project = await axios.delete("http://localhost:6969/api/events/2");
    // console.log(project.data)
//   expect(project).toBeDefined();
  expect(project).toEqual(1);
  })
});