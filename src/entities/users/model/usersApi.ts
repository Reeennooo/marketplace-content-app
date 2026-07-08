import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from './types';

// Фейковые данные
const fakeUsers: User[] = [
  { id: 1, name: 'София Орлеанская', email: 'anna@example.com', role: 'content' },
  { id: 2, name: 'Ксения Дресвянникова', email: 'dmitry@example.com', role: 'content' },
  { id: 3, name: 'Ксения Бондарева', email: 'maria@example.com', role: 'marketing' },
  { id: 4, name: 'Валерия Васютина', email: 'alex@example.com', role: 'marketing' },
  { id: 5, name: 'Анастасия Демченко', email: 'alex@example.com', role: 'marketing' },
  { id: 5, name: 'Ева Драпкина', email: 'alex@example.com', role: 'content' },
];

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }), // не важно, т.к. не будет реальных запросов
  tagTypes: ['Users'],
  endpoints: (builder) => ({

    // getUsers: builder.query<User[], void>({
    //   query: () => 'users', // можно оставить, но...
    //
    //   // ← Главное: имитация ответа без реального запроса
    //   transformResponse: async (): Promise<User[]> => {
    //     // Имитация задержки сети
    //     await new Promise(resolve => setTimeout(resolve, 600));
    //     return fakeUsers;
    //   },
    // }),
    //
    // addUser: builder.mutation<User, Omit<User, 'id'>>({
    //   query: () => '', // не будет использоваться
    //   transformResponse: (response, meta, arg) => {
    //     const newUser: User = {
    //       ...arg,
    //       id: Date.now(),
    //     };
    //     return newUser;
    //   },
    //   invalidatesTags: ['Users'],
    // }),

    // TODO ФИКСАНИ ФЕЙК ЗАПРОСЫ
    getUsers: builder.query<User[], void>({
      // Полностью мок — без HTTP
      queryFn: async () => {
        await new Promise(resolve => setTimeout(resolve, 700)); // имитация загрузки
        return { data: fakeUsers };
      },
      providesTags: ['Users'],
    }),

    addUser: builder.mutation<User, Omit<User, 'id'>>({
      queryFn: async (newUserData) => {
        await new Promise(resolve => setTimeout(resolve, 400));
        const newUser: User = {
          ...newUserData,
          id: Date.now(),
        };
        return { data: newUser };
      },
      invalidatesTags: ['Users'],
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation } = usersApi;