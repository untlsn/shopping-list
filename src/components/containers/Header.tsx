function Header() {
  return (
    <header class="bg-black/15 flex justify-between h-15 items-center px-10 fixed top-0 left-0 w-full backdrop-blur z-100">
      <h1 class="text-2xl font-light">
        <a href="/">Ostoksilla</a>
      </h1>
      <div class="flex gap-4 font-bold">
        <a
          href="/register"
          class="animate-underline"
        >
          Zarejestruj się
        </a>
        <a
          href="/login"
          class="animate-underline"
        >
          Zaloguj się
        </a>
      </div>
    </header>
  );
}

export default Header;
