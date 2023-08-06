import { Note, Stats } from "../types";

function getNoteStats(notes: Note[]): Stats[] {
  const stats: Stats = { active: {}, archived: {} };

  for (const note of notes) {
    if (note.archived) {
      if (stats.archived[note.category]) {
        stats.archived[note.category]++;
      } else {
        stats.archived[note.category] = 1;
      }
    } else {
      if (stats.active[note.category]) {
        stats.active[note.category]++;
      } else {
        stats.active[note.category] = 1;
      }
    }
  }

  return [stats];
}

export { getNoteStats };
