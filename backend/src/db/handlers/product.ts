import { Product } from "../models/product";
import type { Product as ProductType } from "../../types/product";

export const insertProduct = async (
  product: ProductType
): Promise<ProductType> => {
  return new Product(product).save().catch((e) => {
    console.log(e);
    throw e;
  });
};

export const updateProductByName = async (
  name: string,
  update: Record<string, unknown>
): Promise<ProductType> => {
  return Product.findOneAndUpdate({ name }, update, {
    new: true
  }).catch((e) => {
    console.log(e);
    throw e;
  });
};
