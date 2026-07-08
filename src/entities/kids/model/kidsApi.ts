import { createApi } from '@reduxjs/toolkit/query/react';
import type { Kid } from './types';

// Фейковые данные для детей
const fakeKids: Kid[] = [
  { id: 1, name: 'Даша', age: 7 },
  { id: 2, name: 'Мила', age: 6 },
  { id: 3, name: 'Катя', age: 3 },
  { id: 4, name: 'Лена', age: 0 },
];

export const kidsApi = createApi({
  reducerPath: 'kidsApi',
  baseQuery: () => ({ data: [] }), // полностью отключаем реальные запросы
  tagTypes: ['Kids'],
  endpoints: (builder) => ({
    getKids: builder.query<Kid[], void>({
      queryFn: async () => {
        await new Promise(resolve => setTimeout(resolve, 700)); // имитация задержки
        return { data: fakeKids };
      },
      providesTags: ['Kids'],
    }),

    addKid: builder.mutation<Kid, Omit<Kid, 'id'>>({
      queryFn: async (newKidData) => {
        await new Promise(resolve => setTimeout(resolve, 400));

        const newKid: Kid = {
          ...newKidData,
          id: Date.now(),
        };

        return { data: newKid };
      },
      invalidatesTags: ['Kids'],
    }),
  }),
});

export const {
  useGetKidsQuery,
  useAddKidMutation
} = kidsApi;