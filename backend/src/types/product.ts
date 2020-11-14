import { Partner } from "./partner";

export interface Product {
  email: string;
  name: string;
  category: string;
  midstream?: Partner;
  upstream?: Partner;
  totalStars?: number;
}
