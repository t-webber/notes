import { FiEdit } from "react-icons/fi";
import Header from "./header";
import Main from "./main";
import { useEffect, useState } from "react";

export interface Note {
    id: number;
    title: string;
    content: string;
}

function getServerNotes() {
    return [
        { id: 0, title: "Note 0", content: "Content 0" },
        { id: 1, title: "Note 1", content: "Content 1" },
        { id: 2, title: "Note 2", content: "Content 2" },
        { id: 3, title: "Note 3", content: "Content 3" },
        { id: 4, title: "Note 4", content: "Content 4" },
        { id: 5, title: "Note 5", content: "Content 5" },
        { id: 6, title: "Note 6", content: "Content 6" },
        { id: 7, title: "Note 7", content: "Content 7" },
        { id: 8, title: "Note 8", content: "Content 8" },
        { id: 9, title: "Note 9", content: "Content 9" },
        { id: 10, title: "Note 10", content: "Content 10" },
        { id: 11, title: "Note 11", content: "Content 11" },
        { id: 12, title: "Note 12", content: "Content 12" },
        { id: 13, title: "Note 13", content: "Content 13" },
        { id: 14, title: "Note 14", content: "Content 14" },
        { id: 15, title: "Note 15", content: "Content 15" },
        { id: 16, title: "Note 16", content: "Content 16" },
        { id: 17, title: "Note 17", content: "Content 17" },
        { id: 18, title: "Note 18", content: "Content 18" },
        { id: 19, title: "Note 19", content: "Content 19" },
    ];
}

export default function Router() {
    const [id, setId] = useState<number | null>(null);
    const [editing, setEditing] = useState(false);
    const [getNotes, setNotes] = useState(getServerNotes());
    const [note, setNote] = useState<Note | undefined>(undefined);

    useEffect(() => {
        if (id !== null) {
            setNote(getNotes.find((note) => note.id === id));
        }
    }, [id, getNotes]);

    const editTitle = (title: string) => {
        setNotes((notes) =>
            notes.map((note) => (note.id === id ? { ...note, title } : note))
        );
    };

    const editContent = (content: string) =>
        setNotes((notes) =>
            notes.map((note) => (note.id === id ? { ...note, content } : note))
        );

    return (
        <div className="h-screen flex flex-col">
            <header className="p-4 pb-4">
                <Header
                    title={note?.title}
                    editTitle={editTitle}
                    setEditing={setEditing}
                />
            </header>
            <main className="p-4 pt-0 h-full overflow-y-scroll">
                <Main
                    content={note?.content}
                    notes={getNotes}
                    setId={setId}
                    editContent={editContent}
                    editing={editing}
                />
            </main>
            {id === null && (
                <button className="absolute right-4 bottom-4 rounded-full aspect-square bg-button-background text-button-foreground p-3 text-2xl">
                    <FiEdit />
                </button>
            )}
        </div>
    );
}
