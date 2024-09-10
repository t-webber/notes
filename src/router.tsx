import { FiEdit } from "react-icons/fi";
import Header from "./header";
import Main from "./main";
import { useEffect, useState } from "react";

export interface Props {
    id: number | null;
}

export default function Router() {
    const [id, setId] = useState<number | null>(null);

    useEffect(() => {
        if (window.location.pathname === "/") {
            setId(null);
        } else {
            setId(parseInt(window.location.pathname.split("/")[1]));
        }
    }, [setId]);

    return (
        <div className="h-screen flex flex-col">
            <header className="p-4 pb-4">
                <Header id={id} />
            </header>
            <main className="p-4 pt-0 h-full overflow-y-scroll">
                <Main id={id} />
            </main>
            {id === null && (
                <button className="absolute right-4 bottom-4 rounded-full aspect-square bg-button-background text-button-foreground p-3 text-2xl">
                    <FiEdit />
                </button>
            )}
        </div>
    );
}
