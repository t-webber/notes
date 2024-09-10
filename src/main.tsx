import { Props } from "./router";

const NOTES = [
    {
        id: 1,
        title: "Note 1",
        content: "Content 1",
    },
    {
        id: 2,
        title: "Note 2",
        content: "Content 2",
    },
    {
        id: 3,
        title: "Note 3",
        content: "Content 3",
    },
    {
        id: 4,
        title: "Note 4",
        content: "Content 4",
    },
    {
        id: 5,
        title: "Note 5",
        content: "Content 5",
    },
    {
        id: 5,
        title: "Note 5",
        content: "Content 5",
    },
    {
        id: 5,
        title: "Note 5",
        content: "Content 5",
    },
    {
        id: 5,
        title: "Note 5",
        content: "Content 5",
    },
    {
        id: 5,
        title: "Note 5",
        content: "Content 5",
    },
    {
        id: 5,
        title: "Note 5",
        content: "Content 5",
    },
    {
        id: 5,
        title: "Note 5",
        content: "Content 5",
    },
    {
        id: 5,
        title: "Note 5",
        content: "Content 5",
    },
    {
        id: 5,
        title: "Note 5",
        content: "Content 5",
    },
    {
        id: 5,
        title: "Note 5",
        content: "Content 5",
    },
    {
        id: 5,
        title: "Note 5",
        content: "Content 5",
    },
    {
        id: 5,
        title: "Note 5",
        content: "Content 5",
    },
];

export default function Main({ id }: Props) {
    return (
        <div className="grid grid-cols-2 gap-4">
            {NOTES.map((note, i) => (
                <div key={i} className="p-2 space-y-2">
                    <button
                        onClick={() => {
                            window.location.pathname = "/" + note.id;
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
