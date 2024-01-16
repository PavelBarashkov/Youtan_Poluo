import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { setBySort } from "../../store/slice/allCardsSlice";
import classes from "./sort.module.css";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

export const Sort = () => {
  const dispatch = useAppDispatch();
  const { bySort } = useSelector((state: any) => state.allCards);

  return (
    <div className={classes.sort_container}>
      <div className={classes.sort_title}>Сортировать:</div>
      <div className={classes.sort_btns}>
        <ToggleButtonGroup
          className={classes.filter_btns}
          type="radio"
          name="sort"
          defaultValue={bySort === "default" ? "default" : bySort}
        >
          <ToggleButton
            onClick={() => dispatch(setBySort("default"))}
            className={classes.btn}
            id={"tbg-radio-1"}
            value={"default"}
          >
            По умолчанию
          </ToggleButton>
          <ToggleButton
            onClick={() => dispatch(setBySort("by-new-data"))}
            className={classes.btn}
            id={"tbg-radio-2"}
            value={"by-new-data"}
          >
            По новизне
          </ToggleButton>
          <ToggleButton
            onClick={() => dispatch(setBySort("by-rise-price"))}
            className={classes.btn}
            id={"tbg-radio-3"}
            value={"by-rise-price"}
          >
            По возрастанию цены
          </ToggleButton>
          <ToggleButton
            onClick={() => dispatch(setBySort("by-drop-price"))}
            className={classes.btn}
            id={"tbg-radio-4"}
            value={"by-drop-price"}
          >
            По убыванию цены
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};
