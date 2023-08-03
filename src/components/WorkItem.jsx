export default function WorkItem({ id, company, title, description, startDate, endDate, editWork, removeWork }) {
    return(
        <>
            <h3>{title} at {company}</h3>
            <i>{startDate} - {endDate}</i>
            <p>{description}</p>
            <button onClick={() => editWork(id)}>Edit</button>
            <button onClick={() => removeWork(id)}>Remove</button>
        </>
    )
}