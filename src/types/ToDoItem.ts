enum ToDoItemStatus {
  ACTIVE = 'active',
  DONE = 'done',
}

// For server
interface IToDoItem {
  id: number;
  title: string;
  status: ToDoItemStatus;
}

interface IToDoItemBody extends Omit<IToDoItem, 'id'> {}

export { type IToDoItem, type IToDoItemBody, ToDoItemStatus };
