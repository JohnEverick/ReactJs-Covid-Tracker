import { GET_COUNTRY_COUNTS } from "./actionTypes";

export const getCountryCounts = (data) => ({
  type: GET_COUNTRY_COUNTS,
  payload: { data },
});
