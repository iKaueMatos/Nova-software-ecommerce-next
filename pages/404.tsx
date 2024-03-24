import LayoutError from '../layouts/404';

const ErrorPage = () => (
  <LayoutError>
    <section className="error-page">
      <div className="container">
        <h1>Erro 404</h1>
        <p>Woops. Página não existe</p>
        <a href="#" className="btn btn--rounded btn--yellow">Voltar para pagina inicial</a>
      </div>
    </section>
  </LayoutError>
)

export default ErrorPage