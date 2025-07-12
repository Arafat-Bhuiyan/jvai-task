import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const aliApi = createApi({
  reducerPath: "aliApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://alibackend.duckdns.org",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credential) => ({
        url: "/authentication_app/signin/",
        method: "POST",
        body: credential,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    signupUser: builder.mutation({
      query: (credential) => ({
        url: "/authentication_app/signup/",
        method: "POST",
        body: credential,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useLoginUserMutation, useSignupUserMutation } = aliApi;
