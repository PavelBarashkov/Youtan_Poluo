import { IColor } from "./IColor";
import { ISize } from "./ISize";

export interface ICard {
    cardId: number;
    color: string;
    colors: IColor[];
    compound: string;
    description: string;
    id: number;
    img: string[];
    name: string;
    price: number;
    size: ISize[];
    vendor_code: string;
  }