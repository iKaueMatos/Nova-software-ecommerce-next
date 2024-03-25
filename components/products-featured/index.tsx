import ProductsCarousel from './carousel';
import useSwr from 'swr';

export default function ProductsFeatured() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSwr('/services/api/products', fetcher);

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Selecione só para você</h3>
          <a href="/products" className="btn btn--rounded btn--border">Mostrar todos</a>
        </header>

        <ProductsCarousel products={data} />
      </div>
    </section>
  )
};