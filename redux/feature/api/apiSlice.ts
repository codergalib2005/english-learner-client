import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://basic-learner-server.vercel.app/",
  }),
  endpoints: (builder) => ({}),
});

// export const {} = apiSlice;
