export interface Product {
  id: number;
  title: string;           // Название
  article: string;         // Артикул
  brand: string;
  gender: 'male' | 'female' | 'unisex';
  status: ProductStatus;
  image: string;           // Первое фото (URL)
  link: string;            // Ссылка на карточку
}

export type ProductStatus =
  | "in_progress"
  | "approved"
  | "uploaded"
  | "none";

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  currentProduct: Product | null;
}