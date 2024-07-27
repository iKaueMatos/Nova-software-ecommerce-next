import { GetServerSideProps } from 'next'

import { useState } from 'react';
import Layout from "../../templates/Home/Main"
import Breadcrumb  from '../../components/breadcrumb';
import ProductsFeatured from '../../components/_ui/products-featured'; 
import { server } from '../../shared/server';

// types
import { ProductType } from '../../@types';
import React from 'react';
import Gallery from '../../components/_ui/product-single/gallery';
import { Content } from '../../components/_ui/product-single/content';
import Description from '../../components/_ui/product-single/description';
import Reviews from '../../components/_ui/product-single/reviews';

type ProductPageType = {
  product: ProductType;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const pid = query.pid;
  const res = await fetch(`${server}/api/product/${pid}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  }
}

export default function Product({ product }: ProductPageType) {
  const [showBlock, setShowBlock] = useState('description');

  return (
    <Layout>
      <Breadcrumb />

      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <Gallery images={product.images} />
            <Content product={product} />
          </div>

          <div className="product-single__info">
            <div className="product-single__info-btns">
              <button type="button" onClick={() => setShowBlock('description')} className={`btn btn--rounded ${showBlock === 'description' ? 'btn--active' : ''}`}>Descrição</button>
              <button type="button" onClick={() => setShowBlock('reviews')} className={`btn btn--rounded ${showBlock === 'reviews' ? 'btn--active' : ''}`}>Review</button>
            </div>

            <Description show={showBlock === 'description'} />
            <Reviews product={product} show={showBlock === 'reviews'} />
          </div>
        </div>
      </section>

      <div className="product-single-page">
        <ProductsFeatured />
      </div>
    </Layout>
  );
}