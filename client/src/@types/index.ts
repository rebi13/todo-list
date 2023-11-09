import { todo } from "@/@types/todo";

interface res<D> {
  error: string | null;
  data: D;
}

export type { res, todo };
