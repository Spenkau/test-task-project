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
            query: () => 'vacancies',
        }),
        getVacanciesByKeyword: builder.query({
            query: (keyword) => `vacancies/?published=1&keyword=${keyword}`
        }),
        getVacanciesByFilter: builder.query({
            query: ([from= 0, to = 0, catalogues = 0]) => {
                console.log(from, to, catalogues)
                return `vacancies/?published=1&payment_from=${from}&payment_to=${to}&catalogues=${catalogues}`
            }
        }),
        getVacancy: builder.query({
            query: (id) => `vacancies/${id}`
        })
    })
});

export const { useGetVacanciesQuery, useGetVacanciesByKeywordQuery, useGetVacancyQuery, useGetVacanciesByFilterQuery} = apiSlice;