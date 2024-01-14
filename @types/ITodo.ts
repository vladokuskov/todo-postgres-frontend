export interface ITodo {
  id: string;
  name: string;
  description?: string;
  dueDate?: Date;
  isCompleted?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
