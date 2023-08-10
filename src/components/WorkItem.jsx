import moment from 'moment';

export default function WorkItem({ id, company, title, description, startDate, endDate, editWork, removeWork }) {
    return(
        <div className="work-item">
            <h3>{title} - {company.toUpperCase()}</h3>
            <i>{moment(startDate).format("MM/YYYY")} - {moment(endDate).format("MM/YYYY") === 'Invalid date' ? 'Present' : moment(endDate).format("MM/YYYY")}</i>
            <p>{description}</p>
            <button onClick={() => editWork(id)}>Edit</button>
            <button onClick={() => removeWork(id)}>Remove</button>
        </div>
    )
}