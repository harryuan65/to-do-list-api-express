// import app from '../../server';
// import request from 'supertest';
// import { Database } from '../../models/database';

// describe('GET /', () => {
//   test('returns a 200 status code', async () => {
//     const response = await request(app).get('/');
//     expect(response.status).toBe(200);
//   });

//   test('returns a list of ToDo items', async () => {
//     const response = await request(app).get('/');
//     expect(response.body).toEqual(
//       expect.arrayContaining([
//         expect.objectContaining({
//           id: expect.any(Number),
//           title: expect.any(String),
//           description: expect.any(String),
//           isDone: expect.any(Boolean),
//         }),
//       ])
//       );
//     });
//   });

// describe('ToDoItems', () => {
//   describe('GET /to_do_items', () => {
//     request(app)
//       .get('/to_do_items')
//       .expect(200)
//       .then((res) => {
//         const arrayOfItems = res.body;
//         expect(typeof arrayOfItems[0].title).toBe('string');
//       });
//   });
// });
