import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { hexToRgb } from "../../helpers/hexToRgb";
import { IColor } from "../../interface/IColor";
import classes from "./color.module.css";
import { setCountPrev, setSelectedColor } from "../../slice/card";
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../../../routes/consts";

interface IColorProps {
  colors: IColor[];
}

export const Color = ({ colors }: IColorProps) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const {
    selected: {
      color,
      color: { modelId },
    },
  } = useSelector((state: any) => state.cardInfo);

  if (!colors) {
    return <div></div>;
  }

  const active = (modelId: number) => {
    return color.modelId === modelId
      ? `${classes.color_item} ${classes.active}`
      : classes.color_item;
  };

  const handelClick = (color: IColor) => {
    if (modelId === color.modelId) {
      return;
    } else {
      dispatch(setSelectedColor(color));
      dispatch(setCountPrev('next'));
      navigation(`${PRODUCT_ROUTE}/${color.modelId}`);
    }
  };

  return (
    <div className={classes.container}>
      {colors.map((color: IColor) => (
        <div
          key={color.color}
          className={active(color.modelId)}
          style={{ backgroundColor: hexToRgb(color.color) }}
          onClick={() => handelClick(color)}
        ></div>
      ))}
    </div>
  );
};
