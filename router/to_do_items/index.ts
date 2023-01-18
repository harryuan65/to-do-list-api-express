import express, { Request, Response } from "express";
import { IToDoItemData } from "../../types/ToDoItem";
const router = express.Router();

router.get("/", (req: Request, res: Response ) => {
  res.send("to do items")
})

router.post("/", (req: Request, res: Response ) => {
  res.send("to do items")
})

router.patch("/:id", (req: Request<IToDoItemData>, res: Response ) => {
  res.send(`patching to do items${req.params.id}`)
})

router.delete("/:id", (req: Request<IToDoItemData>, res: Response ) => {
  res.send(`delete to do items${req.params.id}`)
})

export default router;