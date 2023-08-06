import { Router } from "express";
import { noteController } from "../controllers/note.controller";

const router = Router();

router.get("/", noteController.getAll);

router.get("/stats", noteController.getStats);

router.get("/:id", noteController.getById);

router.post("/", noteController.create);

router.patch("/:id", noteController.editById);

router.delete("/:id", noteController.deleteById);

export const NoteRouter = router;
