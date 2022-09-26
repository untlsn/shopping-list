import { useQueryString } from '~/helpers/pageContextHelpers';

export function Page() {
  const search = useQueryString();

  return (
    <div class="pt-15">
      <h1>Register page</h1>
      <p>
        <span>Predefine email: </span>
        {search.email}
      </p>
    </div>
  );
}
