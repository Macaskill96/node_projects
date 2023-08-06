interface NoteStats {
  [category: string]: number;
}

export interface Stats {
  active: NoteStats;
  archived: NoteStats;
}
