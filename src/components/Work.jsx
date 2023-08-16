import WorkForm from "./WorkForm"
import WorkList from "./WorkList"

export default function Work({ editedWork, sortedWork, addWork, editWork, removeWork }) {
    return(
        <>
        <h2>WORK EXPERIENCE</h2>
        <WorkForm work={editedWork[0]} onSubmit={addWork} />
        <WorkList work={sortedWork} editWork={editWork} removeWork={removeWork} />
        </>
    )
}