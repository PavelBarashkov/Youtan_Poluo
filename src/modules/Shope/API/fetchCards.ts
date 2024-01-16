import axios from "axios";

export const fetchCards = async (
  bySort: string,
  page: number,
  typeId?: number | undefined,
  limit: number = 9
) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/card/model/mini`,
    {
      params: {
        typeId,
        bySort,
        page,
        limit,
      },
    }
  );
  return response;
};
