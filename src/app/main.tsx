import { Note } from "../interface";

function HomeMain({
    notes,
    editId,
}: {
    notes: Note[];
    editId: (id: number) => void;
}) {
    return (
        <div className="grid grid-cols-2 gap-4">
            {notes.map((note, i) => (
                <div key={i} className="p-2 space-y-2">
                    <button
                        onClick={() => {
                            console.log("editting id");
                            editId(note.id);
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
    content,
    editContent,
    editing,
}: {
    content: string;
    editContent: (content: string) => void;
    editing: boolean;
}) {
    if (editing) {
        return (
            <textarea
                value={content}
                onChange={(e) => {
                    editContent(e.currentTarget.value);
                }}
                className="bg-background outline-none focus:outline-none w-full h-full"
            />
        );
    } else {
        return <div>{content}</div>;
    }
}

export default function Main({
    notes,
    editing,
    content,
    editId,
    editContent,
}: {
    notes: Note[];
    editing: boolean;
    content: string | undefined;
    editId: (id: number) => void;
    editContent: (content: string) => void;
}) {
    if (content === undefined) {
        return <HomeMain {...{ notes, editId }} />;
    } else {
        return <NoteMain {...{ editing, editContent, content }} />;
    }
}
