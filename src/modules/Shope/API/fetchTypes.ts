import axios from "axios";

export const fetchTypes = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/type/product/all`
  );
  return response;
};
