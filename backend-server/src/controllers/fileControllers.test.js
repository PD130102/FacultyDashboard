const axios = require('axios');

describe('uploadpaper', () => {  
  test('should upload the file',async() =>{
    const testFile = Buffer.from('test file content');
    const response = await axios.post('http://localhost:6969/api/upload' , {
      files: "testFile.txt", // Assuming you have the file data in `testFile`
    });
    expect(response.status).toBe(200);
    expect(response.statusText).toBe('OK');
    // expect(response.body.originalname).toBe('testfile.txt');
  });

//   test('should return an error when no file is uploaded', async () => {
//     // Make a POST request to the endpoint without attaching a file
//     // const response = await request(uploadpaper).post('/');

//     const response = await axios.post('http://192.168.239.39:6969/api/upload', { // Assuming you have the file data in `testFile`
  
//   });

//     // Verify the response
//     expect(response.status).toBe(500);
//     expect(response.body).toBeDefined();
// });
});
