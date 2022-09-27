import TextField from '~/components/containers/TextField';

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
      <TextField label="Email" onChange={setEmail} />
      <button
        type="submit"
        class="shadow-button"
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
