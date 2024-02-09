export function NewNoteCard() {
  return (
    <div className="bg-slate-700 rounded-md p-5 text-sm space-y-3">
      <span className="font-medium text-slate-200">Adicionar Nota</span>

      <p className="text-slate-400 leading-6">
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>
    </div>
  );
}
