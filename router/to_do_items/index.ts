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

router.patch("/:id", async (req: Request<IToDoItemData>, res: Response ) => {
  const id = req.params.id;
  const item = await Manager.findOne(ToDoItem, {where: {id}});

  if(item) {
    const body = req.body;
    await Manager.update(ToDoItem, item, body);
    res.send("OK");
  } else {
    res.status(404).send(`id: ${id} Not found!`)
  }
})

router.delete("/:id", async (req: Request<IToDoItemData>, res: Response ) => {
  const id = req.params.id;
  const item = await Manager.findOne(ToDoItem, {where: {id}});

  if(item) {
    await Manager.delete(ToDoItem, item);
    res.send("OK");
  } else {
    res.status(404).send(`id: ${id} Not found!`)
  }
})

export default router;