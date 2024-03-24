import Head from 'next/head';

import { useRouter } from 'next/router';
import React from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
}

export default ({ children, title = 'Nova Software ecommerce' }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className={(pathname !== '/' ? 'main-page' : '')}>
        {children}
      </main>
      <Footer />
    </div>
  )
}