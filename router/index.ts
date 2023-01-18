import express from "express";
import {default as ToDoItemsRouter} from "./to_do_items"

const router = express.Router();
router.use("/to_do_items", ToDoItemsRouter)

export default router;