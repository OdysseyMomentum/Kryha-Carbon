import mongoose, { Schema, Document } from "mongoose";
import type { Product as ProductType } from "../../types/product";
import type { Partner as PartnerType } from "../../types/partner";

const partnerSchema = new Schema<PartnerType>(
  {
    verified: {
      type: Boolean,
      required: true,
      default: false
    },
    existence: {
      type: Boolean,
      required: true,
      default: false
    },
    stars: {
      type: Number,
      required: true,
      default: 0
    }
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret._id;
        delete ret.__v;
      }
    }
  }
);

const productSchema = new Schema<ProductType>(
  {
    email: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    midstream: {
      type: partnerSchema,
      required: false
    },
    upstream: {
      type: partnerSchema,
      required: false
    },
    totalStars: {
      type: Number
    }
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret._id;
        delete ret.__v;
      }
    }
  }
);

const Product = mongoose.model<ProductType & Document>(
  "Product",
  productSchema
);

export { Product };
