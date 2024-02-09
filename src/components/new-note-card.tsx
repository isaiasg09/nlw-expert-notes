export function NewNoteCard() {
  return (
    <button className="bg-slate-700 flex flex-col text-start rounded-md p-5 text-sm space-y-3 outline-none hover:ring-1 hover:ring-slate-600 focus-visible:ring-1 focus-visible:ring-lime-400 active:brightness-75 active:translate-y-0.5 transition-all">
      <span className="font-medium text-slate-200">Adicionar Nota</span>

      <p className="text-slate-400 leading-6">
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>
    </button>
  );
}
