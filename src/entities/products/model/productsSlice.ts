import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Product, ProductsState } from './types';

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  currentProduct: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    },
    updateProductStatus: (state, action: PayloadAction<{ id: number; status: Product['status'] }>) => {
      const product = state.products.find(p => p.id === action.payload.id);
      if (product) {
        product.status = action.payload.status;
      }
    },
    setCurrentProduct: (state, action: PayloadAction<Product | null>) => {
      state.currentProduct = action.payload;
    },
    clearProducts: (state) => {
      state.products = [];
    },
  },
});

export const {
  setProducts,
  addProduct,
  removeProduct,
  updateProductStatus,
  setCurrentProduct,
  clearProducts,
} = productsSlice.actions;

export default productsSlice.reducer;