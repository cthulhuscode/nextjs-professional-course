import { ElementType } from 'react';
import '@styles/tailwind.css';

type MyAppProps = {
  Component: ElementType;
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />;
}
