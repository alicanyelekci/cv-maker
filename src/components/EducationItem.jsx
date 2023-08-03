export default function EducationItem({ id, school, department, gpa, startDate, endDate, editEducation, removeEducation }) {
    return(
        <>
            {department === "" || department === undefined ? <h3>{school}</h3> : <h3>Department of {department} at {school}</h3>}
            <i>{startDate} - {endDate}</i>
            <p>{gpa}</p>
            <button onClick={() => editEducation(id)}>Edit</button>
            <button onClick={() => removeEducation(id)}>Remove</button>
        </>
    )
}