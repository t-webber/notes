import { SlMagnifier } from "react-icons/sl";
import { useState } from "react";
import { Props } from "./router";

export default function Header({ id }: Props) {
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
