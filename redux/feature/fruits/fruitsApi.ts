import { apiSlice } from "../api/apiSlice";

export const fruitsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFruits: builder.query({
      query: ({ limit, page }) =>
        `/api/v1/birds/pagination?limit=${limit}&page=${page}`,
    }),
  }),
});

export const {useGetFruitsQuery} = fruitsApi;
