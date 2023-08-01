import { useState } from "react";

export default function WorkForm(props) {
    const [newWork, setNewWork] = useState({});

    function handleSubmit(e) {
        e.preventDefault();

        if(newWork.company === '' || newWork.title === '' || newWork.startDate === '') return;
        props.onSubmit(
            newWork.company, 
            newWork.title, 
            newWork.description, 
            newWork.startDate, 
            newWork.endDate === '' ? 'present' : newWork.endDate
            );

        setNewWork({id: '', company: '', title: '', description: '', startDate: '', endDate: ''});
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={newWork.company} onChange={e => setNewWork({...newWork, company: e.target.value})} type="text" placeholder="Company Name" />
            <input value={newWork.title} onChange={e => setNewWork({...newWork, title: e.target.value})} type="text" placeholder="Title" />
            <textarea value={newWork.description} onChange={e => setNewWork({...newWork, description: e.target.value})} rows="5" cols="30" placeholder="Description"></textarea>
            <label htmlFor="start">Start Date</label>
            <input value={newWork.startDate} onChange={e => setNewWork({...newWork, startDate: e.target.value})} type="date" id="start" />
            <label htmlFor="end">End Date</label>
            <input value={newWork.endDate} onChange={e => setNewWork({...newWork, endDate: e.target.value})} type="date" id="end" />
            <button>Add</button>
        </form>
    )
}