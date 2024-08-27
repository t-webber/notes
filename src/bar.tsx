import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";


export default function Bar() {
    const [isOpen, setIsOpen] = useState(window.innerWidth > 500);
    return (
        <div className={"flex flex-col items-center relative " + (isOpen ? "w-24" : "")}>
            <button onClick={() => setIsOpen(o => !o)} className="w-full flex justify-center">
                {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
            </button>
            <nav className={"flex flex-col absolute top-8 space-y-2 " + (isOpen ? "" : "-left-24")}>
                <button className="hover:underline"><a href="/add-hard"></a>Add hard</button>
                <button className="hover:underline"><a href="/add-soft"></a>Add soft</button>
                <button className="hover:underline"><a href="/calendar">Calendar</a></button>
                <button className="hover:underline"><a href="/hard-list"></a>Hard list</button>
                <button className="hover:underline"><a href="/soft-list"></a>Soft list</button>
            </nav>
        </div>
    )
}