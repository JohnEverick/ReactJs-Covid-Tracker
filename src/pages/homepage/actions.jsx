import { GET_GLOBAL_COUNTS } from "./actionTypes";

export const getCountryCounts = (dailyData) => ({
  type: GET_GLOBAL_COUNTS,
  payload: { dailyData },
});
