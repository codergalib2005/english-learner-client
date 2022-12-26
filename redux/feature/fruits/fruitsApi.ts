import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "../api/apiSlice";

export const fruitsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFruits: builder.query({
      query: ({ limit, page }) => `/api/v1/fruits/?limit=${limit}&page=${page}`,
    }),
  }),
});

export const { useGetFruitsQuery } = fruitsApi;
