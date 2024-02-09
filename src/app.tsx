import logo from "./assets/logo-nlw-expert.svg";

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-16 ">
      <img src={logo} alt="logo nlw expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas"
          className="w-full my-6 bg-transparent tracking-tight text-3xl font-semibold placeholder:text-slate-500 outline-none"
        />
      </form>
    </div>
  );
}
