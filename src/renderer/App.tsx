import type { Accessor } from 'solid-js';
import type { PageContext } from '~/renderer/types';
import { PageCtx } from '~/renderer/pageContext';

interface Props {
  route: Accessor<PageContext>
}

export function App(props: Props) {
  return function PageRender() {
    const { Page } = props.route() || {};
    return (
      <Show when={Page}>
        <PageCtx.Provider value={props.route()}>
          <Page />
        </PageCtx.Provider>
      </Show>
    );
  };
}
