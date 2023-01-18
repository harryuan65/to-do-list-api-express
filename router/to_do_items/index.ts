import express, { Request, Response } from "express";
import Database from "../../models/database";
import { ToDoItem } from "../../models/entity/ToDoItem";
import { IToDoItemData, ToDoItemStatus } from "../../types/ToDoItem";
const router = express.Router();

router.get("/", async (req: Request, res: Response ) => {
  const items = await Database.manager.find(ToDoItem);
  res.send(JSON.stringify(items, null, 2))
})

router.post("/", async (req: Request, res: Response ) => {
  const toDoItem = new ToDoItem();
  toDoItem.id = 1
  toDoItem.title = "Sqlite Demo Item Title"
  toDoItem.status = ToDoItemStatus.ACTIVE;
  const item = await Database.manager.save(toDoItem);
  res.send(JSON.stringify(item, null, 2))
})

router.patch("/:id", (req: Request<IToDoItemData>, res: Response ) => {
  res.send(`patching to do items${req.params.id}`)
})

router.delete("/:id", (req: Request<IToDoItemData>, res: Response ) => {
  res.send(`delete to do items${req.params.id}`)
})

export default router;