import express, { Request, Response } from "express";
import {Manager} from "../../models/database";
import { ToDoItem } from "../../models/entity/ToDoItem";
import { IToDoItemData, ToDoItemStatus } from "../../types/ToDoItem";
const router = express.Router();

router.get("/", async (req: Request, res: Response ) => {
  const items = await Manager.find(ToDoItem);
  res.send(JSON.stringify(items, null, 2))
})

router.post("/", async (req: Request, res: Response ) => {
  const itemData = req.body as IToDoItemData;
  const newItem = Manager.create(ToDoItem, itemData);
  const savedItem = await Manager.save(newItem);
  res.send(JSON.stringify(savedItem, null, 2))
})

router.patch("/:id", (req: Request<IToDoItemData>, res: Response ) => {
  res.send(`patching to do items${req.params.id}`)
})

router.delete("/:id", (req: Request<IToDoItemData>, res: Response ) => {
  res.send(`delete to do items${req.params.id}`)
})

export default router;