import * as Dialog from "@radix-ui/react-dialog";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { LucideX } from "lucide-react";

interface NoteCardProps {
  note: {
    id: string;
    date: Date;
    content: string;
  };
}

export function NoteCard({ note }: NoteCardProps) {
  // format date to "time ago" format
  const noteDateFormatted = formatDistanceToNow(note.date, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <Dialog.Root>
      <Dialog.Trigger className="bg-slate-800 flex flex-col text-left rounded-md p-5 text-sm gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-1 focus-visible:ring-lime-400 active:scale-[.98] active:brightness-125 transition-all">
        <span className="font-medium text-slate-300">{noteDateFormatted}</span>

        <p className="text-slate-400 leading-6">{note.content}</p>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 w-full" />

        <Dialog.Content className="z-0 fixed top-1/2 left-1/2 bg-slate-700 text-left h-[60vh] max-w-[640px] w-full -translate-x-1/2 -translate-y-1/2 rounded-md flex flex-col justify-between gap-5">
          <Dialog.Close className="absolute right-0 top-0 p-[6px] bg-slate-800 rounded-tr-md text-slate-500 leading-3 hover:text-slate-300 active:text-slate-600 group transition-all outline-none focus-visible:ring-1 focus-visible:ring-lime-400 ">
            <LucideX className="group-active:scale-90" />
          </Dialog.Close>

          <div className="flex flex-1 flex-col gap-5 p-5">
            <span className="text-sm font-medium text-slate-100">
              {noteDateFormatted}
            </span>

            <p className="text-sm leading-6 text-slate-200">{note.content}</p>
          </div>

          <button
            type="button"
            className="bg-slate-800 w-full p-4 rounded-b-md text-sm text-slate-300 outline-none focus-visible:ring-1 focus-visible:ring-lime-400 font-medium group "
          >
            Deseja{" "}
            <span className="text-red-400 group-hover:underline">
              apagar esta nota
            </span>
            ?
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
