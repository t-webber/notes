import AddArea from "../components/add-area";

const updateContent = (s: string) => console.log(s)

export default function AddSoft() {
    return (
        <AddArea updateContent={updateContent} />
    )
}