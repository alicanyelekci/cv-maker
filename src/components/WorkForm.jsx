import { useState, useEffect } from "react";

export default function WorkForm({ work, onSubmit }) {
    const [newWork, setNewWork] = useState({...work});

    useEffect(() => {
        setNewWork({...work});
      }, [work]);

    function handleSubmit(e) {
        e.preventDefault();

        if(newWork.company === '' || newWork.title === '' || newWork.startDate === '') return;
        onSubmit(
            newWork.company, 
            newWork.title, 
            newWork.description, 
            newWork.startDate, 
            newWork.endDate
        );

        setNewWork({company: '', title: '', description: '', startDate: '', endDate: ''});
    }

    return(
        <form className="work-form" onSubmit={handleSubmit}>
            <label htmlFor="company">Company Name*</label>
            <input value={newWork.company} onChange={e => setNewWork({...newWork, company: e.target.value})} type="text" id="company" placeholder="Company Name" />
            <label htmlFor="title">Title*</label>
            <input value={newWork.title} onChange={e => setNewWork({...newWork, title: e.target.value})} type="text" id="title" placeholder="Title" />
            <label htmlFor="description">Description</label>
            <textarea value={newWork.description} onChange={e => setNewWork({...newWork, description: e.target.value})} rows="5" cols="30" id="description" placeholder="Description"></textarea>
            <label htmlFor="start">Start Date*</label>
            <input value={newWork.startDate} onChange={e => setNewWork({...newWork, startDate: e.target.value})} type="date" id="start" />
            <label htmlFor="end">End Date</label>
            <input value={newWork.endDate} onChange={e => setNewWork({...newWork, endDate: e.target.value})} type="date" id="end" />
            <button className="add-btn">Save Work Experience</button>
        </form>
    )
}