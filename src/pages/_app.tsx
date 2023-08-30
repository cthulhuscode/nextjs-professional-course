import { ElementType } from 'react';
import Layout from '@layout/MainLayout';
import '@styles/tailwind.css';

type MyAppProps = {
  Component: ElementType;
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}
