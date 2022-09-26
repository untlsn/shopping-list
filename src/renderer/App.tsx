import type { Accessor } from 'solid-js';
import type { PageContext } from '~/renderer/types';
import { PageCtx } from '~/renderer/pageContext';
import Header from '~/components/containers/Header';

interface Props {
  route: Accessor<PageContext>
}

export function App(props: Props) {
  const content = () => {
    const { Page } = props.route() || {};
    return (
      <>
        <Header />
        <Show when={Page}>
          <PageCtx.Provider value={props.route()}>
            <Page />
          </PageCtx.Provider>
        </Show>
      </>
    );
  };

  return (
    <div class="text-white min-h-screen bg-background-primary font-sans">
      {content}
    </div>
  );
}
