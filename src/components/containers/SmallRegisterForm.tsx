import TestField from '~/components/containers/TestField';

function SmallRegisterForm() {
  const [email, setEmail] = createSignal('');

  const submit = (ev: Event) => {
    ev.preventDefault();

    navigate(`/register/?email=${email()}`);
  };

  return (
    <form
      onSubmit={submit}
      class="bg-background-secondary p-(x12 y20) rounded-xl shadow-lg space-y-5 w-130"
    >
      <h1 class="text-2.5rem">Skorzystaj już teraz!</h1>
      <p class="font-light pb-4">Wystarczy tylko email:</p>
      <TestField label="Email" onChange={setEmail} />
      <button
        type="submit"
        style={{
          'box-shadow': '0 4px 2px 0 #638181CC',
        }}
        class="inline-block text-center bg-background-button py-2 w-full rounded-lg"
      >
        Zarejestruj się
      </button>
      <p>
        <span>Posiadasz już konto? </span>
        <a href="/login" class="text-text-link animate-underline">Zaloguj się!</a>
      </p>
    </form>
  );
}

export default SmallRegisterForm;
