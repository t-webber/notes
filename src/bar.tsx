import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Bar() {
    const [isOpen, setIsOpen] = useState(window.innerWidth > 500);
    return (
        <div className={"flex flex-col items-center relative " + (isOpen ? "w-24" : "")}>
            <button onClick={() => setIsOpen(o => !o)} className="w-full flex justify-center pt-2">
                {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
            </button>
            <nav className={"flex flex-col absolute top-10 space-y-2 " + (isOpen ? "" : "-left-24")}>
                <button className="hover:underline"><a href="/">Home</a></button>
                <button className="hover:underline"><a href="/add-hard">Add hard</a></button>
                <button className="hover:underline"><a href="/add-soft">Add soft</a></button>
                <button className="hover:underline"><a href="/calendar">Calendar</a></button>
                <button className="hover:underline"><a href="/hard-list">Hard list</a></button>
                <button className="hover:underline"><a href="/soft-list">Soft list</a></button>
            </nav>
        </div>
    )
}