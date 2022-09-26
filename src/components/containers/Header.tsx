function Header() {
  return (
    <header class="bg-black/15 flex justify-between h-15 items-center px-10 fixed top-0 left-0 w-full backdrop-blur z-100">
      <h1 class="text-2xl font-light">
        <a href="/">Ostoksilla</a>
      </h1>
      <div class="flex gap-4 font-bold">
        <button
          type="button"
          class="animate-underline"
        >
          Zarejestruj się
        </button>
        <button
          type="button"
          class="animate-underline"
        >
          Zaloguj się
        </button>
      </div>
    </header>
  );
}

export default Header;
