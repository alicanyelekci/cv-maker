import WorkItem from "./WorkItem"

export default function WorkList({ work, editWork, removeWork }) {
    return(
        <>
            {work.map(job => {
                return (
                    <WorkItem {...job} key={job.id} editWork={editWork} removeWork={removeWork} />
                )
            })}
        </>
    )
}