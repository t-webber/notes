import { KeyboardEvent, MouseEvent, PointerEvent, useEffect, useState } from "react";

export default function AddArea({ updateContent }: { updateContent: (s: string) => void }) {

    const [last, setLast] = useState(Math.floor(new Date().valueOf() / 1000));
    const [pending, setPending] = useState(false);
    const [message, setMessage] = useState("")


    useEffect(() => {
        if (pending) {
            updateContent(message)
        }
        setPending(false)
    }, [pending, message, updateContent])

    useEffect(() => {
        if (!pending) {
            const now = Math.floor(new Date().valueOf() / 1000)
            if (now - last > 5) {
                setPending(true);
                setLast(now);
            }
        }
    }, [message, pending, last])


    const updateHeight = (force: boolean = false) => (e: KeyboardEvent<HTMLTextAreaElement> | PointerEvent<HTMLTextAreaElement> | MouseEvent<HTMLTextAreaElement>) => {
        e.currentTarget.style.height = "auto";
        e.currentTarget.style.height = e.currentTarget.scrollHeight + 2 * 16 + 4 + "px"
        setMessage(e.currentTarget.value)
        if (force) {
            updateContent(message)
        }
    }

    return (
        <>
            <textarea className="w-full bg-bar-color p-2 text-base border-2 border-white rounded" onLoad={updateHeight()} onKeyDown={updateHeight()} onKeyUp={updateHeight()} onMouseEnter={updateHeight()} onSelect={updateHeight()} onPointerLeave={updateHeight(true)} onMouseLeave={updateHeight(true)} />
            <button onClick={() => updateContent(message)} className="w-full flex justify-center"><span className="bg-bar-color px-6 py-1 rounded-full border-2 border-white">Save</span></button>
        </>
    )
}