import moment from "moment";

export default function EducationItem({ id, school, department, gpa, startDate, endDate, editEducation, removeEducation }) {
    return(
        <div className="education-item">
            {department === "" || department === undefined ? <h3>{school}</h3> : <h3>Department of {department} at {school}</h3>}
            <i>{moment(startDate).format("MM/YYYY")} - {moment(endDate).format("MM/YYYY") === 'Invalid date' ? 'Present' : moment(endDate).format("MM/YYYY")}</i>
            <p>{gpa}</p>
            <button onClick={() => editEducation(id)}>Edit</button>
            <button onClick={() => removeEducation(id)}>Remove</button>
        </div>
    )
}