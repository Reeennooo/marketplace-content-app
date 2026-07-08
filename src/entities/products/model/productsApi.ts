import { createApi } from '@reduxjs/toolkit/query/react';
import type { Product } from './types';

// Фейковые данные
const fakeProducts: Product[] = [
  {
    id: 1,
    title: "Шапка зимняя для мальчика вязаная на завязках",
    article: "9624662",
    brand: "РусБубон",
    gender: "male",
    status: "uploaded",
    image: "https://basket-01.wbbasket.ru/vol96/part9624/9624662/images/big/1.webp",
    link: "https://www.wildberries.ru/catalog/9624662/detail.aspx",
  },
  {
    id: 2,
    title: "Шапка зимняя детская вязаная на завязках",
    article: "9624665",
    brand: "РусБубон",
    gender: "female",
    status: "approved",
    image: "https://basket-01.wbbasket.ru/vol96/part9624/9624665/images/big/1.webp",
    link: "https://www.wildberries.ru/catalog/9624665/detail.aspx",
  },
  {
    id: 3,
    title: "Шарф зимний вязаный с помпонами",
    article: "10009183",
    brand: "РусБубон",
    gender: "male",
    status: "in_progress",
    image: "https://basket-01.wbbasket.ru/vol100/part10009/10009183/images/big/1.webp",
    link: "https://www.wildberries.ru/catalog/10009183/detail.aspx",
  },
  {
    id: 4,
    title: "Шарф зимний вязаный с помпонами для детей",
    article: "10009211",
    brand: "РусБубон",
    gender: "female",
    status: "none",
    image: "https://basket-01.wbbasket.ru/vol100/part10009/10009211/images/big/1.webp",
    link: "https://www.wildberries.ru/catalog/10009211/detail.aspx",
  },
  {
    id: 5,
    title: "Шапка бини демисезонная вязаная",
    article: "10582514",
    brand: "РусБубон",
    gender: "male",
    status: "uploaded",
    image: "https://basket-01.wbbasket.ru/vol105/part10582/10582514/images/big/1.webp",
    link: "https://www.wildberries.ru/catalog/10582514/detail.aspx",
  },
  {
    id: 6,
    title: "Шапка детская зимняя с помпоном и снуд",
    article: "17868132",
    brand: "Ok Top",
    gender: "female",
    status: "approved",
    image: "https://basket-02.wbbasket.ru/vol178/part17868/17868132/images/big/1.webp",
    link: "https://www.wildberries.ru/catalog/17868132/detail.aspx",
  },
  {
    id: 7,
    title: "Шапка для девочки весенняя с ушками и снуд",
    article: "18200573",
    brand: "Ok Top",
    gender: "female",
    status: "in_progress",
    image: "https://basket-02.wbbasket.ru/vol182/part18200/18200573/images/big/1.webp",
    link: "https://www.wildberries.ru/catalog/18200573/detail.aspx",
  },
  {
    id: 8,
    title: "Шапка детская зимняя и снуд вязаные",
    article: "18209798",
    brand: "Ok Top",
    gender: "male",
    status: "uploaded",
    image: "https://basket-02.wbbasket.ru/vol182/part18209/18209798/images/big/1.webp",
    link: "https://www.wildberries.ru/catalog/18209798/detail.aspx",
  },
  {
    id: 9,
    title: "Шапка зимняя вязаная детская",
    article: "105063726",
    brand: "Sweet Moment",
    gender: "female",
    status: "none",
    image: "https://basket-06.wbbasket.ru/vol1050/part105063/105063726/images/big/1.webp",
    link: "https://www.wildberries.ru/catalog/105063726/detail.aspx",
  },
  {
    id: 10,
    title: "Шапка зимняя вязаная детская",
    article: "105063729",
    brand: "Sweet Moment",
    gender: "male",
    status: "approved",
    image: "https://basket-06.wbbasket.ru/vol1050/part105063/105063729/images/big/1.webp",
    link: "https://www.wildberries.ru/catalog/105063729/detail.aspx",
  },
  {
    id: 11,
    title: "Шапка зимняя вязаная детская",
    article: "105063730",
    brand: "Sweet Moment",
    gender: "female",
    status: "in_progress",
    image: "https://basket-06.wbbasket.ru/vol1050/part105063/105063730/images/big/1.webp",
    link: "https://www.wildberries.ru/catalog/105063730/detail.aspx",
  },
  {
    id: 12,
    title: "Шапка детская зимняя вязаная и шарф",
    article: "109563588",
    brand: "Ok Top",
    gender: "male",
    status: "uploaded",
    image: "https://basket-07.wbbasket.ru/vol1095/part109563/109563588/images/big/1.webp",
    link: "https://www.wildberries.ru/catalog/109563588/detail.aspx",
  },
  {
    id: 13,
    title: "Шапка детская зимняя вязаная и шарф",
    article: "109563595",
    brand: "Ok Top",
    gender: "female",
    status: "approved",
    image: "https://basket-07.wbbasket.ru/vol1095/part109563/109563595/images/big/1.webp",
    link: "https://www.wildberries.ru/catalog/109563595/detail.aspx",
  },
  {
    id: 14,
    title: "Демисезонная шапка для детей с ушками вязаная",
    article: "115511204",
    brand: "Ok Top",
    gender: "male",
    status: "none",
    image: "https://basket-08.wbbasket.ru/vol1155/part115511/115511204/images/big/1.webp",
    link: "https://www.wildberries.ru/catalog/115511204/detail.aspx",
  },
  {
    id: 15,
    title: "Демисезонная шапка детская на завязках с бусинами",
    article: "116285449",
    brand: "Ok Top",
    gender: "female",
    status: "in_progress",
    image: "https://basket-08.wbbasket.ru/vol1162/part116285/116285449/images/big/1.webp",
    link: "https://www.wildberries.ru/catalog/116285449/detail.aspx",
  },
];

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: () => ({ data: [] }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      queryFn: async () => {
        await new Promise(resolve => setTimeout(resolve, 600));
        return { data: fakeProducts };
      },
      providesTags: ['Products'],
    }),

    updateProductStatus: builder.mutation<
      Product,
      { id: number; status: Product['status'] }
    >({
      queryFn: async ({ id, status }) => {
        await new Promise(resolve => setTimeout(resolve, 300));

        const product = fakeProducts.find(p => p.id === id);
        if (product) {
          product.status = status;
          return { data: product };
        }

        throw new Error('Товар не найден');
      },
      invalidatesTags: ['Products'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useUpdateProductStatusMutation
} = productsApi;