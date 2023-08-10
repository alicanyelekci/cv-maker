import WorkItem from "./WorkItem"

export default function WorkList({ work, editWork, removeWork }) {
    return(
        <div className="work-item">
            {work.map(job => {
                return (
                    <WorkItem {...job} key={job.id} editWork={editWork} removeWork={removeWork} />
                )
            })}
        </div>
    )
}