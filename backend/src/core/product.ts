import { insertProduct, updateProductByName } from "../db/handlers/product";
import { findOneReportByEmail } from "../db/handlers/report";
import { findOneByEmail } from "../db/handlers/user";
import { emitMessage } from "../services/websocket";
import { Product as ProductType } from "../types/product";

export const registerProduct = async (email: string, productrequest: any) => {
  const product: ProductType = {
    email,
    name: productrequest.name,
    category: productrequest.category,
    midstream: {
      verified: false,
      existence: false,
      stars: 0
    },
    stars: 0
  };
  const res = await insertProduct(product);
  if (!res) {
    return;
  }

  emitMessage({
    message: "approve",
    content: { sender: email, receiver: productrequest.partner, product }
  });

  return res;
};

export const updateProduct = async (
  productName: string,
  email: string,
  partnerEmail: string
) => {
  let product;
  const approver = await findOneByEmail(email);
  const report = await findOneReportByEmail(partnerEmail);

  if (approver.accountType == "midstream") {
    product = await updateProductByName(productName, {
      midstream: { verified: true, existence: true, stars: report.stars }
    });
  } else {
    product = await updateProductByName(productName, {
      upstream: { verified: true, existence: true, stars: report.stars }
    });
    const productRate =
      (product.midstream!.stars + product.upstream!.stars) / 2;
    const productStars = Math.floor(productRate);
    product = updateProductByName(productName, {
      stars: productStars
    });
  }

  console.log(product);
  return product;
};

export const notifyUpstream = async (productName: string, email: string) => {
  const product = await updateProductByName(productName, {
    upstream: { verified: false, existence: false, stars: 0 }
  });
  emitMessage({
    message: "approve",
    content: { sender: product.email, receiver: email, product }
  });
  return product;
};
