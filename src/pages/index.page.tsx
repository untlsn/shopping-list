import desktopLeft from '~/assets/images/desktop-left.png';
import SmallRegisterForm from '~/components/containers/SmallRegisterForm';

export function Page() {
  return (
    <main
      style={{ 'background-image': `url('${desktopLeft}')` }}
      class="min-h-screen bg-no-repeat flex justify-between px-24"
    >
      <div class="min-h-screen flex-(~ col) justify-center font-light">
        <h1 class="text-8rem" style={{ 'text-shadow': '-2px 2px 8px #00000066' }}>Ostoksilla</h1>
        <p class="ml-4 text-2xl">Prosta aplikacja do jeszcze prostszych zakupów</p>
      </div>
      <div class="flex-(~ col) justify-center">
        <SmallRegisterForm />
      </div>
    </main>
  );
}
