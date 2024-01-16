import { Col, Container, Row, Spinner } from "react-bootstrap";
import { ListCard } from "../../components/ListCard/ListCard";
import { FilterAndSort } from "./components/FilterAndSort/FilterAndSort";
import { CustomContainer } from "./components/CustomContainer/CustomContainer";
import { useAppDispatch } from "../../app/hooks";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchCard, setPage, setPrevUrl } from "./store/slice/allCardsSlice";
import { useObserver } from "../../hooks/useObserver";
import { MySpinner } from "../../UI/MySpinner/MySpinner";

export const Shope = () => {
  const dispatch = useAppDispatch();
  const lastElement = useRef<HTMLDivElement>(null);
  const { cards, typeId, bySort, page, loading, error, totalPages, prevUrl } =
    useSelector((state: any) => state.allCards);

  useObserver(lastElement, page < totalPages, loading, () => {
    dispatch(setPage());
  });


useEffect(() => {
  if (prevUrl !== 'product') {
    const params = {
      bySort,
      page,
      typeId,
    };
    dispatch(fetchCard(params));
  } else {
    dispatch(setPrevUrl(undefined))
  }
  }, [page, typeId, bySort, dispatch]);

  return (
    <Container>
      <CustomContainer>
        <Row className="g-4">
          <Col lg={3} xl={2}>
            <FilterAndSort />
          </Col>
          <>
            <Col lg={9} xl={10}>
              {!loading && error && <div>{error}</div>}
              <ListCard cards={cards} />
            </Col>
            <div ref={lastElement} style={{ height: 20 }} />

            {loading && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 50,
                }}
              >
                <MySpinner />
              </div>
            )}
          </>
        </Row>
      </CustomContainer>
    </Container>
  );
};
