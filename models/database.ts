import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { ToDoItem } from './entity/ToDoItem';

const Database = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  synchronize: true,
  logging: false,
  entities: [ToDoItem],
  migrations: [],
  subscribers: [],
});

(async function () {
  if (!Database.isInitialized) {
    try {
      await Database.initialize();
    } catch (error) {
      console.log(error);
    }
  }
})();

const Manager = Database.manager;
export { Manager, Database };
