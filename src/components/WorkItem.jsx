import moment from 'moment';

export default function WorkItem({ id, company, title, description, startDate, endDate, editWork, removeWork }) {
    return(
        <div className="work-item">
            <div className='head'>
                <h3>{title} - {company.toUpperCase()}</h3>
                <i>{moment(startDate).format("MM/YYYY")} - {moment(endDate).format("MM/YYYY") === 'Invalid date' ? 'Present' : moment(endDate).format("MM/YYYY")}</i>
            </div>
            <div className='body'>
                <p>{description}</p>
            </div>
            <div className='buttons'>
                <button onClick={() => editWork(id)}>Edit</button>
                <button onClick={() => removeWork(id)}>Remove</button>
            </div>
        </div>
    )
}