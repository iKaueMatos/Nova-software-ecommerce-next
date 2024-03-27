import Layout from "../templates/Home/Main";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { server } from "../shared/server";
import { postData } from "../shared/services";

type LoginMail = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data: LoginMail) => {
    const res = await postData(`${server}/api/login`, {
      email: data.email,
      password: data.password,
    });
  };

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <span>
                <i className="icon-left"></i> Voltar para a loja
              </span>
            </Link>
          </div>

          <div className="form-block">
            <h2 className="form-block__title">Entrar</h2>
            <p className="form-block__description">
              Lorem Ipsum é simplesmente um texto fictício da indústria de
              impressão e composição de texto. O Lorem Ipsum tem sido o texto
              fictício padrão da indústria desde os anos 1500
            </p>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="E-mail"
                  type="text"
                  name="email"
                  ref={register({
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />

                {errors.email && errors.email.type === "required" && (
                  <p className="message message--error">
                    Este campo é obrigatório
                  </p>
                )}

                {errors.email && errors.email.type === "pattern" && (
                  <p className="message message--error">
                    Por favor, insira um e-mail válido
                  </p>
                )}
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  type="password"
                  placeholder="Senha"
                  name="password"
                  ref={register({ required: true })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="message message--error">
                    Este campo é obrigatório
                  </p>
                )}
              </div>

              <div className="form__info">
                <div className="checkbox-wrapper">
                  <label
                    htmlFor="check-signed-in"
                    className={`checkbox checkbox--sm`}
                  >
                    <input
                      type="checkbox"
                      name="keepSigned"
                      id="check-signed-in"
                      ref={register({ required: false })}
                    />
                    <span className="checkbox__check"></span>
                    <p>Manter-me conectado</p>
                  </label>
                </div>
                <a
                  href="/forgot-password"
                  className="form__info__forgot-password"
                >
                  Esqueceu a senha?
                </a>
              </div>

              <div className="form__btns">
                <button type="button" className="btn-social fb-btn">
                  <i className="icon-facebook"></i>Facebook
                </button>
                <button type="button" className="btn-social google-btn">
                  <img src="/images/icons/gmail.svg" alt="gmail" /> Gmail
                </button>
              </div>

              <button
                type="submit"
                className="btn btn--rounded btn--yellow btn-submit"
              >
                Entrar
              </button>

              <p className="form__signup-link">
                Ainda não é membro? <a href="/register">Cadastre-se</a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
