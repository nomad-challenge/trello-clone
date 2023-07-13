import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom: isDarkPersistAtom } = recoilPersist({
  key: "isDarkPersistAtom",
});

export const isDarkState = atom<boolean[]>({
  key: "isDarkState",
  default: [false],
  effects_UNSTABLE: [isDarkPersistAtom],
});

export interface ITodo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: ITodo[];
}

export const toDoState = atom<IToDoState>({
  key: "toDoState",
  default: {
    "To Do": [],
    Doing: [],
    Done: [],
  },
});
