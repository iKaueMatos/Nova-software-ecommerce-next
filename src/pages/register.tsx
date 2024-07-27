import React from 'react';
import Layout from "../templates/Home/Main"
import Link from "next/link";

export default function RegisterPage() {
  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <span>
                <i className="icon-left"></i>Voltar para a página principal
              </span>
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">
              Crie uma conta e descubra os benefícios
            </h2>
            <p className="form-block__description">
              Lorem Ipsum é simplesmente um texto fictício da indústria de
              impressão e composição de texto. O Lorem Ipsum tem sido o texto
              fictício padrão da indústria desde os anos 1500
            </p>

            <form className="form">
              <div className="form__input-row">
                <input className="form__input" placeholder="Nome" type="text" />
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="Sobrenome"
                  type="text"
                />
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="E-mail"
                  type="text"
                />
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  type="Password"
                  placeholder="Senha"
                />
              </div>

              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label
                    htmlFor="check-signed-in"
                    className={`checkbox checkbox--sm`}
                  >
                    <input
                      name="signed-in"
                      type="checkbox"
                      id="check-signed-in"
                    />
                    <span className="checkbox__check"></span>
                    <p>
                      Eu concordo com os Termos de Serviço e a Política de
                      Privacidade do Google
                    </p>
                  </label>
                </div>
              </div>

              <button
                type="button"
                className="btn btn--rounded btn--yellow btn-submit"
              >
                Cadastrar-se
              </button>

              <p className="form__signup-link">
                <Link href="/login">Já é membro?</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
