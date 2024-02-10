import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

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
        <NewNoteCard />

        <NoteCard
          note={{
            date: new Date(),
            content: "nota 1 onduoasdhasodhasuiod hasoud has",
          }}
        />
        <NoteCard
          note={{
            date: new Date(),
            content:
              "nota 2 jkl2389123890127893172893782917389127832783283728 1jkasy d89fashjida dyh 8921",
          }}
        />
      </div>
    </div>
  );
}
