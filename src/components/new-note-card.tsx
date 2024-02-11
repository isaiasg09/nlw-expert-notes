import * as Dialog from "@radix-ui/react-dialog";
import { LucideArrowUpRight, LucideX } from "lucide-react";
import { useState } from "react";

export function NewNoteCard() {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);

  function handleStartEditor() {
    setShouldShowOnboarding(false);
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="relative bg-slate-700 flex flex-col text-start rounded-md p-5 text-sm gap-3 outline-none hover:ring-1 hover:ring-slate-600 focus-visible:ring-1 focus-visible:ring-lime-400 active:brightness-75 active:translate-y-0.5 transition-all group">
        <button className="absolute right-0 top-0 p-[6px] bg-slate-800 rounded-tr-md text-slate-500 leading-3 group-hover:text-slate-300 active:text-slate-600 group transition-all outline-none focus-visible:ring-1 focus-visible:ring-lime-400 ">
          <LucideArrowUpRight className="group-active:scale-90" />
        </button>

        <span className="font-medium text-slate-200">Adicionar Nota</span>

        <p className="text-slate-400 leading-6">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 w-full" />

        <Dialog.Content className="z-0 fixed top-1/2 left-1/2 bg-slate-700 text-left h-[60vh] max-w-[640px] w-full -translate-x-1/2 -translate-y-1/2 rounded-md flex flex-col justify-between gap-5">
          <Dialog.Close className="absolute right-0 top-0 p-[6px] bg-slate-800 rounded-tr-md text-slate-500 leading-3 hover:text-slate-300 active:text-slate-600 group transition-all outline-none focus-visible:ring-1 focus-visible:ring-lime-400 ">
            <LucideX className="group-active:scale-90" />
          </Dialog.Close>

          <div className="flex flex-1 flex-col gap-5 p-5">
            <span className="text-sm font-medium text-slate-200">
              Adicionar nota
            </span>

            <p className="text-sm leading-6 ">
              Comece{" "}
              <button className="text-lime-400 hover:underline">
                gravando uma nota
              </button>{" "}
              em áudio ou se preferir{" "}
              <button
                onClick={handleStartEditor}
                className="text-lime-400 hover:underline"
              >
                utilize apenas texto
              </button>
              .
            </p>
          </div>

          <button className="bg-lime-400 w-full p-4 text-lime-800 font-semibold rounded-b-md">
            Salvar nota
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
