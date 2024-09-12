import { FiEdit } from "react-icons/fi";
import { Note } from "../interface";
import Header from "./header";
import Main from "./main";

interface BodyProps {
    synced: boolean;
    currentId: number | null;
    note: Note | undefined;
    editTitle: (title: string) => void;
    editContent: (content: string) => void;
    editId: (id: number) => void;
    getNotes: Note[];
    editing: boolean;
    setEditing: (editing: boolean) => void;
}

export default function Body({
    synced,
    currentId,
    note,
    editTitle,
    editContent,
    editId,
    getNotes,
    editing,
    setEditing,
}: BodyProps) {
    return (
        <div className="h-screen flex flex-col">
            <header className="p-4 pb-4">
                <Header
                    title={note?.title}
                    editTitle={editTitle}
                    setEditing={setEditing}
                />
            </header>
            {synced ? "synced" : "not synced"}
            <main className="p-4 pt-0 h-full overflow-y-scroll">
                <Main
                    content={note?.content}
                    notes={getNotes}
                    editId={editId}
                    editContent={editContent}
                    editing={editing}
                />
            </main>
            {currentId === null && (
                <button className="absolute right-4 bottom-4 rounded-full aspect-square bg-button-background text-button-foreground p-3 text-2xl">
                    <FiEdit />
                </button>
            )}
        </div>
    );
}
