// @ts-ignore
import { generateHydrationScript, renderToStream } from 'solid-js/web';
import { escapeInject, dangerouslySkipEscape, stampPipe } from 'vite-plugin-ssr';
import { App } from './App';
import type { PageContext } from './types';

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'documentProps'];

export function render(pageContext: PageContext) {
  const { pipe } = renderToStream(() => <App route={() => pageContext} />);
  stampPipe(pipe, 'node-stream');

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext;
  const title = (documentProps && documentProps.title) || 'Vite SSR app';
  const description = (documentProps && documentProps.description) || 'App using Vite + vite-plugin-ssr';

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${description}" />
        <title>${title}</title>
        ${dangerouslySkipEscape(generateHydrationScript())}
      </head>
      <body>
        <div id="page-view">${pipe}</div>
      </body>
    </html>`;
}
