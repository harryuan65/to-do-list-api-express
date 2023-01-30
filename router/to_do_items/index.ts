import express, { Request, Response } from 'express';
import ToDoItemService from '../../services/ToDoItemService';
import { IToDoItemBody } from '../../types/ToDoItem';
const router = express.Router();

router.get('/', async (_req: Request, res: Response) => {
  const result = await new ToDoItemService().getAll();

  res.json(result.output);
});

router.post('/', async (req: Request, res: Response) => {
  const itemData = req.body as IToDoItemBody;
  const savedItem = await new ToDoItemService().createToDoItem(itemData);

  res.json(savedItem);
});

router.patch('/:id', async (req: Request<{ id: number }>, res: Response) => {
  const id = req.params.id;
  const result = await new ToDoItemService().updateToDoById(
    id,
    req.body as IToDoItemBody
  );

  res.status(result.code).json(result);
});

router.delete('/:id', async (req: Request<{ id: number }>, res: Response) => {
  const id = req.params.id;
  const result = await new ToDoItemService().deleteToDoById(id);
  res.status(result.code).json(result);
});

export default router;
