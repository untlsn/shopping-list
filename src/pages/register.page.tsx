import { usePageContext } from '~/renderer/pageContext';

export function Page() {
  const { email } = usePageContext().urlParsed.search;

  return (
    <div class="pt-15">
      <h1>Register page</h1>
      <p>
        <span>Predefine email: </span>
        {email}
      </p>
    </div>
  );
}
