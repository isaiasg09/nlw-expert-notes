import * as Dialog from "@radix-ui/react-dialog";

interface NoteCardProps {
  note: {
    date: Date;
    content: string;
  };
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="bg-slate-800 flex flex-col text-left rounded-md p-5 text-sm gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-1 focus-visible:ring-lime-400 active:scale-[.98] active:brightness-125 transition-all">
        <span className="font-medium text-slate-300">{String(note.date)}</span>

        <p className="text-slate-400 leading-6">{note.content}</p>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 w-full" />

        <Dialog.Content className="z-0 fixed top-1/2 left-1/2 bg-slate-700 text-left max-h-[600px] h-[600px] max-w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-md flex flex-col justify-between gap-5">
          <Dialog.Close className="absolute right-0 top-0 p-2 bg-slate-800 rounded-tr-md">
            X
          </Dialog.Close>
          <div className="flex flex-col gap-5 p-5">
            <p>{String(note.date)}</p>

            <div>{note.content}</div>
          </div>

          <button className="bg-slate-800 w-full p-4">
            Deseja <span className="text-red-400">apagar esta nota</span>?
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
