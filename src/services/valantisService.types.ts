export interface Product {
  brand: string | null;
  id: string;
  price: number;
  product: string;
}

export type PaginationParams = { offset: number; limit: number } | null;

export type AxiosResult<T> = { result: T };

export type ProductFields = keyof Omit<Product, "id">;

export type ProductFieldsValue = Product[keyof Product];

export type FilterParams = {
  brand?: string;
  price?: number;
  product?: string;
};

export type FieldParams = {
  field?: ProductFields;
  offset?: number;
  limit?: number;
};
