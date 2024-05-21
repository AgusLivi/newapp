import { createApi, fetchBaseQuery  } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000'
    }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => '/getById'
        }),
        createUser: builder.mutation({
            query: (newUser) => ({
                url: '/createUser',
                method: 'POST',
                body: newUser
            })
        })
    })

})

export const { useGetUserQuery, useCreateUserMutation } = api