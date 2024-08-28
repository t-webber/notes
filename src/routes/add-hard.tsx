import AddArea from "../components/add-area";

const updateContent = (s: string) => console.log(s)

export default function AddHard() {
    return (
        <AddArea updateContent={updateContent} />
    )
}