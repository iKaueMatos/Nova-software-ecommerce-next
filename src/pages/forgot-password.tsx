import Layout from "../templates/Home/Main"
import Link from "next/link";
import { useForm } from "react-hook-form";
import { server } from "../shared/server";
import { postData } from "../shared/services";
import React from "react";

type ForgotMail = {
  email: string;
};

export default function ForgotPassword() {
  const onSubmit = async (data: ForgotMail) => {
    const res = await postData(`${server}/api/login`, {
      email: data.email,
    });

    console.log(res);
  };

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <span>
                <i className="icon-left"></i>
                Voltar para a loja
              </span>
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">Esqueceu sua senha?</h2>
            <p className="form-block__description">
              Digite seu e-mail ou número de telefone para recuperar sua conta
            </p>

            <form className="form">
              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="e-mail"
                  type="text"
                  name="email"
                  ></input>
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  type="password"
                  placeholder="Senha"
                  name="password"
                />
              </div>

              <button
                type="submit"
                className="btn btn--rounded btn--yellow btn-submit"
              >
                Redefinir senha
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
