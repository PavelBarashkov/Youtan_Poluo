import classes from "./btnDelete.module.css";
import { BsTrash } from "react-icons/bs";

export const BtnDelete = () => {
  return (
    <div>
      <button className={classes.btnDelete}>
        <BsTrash size={"20px"} color="gray"  className={classes.icon}/>
      </button>
    </div>
  );
};
