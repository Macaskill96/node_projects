export interface Note {
  date: string;
  content: string;
  category: string;
  archived: boolean;
}

export interface NotesState {
  notes: Note[];
}
