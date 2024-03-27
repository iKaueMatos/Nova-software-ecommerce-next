import Layout from "./__layouts/app/Main";
import Breadcrumb from "../components/breadcrumb";
import { ProductsFilter } from "../components/_ui/products-filter";
import ProductsContent from "../components/_ui/products-content";

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
