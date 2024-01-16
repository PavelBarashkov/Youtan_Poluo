import { useNavigate } from "react-router-dom";
import classes from "./btnPrev.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { STORE_ROUTE } from "../../../../routes/consts";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../app/hooks";
import { setCountPrev } from "../../slice/card";

export const BtnPrev = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { countPrev } = useSelector((state: any) => state.cardInfo);

  return (
    <button
      className={classes.btn}
      onClick={() => {
        navigate(-countPrev);
        dispatch(setCountPrev("reset"));
      }}
    >
      <div className={classes.container}>
        <IoIosArrowRoundBack size={"25px"} />
        <span>Назад</span>
      </div>
    </button>
  );
};
