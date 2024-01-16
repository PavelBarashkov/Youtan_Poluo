import { useSelector } from "react-redux";
import { filterSizes } from "../../helpers/filterSizes";
import { ISize } from "../../interface/ISize";
import classes from "./size.module.css";
import { Dropdown } from "react-bootstrap";
import { useAppDispatch } from "../../../../app/hooks";
import { setSelectedSize } from "../../slice/card";

export interface ISizesProps {
  sizes: ISize[];
}

export const Size = ({ sizes }: ISizesProps) => {
  const {
    selected: { size },
  } = useSelector((state: any) => state.cardInfo);
  const dispatch = useAppDispatch();

  if (!sizes) {
    return <div></div>;
  }

  const sizesFilter = filterSizes(sizes);

  return (
    <Dropdown>
      <Dropdown.Toggle className={classes.sizes}>{size.name}</Dropdown.Toggle>

      <Dropdown.Menu className={classes.menu}>
        {sizesFilter.map((item: ISize) => (
          <Dropdown.Item
            key={item.id}
            onClick={() => dispatch(setSelectedSize(item))}
            className={classes.menu_item}
          >
            {item.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
