import classes from "./orderItem.module.css";
import photo from "../../../../assets/img/коричнеКост1.jpg"
import { ColorItem } from "../../../../UI/ColourItem/ColourItem";
import { Quantity } from "../Quantity/Quantity";
import { BtnDelete } from "../BtnDelete/BtnDelete";

export const OrderItem = () => {
  return (
    <div className={classes.orderItem}>
      <div className={classes.orderItemPreview}>
        <img className={classes.orderItemImg} src={photo} alt="Фотка" />
      </div>
      <div className={classes.orderItemBodyCard}>
        <div className={classes.orderItemOption}>
          <div className={classes.orderItemVendorCode}>арт.132</div>
          <div><BtnDelete/></div>
        </div>
        <div className={classes.orderItemInfo}>
          <div className={classes.orderItemDescription}>
            <div className={classes.orderItemName}>Жилет классический костюмны </div>
            <div className={classes.orderItemCharacteristic}>
              <div className={classes.orderItemColor}><ColorItem color={'#DEB887'}/></div>
              <div className={classes.orderItemSize}>m</div>
            </div>
          </div>
          <div className={classes.orderItemQuantity}> <Quantity/> </div>
          <div className={classes.orderItemPrice}> 13 000 &#8381; </div>
        </div>
      </div>
    </div>
  );
};
