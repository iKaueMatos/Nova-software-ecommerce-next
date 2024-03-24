import Layout from "../layouts/app/Main";
import PageIntro from "../components/page-intro";
import ProductsFeatured from "../components/products-featured";
import Subscribe from "../components/subscribe";
import Link from "next/link";

export default function IndexPage() {
  return (
    <Layout>
      <PageIntro />
      <section className="featured">
        <div className="container">
          <article
            style={{ backgroundImage: "url(/images/featured-1.jpg)" }}
            className="featured-item featured-item-large"
          >
            <div className="featured-item__content">
              <h3>Novidades chegaram!</h3>
              <Link href="/product/collection" className="btn btn--rounded">
                Mostrar Coleção
              </Link>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/featured-2.jpg)" }}
            className="featured-item featured-item-small-first"
          >
            <div className="featured-item__content">
              <h3>Camisetas básicas $29,99</h3>
              <a href="#" className="btn btn--rounded">
                Mais detalhes
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/featured-3.jpg)" }}
            className="featured-item featured-item-small"
          >
            <div className="featured-item__content">
              <h3>Promoção neste verão</h3>
              <a href="#" className="btn btn--rounded">
                VER TUDO
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Por que nos escolher?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Frete Grátis</h4>
                <p>
                  Todas as compras acima de $199 são elegíveis para frete grátis
                  via USPS First Class Mail.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Pagamentos Fáceis</h4>
                <p>
                  Todos os pagamentos são processados instantaneamente por meio
                  de um protocolo de pagamento seguro.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Garantia de Devolução do Dinheiro</h4>
                <p>
                  Se um item chegar danificado ou você mudar de ideia, pode
                  devolvê-lo para obter um reembolso total.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Qualidade Superior</h4>
                <p>
                  Projetados para durar, cada um de nossos produtos foi
                  fabricado com os melhores materiais.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
    </Layout>
  );
}
