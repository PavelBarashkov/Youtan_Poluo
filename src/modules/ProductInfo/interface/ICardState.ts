import { ICard } from "./ICard";
import { IColor } from "./IColor";
import { ISize } from "./ISize";

export interface ICardState {
  card: ICard;
  selected: {
    size: ISize;
    color: IColor;
  };
  countPrev: number;
  loading: boolean;
  error: string;
}
