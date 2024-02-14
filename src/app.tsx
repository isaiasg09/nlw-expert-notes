import { ChangeEvent, useState } from "react";
import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

interface Note {
  id: string;
  date: Date;
  content: string;
}

export function App() {
  const [search, setSearch] = useState("");
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const text = event.target.value;

    setSearch(text);

    console.log(text);
  }

  // try to get notes from local storage or create an empty array
  const [notes, setNotes] = useState<Note[]>(
    localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes")!)
      : []
  );

  // another way to get notes from local storage (more readable):
  // function getNotesOnStorage() {
  //   const notesOnStorage = localStorage.getItem("notes");

  //   if (notesOnStorage) {
  //     return JSON.parse(notesOnStorage);
  //   }

  //   return [];
  // }

  // function to handle the creation of a new note, it will be passed to the NewNoteCard component
  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };

    // add the new note to the list of notes
    const notesArray = [newNote, ...notes];
    setNotes(notesArray);

    // save new array to local storage
    localStorage.setItem("notes", JSON.stringify(notesArray));
  }

  return (
    <div className="mx-auto max-w-6xl my-16 space-y-6">
      <img src={logo} alt="logo nlw expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas"
          className="w-full bg-transparent tracking-tight text-3xl font-semibold placeholder:text-slate-500 outline-none"
          onChange={handleInputChange}
        />
      </form>

      <div className="h-px bg-slate-700" />
      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {notes && notes.map((note) => <NoteCard key={note.id} note={note} />)}
      </div>
    </div>
  );
}
