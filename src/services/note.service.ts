import { noteSchema } from "../models/note.schema";
import e from "express";

class NoteService {
  public async create(req: e.Request) {
    return noteSchema.validate(req.body);
  }
  public async editById(req: e.Request) {
    return noteSchema.validate(req.body);
  }
}

export const noteService = new NoteService();
