import * as Dialog from "@radix-ui/react-dialog";
import { LucideArrowUpRight, LucideX } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

interface NewNoteCardProps {
  onNoteCreated: (content: string) => void;
}

export function NewNoteCard({ onNoteCreated }: NewNoteCardProps) {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);
  const [noteContent, setNoteContent] = useState("");

  // show textarea 
  function handleShowEditor() {
    setShouldShowOnboarding(false);
  }

  // Handle textarea change, update note content
  function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    var text = event.target.value;

    // if text is empty, show editor
    if (!text) {
      handleShowEditor();
    }

    setNoteContent(text);
  }

  function handleSaveNote(event: FormEvent<HTMLFormElement>) {
    // prevent page from reloading
    event.preventDefault();

    // Call parent function to create a note
    onNoteCreated(noteContent);

    // Close dialog
    setShouldShowOnboarding(true);
    setNoteContent("");

    // toast success
    toast.success("Nota criada com sucesso!");
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="relative bg-slate-700 flex flex-col text-start rounded-md p-5 text-sm gap-3 outline-none hover:ring-1 hover:ring-slate-600 focus-visible:ring-1 focus-visible:ring-lime-400 active:brightness-75 active:translate-y-0.5 transition-all group">
        <div className="absolute right-0 top-0 p-[6px] bg-slate-800 rounded-tr-md text-slate-500 leading-3 group-hover:text-slate-300 active:text-slate-600 group transition-all outline-none focus-visible:ring-1 focus-visible:ring-lime-400 cursor-pointer">
          <LucideArrowUpRight className="group-active:scale-90" />
        </div>

        <span className="font-medium text-slate-200">Adicionar Nota</span>

        <p className="text-slate-400 leading-6">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 w-full" />

        <Dialog.Content className="z-0 outline-none fixed top-1/2 left-1/2 bg-slate-700 text-left h-[60vh] max-w-[640px] w-full -translate-x-1/2 -translate-y-1/2 rounded-md flex flex-col justify-between gap-5">
          <Dialog.Close
            onClick={() => setShouldShowOnboarding(true)}
            className="absolute right-0 top-0 p-[6px] bg-slate-800 rounded-tr-md text-slate-500 leading-3 hover:text-slate-300 active:text-slate-600 group transition-all outline-none focus-visible:ring-1 focus-visible:ring-lime-400 "
          >
            <LucideX className="group-active:scale-90" />
          </Dialog.Close>

          <form onSubmit={handleSaveNote} className="flex-1 flex flex-col">
            <div className="flex flex-1 flex-col gap-5 p-5">
              <span className="text-sm font-medium text-slate-200">
                Adicionar nota
              </span>

              {shouldShowOnboarding ? (
                <p className="text-sm leading-6 ">
                  Comece{" "}
                  <button className="text-lime-400 hover:underline">
                    gravando uma nota
                  </button>{" "}
                  em áudio ou se preferir{" "}
                  <button
                    onClick={handleShowEditor}
                    className="text-lime-400 hover:underline"
                  >
                    utilize apenas texto
                  </button>
                  .
                </p>
              ) : (
                <textarea
                  placeholder="Escreva sua nota aqui..."
                  className=" bg-slate-700 text-slate-200 outline-none text-sm resize-none h-full"
                  onChange={handleContentChange}
                  value={noteContent}
                  autoFocus
                />
              )}
            </div>

            <button
              type="submit"
              className="bg-lime-400 w-full p-4 text-lime-800 font-semibold rounded-b-md"
            >
              Salvar nota
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
