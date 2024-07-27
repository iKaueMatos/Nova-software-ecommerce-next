import Breadcrumb from "../components/breadcrumb";
import { ProductsFilter } from "../components/_ui/products-filter";
import ProductsContent from "../components/_ui/products-content";
import Layout from "../templates/Home/Main"
import React from "react";

export default function Products() {
  return (
    <Layout>
      <Breadcrumb />
      <section className="products-page">
        <div className="container">
          <ProductsFilter />
          <ProductsContent />
        </div>
      </section>
    </Layout>
  );
}
