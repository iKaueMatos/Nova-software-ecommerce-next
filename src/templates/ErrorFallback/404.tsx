import Head from "next/head";
import Header from  "../../components/header/index";
import { useRouter } from "next/router";
import Footer from  "../../components/footer/index";

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
};

export default ({ children, title = "Pagina não encontrada" }: LayoutType) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
      <Head>
        <title>Página não encontrada &mdash; {title}</title>
      </Head>
      <Header isErrorPage />
      <main className={pathname !== "/" ? "main-page" : ""}>{children}</main>
      <Footer />
    </div>
  );
};
