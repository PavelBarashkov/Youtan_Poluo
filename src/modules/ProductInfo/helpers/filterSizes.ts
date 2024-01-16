import { ISize } from "../interface/ISize";

export const filterSizes = (sizes: ISize[]): ISize[] => {
  let uniqueSizes = sizes.filter(
    (value: ISize, index: number, self: ISize[]) => {
      return self.findIndex((item) => item.name === value.name) === index;
    }
  );
  return uniqueSizes;
};
