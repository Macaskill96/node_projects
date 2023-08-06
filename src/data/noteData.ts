import { NotesState } from "../types";

export const validCategories = ["Idea", "Random Thought", "Task"];

export const initialState: NotesState = {
  notes: [
    {
      date: "02.05.2015",
      content: "Buy a car",
      category: "Task",
      archived: false,
    },
    {
      date: "15.12.2015",
      content: "Take a shower",
      category: "Idea",
      archived: false,
    },
    {
      date: "01.01.2016",
      content: "Wake up",
      category: "Task",
      archived: false,
    },
    {
      date: "30.01.2016",
      content: "Going to new job",
      category: "Task",
      archived: false,
    },
    {
      date: "04.02.2016",
      content: "Meet with friends",
      category: "Random Thought",
      archived: false,
    },
    {
      date: "28.06.2017",
      content: "Cooking",
      category: "Idea",
      archived: false,
    },
    {
      date: "28.06.2022",
      content: "Wash a cat",
      category: "Random Thought",
      archived: false,
    },
  ],
};
