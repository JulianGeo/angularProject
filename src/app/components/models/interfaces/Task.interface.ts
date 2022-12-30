export enum Levels {
  "Info",
  "Urgent",
  "Blocking"
}

export interface iTask {
  title: string;
  description?: string;
  completed: boolean;
  level: Levels;
}
