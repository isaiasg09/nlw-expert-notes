import * as Dialog from "@radix-ui/react-dialog";
import { LucideArrowUpRight, LucideX } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

interface NewNoteCardProps {
  onNoteCreated: (content: string) => void;
}

let speechRecognition: SpeechRecognition | null = null;

export function NewNoteCard({ onNoteCreated }: NewNoteCardProps) {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);
  const [noteContent, setNoteContent] = useState("");

  const [isRecording, setIsRecording] = useState(false);

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

  function handleSaveNote(event: FormEvent) {
    // prevent form from reloading the page
    event.preventDefault();

    // prevent the creation of an empty note
    if (noteContent === "") {
      return;
    }

    // Call parent function to create a note
    onNoteCreated(noteContent);

    // Close dialog
    setShouldShowOnboarding(true);
    setNoteContent("");

    // toast success
    toast.success("Nota criada com sucesso!");
  }

  function handleStartRecording() {
    // see if speech recognition is available on current browser
    const isSpeechRecognitionAPIAvailable =
      "SpeechRecognition" in window || "webkitSpeechRecognition" in window;

    // if it's not, then alert to user and don't record
    if (!isSpeechRecognitionAPIAvailable) {
      alert("Infelizmente seu navegador não suporta a API de gravação");
      return;
    }

    //
    setIsRecording(true);
    setShouldShowOnboarding(false);

    const speechRecognitionAPI =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    speechRecognition = new speechRecognitionAPI();

    speechRecognition.lang = "pt-BR";
    speechRecognition.continuous = true;
    speechRecognition.maxAlternatives = 1;
    speechRecognition.interimResults = true;

    speechRecognition.onresult = (event) => {
      const transcription = Array.from(event.results).reduce((text, result) => {
        return text.concat(result[0].transcript);
      }, "");

      setNoteContent(transcription);
    };

    speechRecognition.onerror = (event) => {
      console.error(event);
    };

    speechRecognition.start();
  }
  function handleStopRecording() {
    setIsRecording(false);

    speechRecognition?.stop();
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

        <Dialog.Content className="z-0 outline-none fixed inset-0 md:inset-auto md:top-1/2 md:left-1/2 bg-slate-700 text-left md:h-[60vh] md:max-w-[640px] w-full md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-md flex flex-col justify-between gap-5">
          <Dialog.Close
            onClick={() => setShouldShowOnboarding(true)}
            className="absolute right-0 top-0 p-[6px] bg-slate-800 md:rounded-tr-md text-slate-500 leading-3 hover:text-slate-300 active:text-slate-600 group transition-all outline-none focus-visible:ring-1 focus-visible:ring-lime-400 "
          >
            <LucideX className="group-active:scale-90" />
          </Dialog.Close>

          <form className="flex-1 flex flex-col">
            <div className="flex flex-1 flex-col gap-5 p-5">
              <span className="text-sm font-medium text-slate-200">
                Adicionar nota
              </span>

              {shouldShowOnboarding ? (
                <p className="text-sm leading-6 text-slate-400">
                  Comece{" "}
                  <button
                    type="button"
                    onClick={handleStartRecording}
                    className="text-lime-400 hover:underline"
                  >
                    gravando uma nota
                  </button>{" "}
                  em áudio ou se preferir{" "}
                  <button
                    type="button"
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

            {isRecording ? (
              <button
                onClick={handleStopRecording}
                type="button"
                className="flex items-center justify-center gap-2 bg-slate-900 w-full p-4 text-slate-300 text-sm font-semibold rounded-b-md hover:text-slate-100"
              >
                <div className="size-3 rounded-full bg-red-500 animate-pulse" />
                Gravando (clique p/ interromper)
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSaveNote}
                className="bg-lime-400 w-full p-4 text-lime-800 text-sm font-semibold rounded-b-md hover:bg-lime-500"
              >
                Salvar nota
              </button>
            )}
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
