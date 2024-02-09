import logo from "./assets/logo-nlw-expert.svg";

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-16 space-y-6">
      <img src={logo} alt="logo nlw expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas"
          className="w-full bg-transparent tracking-tight text-3xl font-semibold placeholder:text-slate-500 outline-none"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <div className="bg-slate-700 rounded-md p-5 text-sm space-y-3">
          <span className="font-medium text-slate-200">Adicionar Nota</span>

          <p className="text-slate-400 leading-6">
            Grave uma nota em áudio que será convertida para texto
            automaticamente.
          </p>
        </div>
        

        <div className="bg-slate-800 rounded-md p-5 text-sm space-y-3 overflow-hidden relative pointer-events-none">
          <span className="font-medium text-slate-300">há 2 dias</span>

          <p className="text-slate-400 leading-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            modi est quibusdam blanditiis explicabo ullam laudantium sed velit
            illo harum possimus vero unde quisquam incidunt, ad, similique
            ratione totam nesciunt!
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
        </div>

        <div className="bg-slate-800 rounded-md p-5 text-sm space-y-3 overflow-hidden relative pointer-events-none">
          <span className="font-medium text-slate-300">há 2 dias</span>

          <p className="text-slate-400 leading-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            modi est quibusdam blanditiis explicabo ullam laudantium sed velit
            illo harum possimus vero unde quisquam incidunt, ad, similique
            ratione totam nesciunt!
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
        </div>

        <div className="bg-slate-800 rounded-md p-5 text-sm space-y-3 overflow-hidden relative pointer-events-none">
          <span className="font-medium text-slate-300">há 2 dias</span>

          <p className="text-slate-400 leading-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            modi est quibusdam blanditiis explicabo ullam laudantium sed velit
            illo harum possimus vero unde quisquam incidunt, ad, similique
            ratione totam nesciunt!
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
        </div>
      </div>
    </div>
  );
}
