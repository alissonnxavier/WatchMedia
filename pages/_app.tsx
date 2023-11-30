import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import type { Metadata } from 'next';

import '../styles/globals.css';
import { title } from 'process';

export const metadata: Metadata = {
  title: '...',
  description: '...',
}
 

export default function App({
  Component,
  pageProps: {
    session,
  
    ...pageProps
  }
}: AppProps) {

 

  return (
    
    <SessionProvider session={session}>
      <Component {...pageProps} />
      
    </SessionProvider>
  )
}
