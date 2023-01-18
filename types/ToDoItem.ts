enum ToDoItemStatus {
  ACTIVE='active', DONE='done'
}

// For server
interface IToDoItemData {
  id: number,
  title: string,
  status: ToDoItemStatus
}

export {type IToDoItemData, ToDoItemStatus}