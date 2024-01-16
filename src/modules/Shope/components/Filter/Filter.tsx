import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { setTypeId } from "../../store/slice/allCardsSlice";
import classes from "./filter.module.css";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

export const Filter = ({ types }: any) => {
  const dispatch = useAppDispatch();
  const handler = (e: any) => {
    dispatch(setTypeId(e));
  };

  const { typeId } = useSelector((state: any) => state.allCards);

  return (
    <div className={classes.filter_container}>
      <div className={classes.filter_title}>Фильтр:</div>
      <ToggleButtonGroup
        className={classes.filter_buttons}
        type="checkbox"
        name="options"
        defaultValue={typeId.length === 0 ? [] : typeId}

      >
        {types &&
          types.map((item: any, indx: number) => (
            <ToggleButton
              key={item.id}
              onClick={() => handler(item?.id)}
              className={classes.btn}
              id={item.id}
              value={item.id}
            >
              {item.name}
            </ToggleButton>
          ))}
      </ToggleButtonGroup>
    </div>
  );
};
