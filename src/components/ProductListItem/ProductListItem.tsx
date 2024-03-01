import React from "react";
import { Product } from "../../services/valantisService.types";
import { formatPrice } from "../../format/format";

type ProductListItemProps = React.HTMLProps<HTMLLIElement> & {
  product: Product;
};

export const ProductListItem: React.FC<ProductListItemProps> = ({
  product,
}) => {
  return (
    <li
      className={
        "flex text-secondary flex-col justify-between items-start gap-3 rounded-lg bg-surface-container-low shadow-elevation-1 cursor-pointer p-4"
      }
    >
      <div className="text-body">
        id: <span className="text-on-surface-op-38">{product.id}</span>
      </div>
      <div className="text-body">
        <span className="mr-1">Бренд:</span>
        {product.brand ? (
          <h3 className="inline text-title text-primary">{product.brand}</h3>
        ) : (
          <span className="text-on-surface-op-38">не указан</span>
        )}
      </div>
      <div className="flex flex-col ">
        <span className="text-body">Название:</span>
        <h3 className="text-title text-primary">{product.product}</h3>
      </div>
      <div className="text-body">
        Цена:
        <span className="text-title text-tertiary-fixed-dim ml-1">
          {formatPrice(product.price)}
        </span>
      </div>
    </li>
  );
};
