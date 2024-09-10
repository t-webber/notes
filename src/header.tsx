import { SlMagnifier } from "react-icons/sl";
import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

function HomeHeader() {
    const [searchIsOpen, setSearchIsOpen] = useState(false);
    return (
        <div className="flex justify-between">
            <p className="font-semibold">Notes</p>
            <nav className="space-x-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className={
                        "bg-accent rounded-xl  transition-all duration-300" +
                        (searchIsOpen ? " w-[200px] px-2" : " w-0 px-0")
                    }
                />
                <button
                    onClick={() => {
                        setSearchIsOpen((s) => !s);
                    }}
                >
                    <SlMagnifier />
                </button>
            </nav>
        </div>
    );
}

function NoteHeader({
    noteTitle,
    setEditing,
    editTitle,
}: {
    noteTitle: string;
    setEditing: (status: boolean) => void;
    editTitle: (title: string) => void;
}) {
    const [title, setTitle] = useState(noteTitle);

    useEffect(() => {
        setTitle(title);
    }, [title]);

    return (
        <div className="flex space-x-4 items-center">
            <a href="/">
                <FaChevronLeft />
            </a>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => editTitle(e.currentTarget.value)}
                className="w-full bg-transparent outline-none focus:outline-none font-semibold"
            />
            <button
                onClick={() => {
                    setEditing(true);
                }}
            >
                <FiEdit />
            </button>
        </div>
    );
}

export default function Header({
    title,
    ...props
}: {
    title: string | undefined;
    setEditing: (status: boolean) => void;
    editTitle: (title: string) => void;
}) {
    if (title) {
        return <NoteHeader noteTitle={title} {...props} />;
    } else {
        return <HomeHeader />;
    }
}
