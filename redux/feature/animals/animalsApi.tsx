import { apiSlice } from "../api/apiSlice";

export const animalsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAnimals: builder.query({
      query: ({ limit, page }) =>
        `/api/v1/birds/pagination?limit=${limit}&page=${page}`,
    }),
  }),
});

export const {useGetAnimalsQuery} = animalsApi;
//https://api.thecatapi.com/v1/images/search?limit=10
