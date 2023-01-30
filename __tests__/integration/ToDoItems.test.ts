import app from '../../server';
import request from 'supertest';
import { Database } from '../../models/database';

describe('ToDoItems', () => {
  describe('GET /to_do_items', () => {
    request(app)
      .get('/to_do_items')
      .expect(200)
      .then((res) => {
        const arrayOfItems = res.body;
        expect(typeof arrayOfItems[0].title).toBe('string');
      });
  });
});
