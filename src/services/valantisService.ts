import axios from "axios";
import md5 from "crypto-js/md5";
import {
  AxiosResult,
  FieldParams,
  FilterParams,
  Product,
  ProductFieldsValue,
} from "./valantisService.types";

const apiPassword = import.meta.env.VITE_API_PASSWORD;

const getApiKey = () => {
  const passwordTimeStamp = new Date()
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "");

  const passwordAPI = md5(`${apiPassword}${passwordTimeStamp}`).toString();

  return passwordAPI;
};

const baseUrl = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
    "X-Auth": getApiKey(),
  },
});

export class ValantisService {
  getFilteredIds = async (filter: FilterParams = {}) => {
    const { brand, price, product } = filter;

    const hasFilter = Boolean(brand || price != null || product);
    const action = hasFilter ? "filter" : "get_ids";

    const { data } = await api.post<AxiosResult<string[]>>(baseUrl, {
      action,
      params: hasFilter ? filter : undefined,
    });

    return data.result;
  };

  getItems = async (ids: string[]) => {
    const { data } = await api.post<AxiosResult<Product[]>>(baseUrl, {
      action: "get_items",
      params: { ids },
    });

    const uniqueProducts = data.result.filter(
      (obj, idx, arr) => idx === arr.findIndex((t) => t.id === obj.id)
    );

    return uniqueProducts;
  };

  getFieldValues = async (params?: FieldParams) => {
    const { data } = await api.post<AxiosResult<ProductFieldsValue[]>>(
      baseUrl,
      {
        action: "get_fields",
        params: params ?? undefined,
      }
    );

    return data.result;
  };
}
