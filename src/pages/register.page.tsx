import type { ZodError } from 'zod';
import { z } from 'zod';
import { useQueryString } from '~/helpers/pageContextHelpers';
import TextField from '~/components/containers/TextField';

const formSchema = z.object({
  email: z.string({
    required_error: 'Email jest wymagany',
  }).min(1, 'Email jest wymagany').email('Email nie jest poprawny'),
  password: z.string({
    required_error: 'Hasło jest wymagane',
  }),
  confirm: z.string({
    required_error: '',
  }),
}).refine((values) => values.password == values.confirm, {
  message: 'Hasła nie są takie same',
  path: ['confirm'],
});

type FormSchema = z.infer<typeof formSchema>;

export function Page() {
  const search = useQueryString();
  const [formData, setFormData] = createStore<FormSchema>({
    email: search.email || '',
    password: '',
    confirm: '',
  });
  const [errors, setErrors] = createSignal<z.typeToFlattenedError<FormSchema>>();

  const bindInput = (name: keyof FormSchema) => ({
    name,
    onChange(v) {
      setFormData(name, v);
    },
    error: errors()?.fieldErrors[name]?.[0],
    value: formData[name],
  });

  const submit = (ev: Event) => {
    ev.preventDefault();

    formSchema.parseAsync(formData)
      .then((data) => {
        console.log(data);
      })
      .catch((err: ZodError<FormSchema>) => {
        setErrors(err.flatten());
      });
  };

  return (
    <main class="min-h-screen grid place-items-center">
      <form onSubmit={submit} class="rounded-xl bg-background-secondary p-20 space-y-5 w-130">
        <h1 class="text-center text-4xl pb-4">Rejestracja</h1>
        <TextField
          label="Email"
          {...bindInput('email')}
        />
        <TextField
          label="Hasło"
          {...bindInput('password')}
        />
        <TextField
          label="Powtórz hasło"
          {...bindInput('confirm')}
        />
        <button
          type="submit"
          class="shadow-button"
        >
          Zarejestruj się
        </button>
        <p class="pt-4 text-center">
          <span>Posiadasz już konto? </span>
          <a href="/login" class="text-text-link animate-underline">Zaloguj się!</a>
        </p>
      </form>
    </main>
  );
}
