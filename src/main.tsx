import { useEffect, useState } from "react";
import { Note } from "./router";

function HomeMain({
    notes,
    setId,
}: {
    notes: Note[];
    setId: (id: number) => void;
}) {
    return (
        <div className="grid grid-cols-2 gap-4">
            {notes.map((note, i) => (
                <div key={i} className="p-2 space-y-2">
                    <button
                        onClick={() => {
                            setId(note.id);
                        }}
                        className="rounded-xl bg-accent h-[200px] p-2 w-full flex "
                    >
                        {note.content}
                    </button>
                    <div className="flex flex-col items-center justify-center">
                        {note.title}
                    </div>
                </div>
            ))}
        </div>
    );
}

function NoteMain({
    noteContent,
    editContent,
    editing,
}: {
    noteContent: string;
    editContent: (content: string) => void;
    editing: boolean;
}) {
    const [content, setContent] = useState(noteContent);

    useEffect(() => {
        editContent(content);
    }, [content, editContent]);

    if (editing) {
        return (
            <textarea
                value={content}
                onChange={(e) => {
                    setContent(e.currentTarget.value);
                }}
                className="bg-background outline-none focus:outline-none w-full h-full"
            />
        );
    } else {
        return <div>{content}</div>;
    }
}

export default function Main({
    content,
    editing,
    editContent,
    ...props
}: {
    notes: Note[];
    editing: boolean;
    content: string | undefined;
    setId: (id: number) => void;
    editContent: (content: string) => void;
}) {
    if (content === undefined) {
        return <HomeMain {...props} />;
    } else {
        return (
            <NoteMain
                noteContent={content}
                editContent={editContent}
                editing={editing}
            />
        );
    }
}
