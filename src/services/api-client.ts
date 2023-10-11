import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5362348718ba4f8d9ee1c4244b7a91a8",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}