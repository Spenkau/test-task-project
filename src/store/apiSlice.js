import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'get_vacancies',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://startup-summer-2023-proxy.onrender.com/2.0/',
        headers: {
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        }
    }),
    endpoints: (builder) => ({
        getVacancies: builder.query({
            query: (count = 10) => 'vacancies/?count=10',
        }),
        getVacanciesByKeyword: builder.query({
            query: (keyword) => `vacancies/?count=10&keyword=${keyword}`
        }),
        getVacancy: builder.query({
            query: (id) => `vacancies/${id}`
        })
    })
});

export const { useGetVacanciesQuery, useGetVacanciesByKeywordQuery, useGetVacancyQuery } = apiSlice;