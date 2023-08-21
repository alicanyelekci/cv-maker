import moment from "moment";

export default function EducationItem({ id, school, department, gpa, startDate, endDate, editEducation, removeEducation }) {
    return(
        <div className="education-item">
            <div className="head">
                {department === "" || department === undefined ? <h3>{school}</h3> : <h3>Department of {department} - {school} {gpa ? (<>(GPA: {gpa})</>) : ''}</h3>}
                <i>{moment(startDate).format("MM/YYYY")} - {moment(endDate).format("MM/YYYY") === 'Invalid date' || endDate === undefined ? 'Present' : moment(endDate).format("MM/YYYY")}</i>
            </div>
            <div className="buttons">
                <button onClick={() => editEducation(id)}>Edit</button>
                <button onClick={() => removeEducation(id)}>Remove</button>
            </div>
        </div>
    )
}