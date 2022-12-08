import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "../api/apiSlice";

export const birdApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBirds: builder.query({
      query: ({ limit, page }) =>
        `/api/v1/birds/pagination?limit=${limit}&page=${page}`,
    }),
  }),
});

export const { useGetBirdsQuery } = birdApi;
// https://api.thecatapi.com/v1/images/search?limit=10
