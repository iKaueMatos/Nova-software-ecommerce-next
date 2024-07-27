import { useState } from "react";
import { CheckboxColor } from "./../../products-filter/form-builder/checkbox-color";
import { useDispatch, useSelector } from "react-redux";
import { some } from "lodash";

import { ProductType, ProductStoreType } from "../../../../@types";
import React from "react";
import { RootState } from "../../../../context/store";
import { toggleFavProduct } from "../../../../context/store/reducers/user";
import { addProduct } from "../../../../context/store/reducers/cart";
import { productsSizes } from '../../../../shared/data/products-sizes';
import { productsColors } from '../../../../shared/data/products-colors';

type ProductContent = {
  product: ProductType;
};

export function Content({ product }: ProductContent) {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);
  const [color, setColor] = useState<string>("");
  const [itemSize, setItemSize] = useState<string>("");

  const onColorSet = (e: string) => setColor(e);
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setItemSize(e.target.value);

  const { favProducts } = useSelector((state: RootState) => state.user);
  const isFavourite = some(
    favProducts,
    (productId) => productId === product.id
  );

  const toggleFav = () => {
    dispatch(
      toggleFavProduct({
        id: product.id,
      })
    );
  };

  const addToCart = () => {
    const productToSave: ProductStoreType = {
      id: product.id,
      name: product.name,
      thumb: product.images ? product.images[0] : "",
      price: product.currentPrice,
      count: count,
      color: color,
      size: itemSize,
    };

    const productStore = {
      count,
      product: productToSave,
    };

    dispatch(addProduct(productStore));
  };

  return (
    <section className="product-content">
      <div className="product-content__intro">
        <h5 className="product__id">
          Produto ID:<br></br>
          {product.id}
        </h5>
        <span className="product-on-sale">Valor</span>
        <h2 className="product__name">{product.name}</h2>

        <div className="product__prices">
          <h4>R${product.currentPrice}</h4>
          {product.discount && <span>R${product.price}</span>}
        </div>
      </div>

      <div className="product-content__filters">
        <div className="product-filter-item">
          <h5>Color:</h5>
          <div className="checkbox-color-wrapper">
            {productsColors.map((type) => (
              <CheckboxColor
                key={type.id}
                type={"radio"}
                name="product-color"
                color={type.color}
                valueName={type.label}
                onChange={onColorSet}
              />
            ))}
          </div>
        </div>
        <div className="product-filter-item">
          <h5>
            Tamanhos: <strong>Tabela de tamanho</strong>
          </h5>
          <div className="checkbox-color-wrapper">
            <div className="select-wrapper">
              <select onChange={onSelectChange}>
                <option>Tamanhos</option>
                {productsSizes.map((type) => (
                  <option value={type.label}>{type.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="product-filter-item">
          <h5>Quantity:</h5>
          <div className="quantity-buttons">
            <div className="quantity-button">
              <button
                type="button"
                onClick={() => setCount(count - 1)}
                className="quantity-button__btn"
              >
                -
              </button>
              <span>{count}</span>
              <button
                type="button"
                onClick={() => setCount(count + 1)}
                className="quantity-button__btn"
              >
                +
              </button>
            </div>

            <button
              type="submit"
              onClick={() => addToCart()}
              className="btn btn--rounded btn--yellow"
            >
              Adicionar no carrinho
            </button>
            <button
              type="button"
              onClick={toggleFav}
              className={`btn-heart ${isFavourite ? "btn-heart--active" : ""}`}
            >
              <i className="icon-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
