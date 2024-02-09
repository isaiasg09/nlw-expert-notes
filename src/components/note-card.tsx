export function NoteCard() {
  return (
    <button className="bg-slate-800 flex flex-col text-left rounded-md p-5 text-sm space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-1 focus-visible:ring-lime-400 active:scale-[.98] active:brightness-125 transition-all">
      <span className="font-medium text-slate-300">há 2 dias</span>

      <p className="text-slate-400 leading-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi
        est quibusdam blanditiis explicabo ullam laudantium sed velit illo harum
        possimus vero unde quisquam incidunt, ad, similique ratione totam
        nesciunt!
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none " />
    </button>
  );
}
