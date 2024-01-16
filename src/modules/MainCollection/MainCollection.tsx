import React, { useEffect } from "react";
import { CustomContainer } from "./components/CustomContainer/CustomContainer";
import { Title } from "./components/Title/Title";
import { ListCard } from "../../components/ListCard/ListCard";
import { Btn } from "./components/Btn/Btn";
import { useAppDispatch } from "../../app/hooks";
import { fetchCardFavorite } from "./store/slice/cardsSlice";
import { useSelector } from "react-redux";
import { MySpinner } from "../../UI/MySpinner/MySpinner";

export const MainCollection = () => {
  const dispatch = useAppDispatch();
  const { cards, loading, error } = useSelector(
    (state: any) => state.cardsFavorite
  );

  useEffect(() => {
      dispatch(fetchCardFavorite());
  }, []);

  return (
    <>
      <CustomContainer>
        <Title>Коллекция Youtan Poluo</Title>
        {loading ? (
          <MySpinner />
        ) : (
          <>{error ? <div>{error}</div> : <ListCard cards={cards} />}</>
        )}
      </CustomContainer>
      <Btn />
    </>
  );
};
