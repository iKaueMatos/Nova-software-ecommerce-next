import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// SwiperCore.use([EffectFade, Navigation]);

export default function PageIntro() {
  return (
    <section className="page-intro">
      <Swiper
        effect="fade"
        navigation={true}
        spaceBetween={30}
        slidesPerView={1}
        modules={[Navigation]}
        loop={true}
        className="swiper-wrapper"
      >
        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/slide-1.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Venda da coleção de verão</h2>
                <a href="/" className="btn-shop">
                  <i className="icon-right"></i>
                  Compre agora
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/slide-2.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Faça da sua casa um lar</h2>
                <a href="/" className="btn-shop">
                  <i className="icon-right"></i>Compre agora
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Frete Grátis</h4>
                <p>Em compras acima de $199</p>
              </div>
            </li>

            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>99% Clientes Satisfeitos</h4>
                <p>As opiniões dos nossos clientes falam por si</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Originalidade Garantida</h4>
                <p>Garantia de 30 dias para cada produto da nossa loja</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
