import { Request, Response } from "express";
import { initialState } from "../data/noteData";
import { getNoteStats } from "../helpers/stats.helper";
import { Note } from "../types";
import { noteService } from "../services/note.service";

class NoteController {
  public async getAll(req: Request, res: Response) {
    res.json(initialState.notes);
  }
  public async getStats(req: Request, res: Response) {
    const stats = getNoteStats(initialState.notes);
    res.json(stats);
  }
  public async getById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < initialState.notes.length) {
      const note = initialState.notes[id];
      res.json(note);
    } else {
      res.status(404).json({ error: "Note not found" });
    }
  }
  public async create(req: Request, res: Response) {
    try {
      const newNote = <Note>await noteService.create(req);
      initialState.notes.push(newNote);
      res.status(201).json(newNote);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  public async editById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const updatedNote = <Note>await noteService.editById(req);
      initialState.notes[id] = updatedNote;
      res.json(updatedNote);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  public async deleteById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < initialState.notes.length) {
      initialState.notes.splice(id, 1);
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Note not found" });
    }
  }
}

export const noteController = new NoteController();
