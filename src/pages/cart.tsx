import Layout from "../templates/Home/Main"
import { ShoppingCart } from '../components/shopping-cart';
import React from "react";

export default function Products() {
  return (
    <Layout>
      <ShoppingCart />
    </Layout>
  )
}