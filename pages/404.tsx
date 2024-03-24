import Link from 'next/link';
import LayoutError from '../layouts/error/404';

export default function ErrorPage() {
  return (
    <LayoutError>
      <section className="error-page">
        <div className="container">
          <h1>Erro 404</h1>
          <p>Woops. Página não existe</p>
          <Link href="/" className="btn btn--rounded btn--yellow">Voltar para pagina inicial</Link>
        </div>
      </section>
    </LayoutError>
  )
}
