import Link from 'next/link';
import { some } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavProduct } from '../../../context/store/reducers/user';
import { ProductTypeList } from 'types';
import React from 'react';
import { RootState } from '../../../context/store';

export default function ProductItem({ discount, images, id, name, price, currentPrice }: ProductTypeList) {
  const dispatch = useDispatch();
  const { favProducts } = useSelector((state: RootState) => state.user);

  const isFavourite = some(favProducts, productId => productId === id);

  const toggleFav = () => {
    dispatch(toggleFavProduct(
      {
        id,
      }
    ))
  }

  return (
    <div className="product-item">
      <div className="product__image">
        <button type="button" onClick={toggleFav} className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}><i className="icon-heart"></i></button>

        <Link href={`/product/${id}`}>
          <a>
            <img src={images ? images[0] : ''} alt="product" />
            {discount &&
              <span className="product__discount">{discount}%</span>
            }
          </a>
        </Link>
      </div>

      <div className="product__description">
        <h3>{name}</h3>
        <div className={"product__price " + (discount ? 'product__price--discount' : '')} >
          <h4>R${currentPrice}</h4>

          {discount &&
            <span>${price}</span>
          }
        </div>
      </div>
    </div>
  )
};