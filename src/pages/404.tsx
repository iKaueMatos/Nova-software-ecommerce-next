import React from 'react';
import LayoutError from '../templates/ErrorFallback/404';
import Link from 'next/link';

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
