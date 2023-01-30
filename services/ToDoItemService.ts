import { Manager } from '../models/database';
import { ToDoItem } from '../models/entity/ToDoItem';
import { HttpStatusCode, IServiceResult } from '../types/ServiceStatus';
import { IToDoItemBody, IToDoItem } from '../types/ToDoItem';

class ToDoItemService {
  constructor() {}
  async getAll(): Promise<IServiceResult<ToDoItem[]>> {
    const output = await Manager.find(ToDoItem);
    return {
      code: HttpStatusCode.OK,
      output,
    };
  }
  async getToDoById(id: number): Promise<IServiceResult<ToDoItem>> {
    const item = await Manager.findOne(ToDoItem, { where: { id } });
    if (!item) {
      return {
        code: HttpStatusCode.NOT_FOUND,
        output: undefined,
      };
    }
    return {
      code: HttpStatusCode.OK,
      output: item,
    };
  }

  async createToDoItem(
    itemData: IToDoItemBody
  ): Promise<IServiceResult<ToDoItem>> {
    const newItem = Manager.create(ToDoItem, itemData) as ToDoItem; // Generates id field
    try {
      const savedItem = await Manager.save(newItem);
      return {
        code: HttpStatusCode.OK,
        output: savedItem,
      };
    } catch (error) {
      return {
        code: HttpStatusCode.INTERNAL_SERVER_ERROR,
        message: (error as Error).message,
      };
    }
  }

  async updateToDoById(
    id: number,
    body: IToDoItemBody
  ): Promise<IServiceResult> {
    const item = await Manager.findOne(ToDoItem, { where: { id } });

    if (item) {
      await Manager.update(ToDoItem, item, body);
      return {
        code: HttpStatusCode.OK,
      };
    } else {
      return {
        code: HttpStatusCode.NOT_FOUND,
        message: `id: ${id} Not found!`,
      };
    }
  }

  async deleteToDoById(id: number): Promise<IServiceResult> {
    const item = await Manager.findOne(ToDoItem, { where: { id } });

    if (item) {
      await Manager.delete(ToDoItem, item);
      return {
        code: HttpStatusCode.OK,
      };
    } else {
      return {
        code: HttpStatusCode.NOT_FOUND,
        message: `id: ${id} Not found!`,
      };
    }
  }
}

export default ToDoItemService;
