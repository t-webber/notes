import { useEffect, useState } from "react";
import * as api from "@tauri-apps/api/core";
import Body from "./app/body.tsx";

export interface Note {
    id: number;
    title: string;
    content: string;
}

async function getServerNotes(): Promise<Note[]> {
    return await api.invoke("get_notes");
}

async function writeServerNotes(notes: Note[]): Promise<void> {
    return await api.invoke("write_notes", { notes });
}

export default function ServerClientInterface() {
    const [currentId, setCurrentId] = useState<number | null>(null);
    const [editing, setEditing] = useState(false);
    const [getNotes, setNotes] = useState<Note[]>([]);
    const [note, setNote] = useState<Note | undefined>(undefined);
    const [synced, setSynced] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("init", loading);
        if (loading) {
            getServerNotes()
                .then((notes) => {
                    setNotes(notes);
                    setLoading(false);
                })
                .catch((err) => console.error(err));
        }
    }, [loading]);

    const editTitle = (title: string) => {
        setNotes((notes) =>
            notes.map((note) =>
                note.id === currentId ? { ...note, title } : note
            )
        );
        setNote(({ ...note }) => ({ ...note, title }));
    };

    const editContent = (content: string) => {
        setNotes((notes) =>
            notes.map((note) =>
                note.id === currentId ? { ...note, content } : note
            )
        );
        setNote(({ ...note }) => ({ ...note, content }));
    };

    const editId = (id: number) => {
        if (id !== currentId) {
            setCurrentId(id);
            setNote(getNotes.find((note) => note.id === id));
        }
    };

    return Body({
        synced,
        currentId,
        note,
        getNotes,
        editing,

        editId,
        editTitle,
        editContent,
        setEditing,
    });
}
