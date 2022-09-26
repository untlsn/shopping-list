import type { Component } from 'solid-js';
import type { PageContextBuiltIn } from 'vite-plugin-ssr';

export type PageProps = {}
export interface PageContext extends PageContextBuiltIn {
  Page: (pageProps: PageProps) => Component
  pageProps: PageProps
  documentProps?: {
    title?: string
    description?: string
  }
}
