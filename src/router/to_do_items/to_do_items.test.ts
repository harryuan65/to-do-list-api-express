import request from 'supertest';
import express, { Request, Response } from 'express';
import ToDoItemService from '../../services/ToDoItemService';
import router from '.';
import { ToDoItemStatus } from '../../types/ToDoItem';
import { IToDoItemBody } from '../../types/ToDoItem';

jest.mock('../../services/ToDoItemService');

const mockToDoItemService = ToDoItemService as jest.MockedClass<
  typeof ToDoItemService
>;

const app = express();
app.use(express.json());
app.use('/', router);

describe('ToDoItemsRouter', () => {
  describe('GET /', () => {
    it('should return a list of ToDo items', async () => {
      const toDoItems = [
        { id: 1, title: 'item 1', status: ToDoItemStatus.ACTIVE },
        { id: 2, title: 'item 2', status: ToDoItemStatus.ACTIVE },
      ];
      mockToDoItemService.prototype.getAll.mockResolvedValue({
        code: 200,
        output: toDoItems,
      });

      const res = await request(app).get('/');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(toDoItems);
    });
  });

  describe('POST /', () => {
    it('should create a new ToDo item', async () => {
      const itemData: IToDoItemBody = {
        title: 'new item',
        status: ToDoItemStatus.ACTIVE,
      };
      const newItem = { id: 1, ...itemData };
      mockToDoItemService.prototype.createToDoItem.mockResolvedValue({
        code: 200,
        output: newItem,
      });

      const res = await request(app).post('/').send(itemData);

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(newItem);
    });
  });

  describe('PATCH /:id', () => {
    it('should update an existing ToDo item', async () => {
      const id = 1;
      const updatedItemData: IToDoItemBody = {
        title: 'updated item',
        status: ToDoItemStatus.ACTIVE,
      };
      mockToDoItemService.prototype.updateToDoById.mockResolvedValue({
        code: 200,
      });

      const res = await request(app).patch(`/${id}`).send(updatedItemData);

      expect(res.statusCode).toEqual(200);
    });
  });

  describe('DELETE /:id', () => {
    it('should delete an existing ToDo item', async () => {
      const id = 1;
      mockToDoItemService.prototype.deleteToDoById.mockResolvedValue({
        code: 204,
      });

      const res = await request(app).delete(`/${id}`);

      expect(res.statusCode).toEqual(204);
    });
  });
});
