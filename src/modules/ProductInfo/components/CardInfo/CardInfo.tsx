import classes from "./cardInfo.module.css";
import { Name } from "../Name/Name";
import { Price } from "../Price/Price";
import { Size } from "../Size/Size";
import { Color } from "../Color/Color";
import { BtnBasket } from "../BtnBasket/BtnBasket";
import { Description } from "../Description/Description";
import { Сompound } from "../Сompound/Сompound";

export const CardInfo = ({ card }: any) => {
  return (
    <div className={classes.container}>
      <Name name={card.name} />
      <Price price={card.price} />
      <Size sizes={card.size} />
      <Color colors={card.colors} />
      <BtnBasket />
      <Description description={card.description} />
      <Сompound compound={card.compound}/>
    </div>
  );
};
