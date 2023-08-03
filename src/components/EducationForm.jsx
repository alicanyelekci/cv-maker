import { useState, useEffect } from "react";

export default function EducationForm({ education, onSubmit }) {
    const [newEducation, setNewEducation] = useState({...education});

    useEffect(() => {
        setNewEducation({...education});
      }, [education]);

    function handleSubmit(e) {
        e.preventDefault();

        if(newEducation.school === '' || newEducation.startDate === '') return;
        onSubmit(
            newEducation.school, 
            newEducation.department, 
            newEducation.gpa, 
            newEducation.startDate, 
            newEducation.endDate === '' || newEducation.endDate === undefined ? 'Present' : newEducation.endDate
        );

        setNewEducation({company: '', title: '', description: '', startDate: '', endDate: ''});
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={newEducation.school} onChange={e => setNewEducation({...newEducation, school: e.target.value})} type="text" placeholder="Company Name" />
            <input value={newEducation.department} onChange={e => setNewEducation({...newEducation, department: e.target.value})} type="text" placeholder="Title" />
            <input value={newEducation.gpa} onChange={e => setNewEducation({...newEducation, gpa: e.target.value})} type="text" placeholder="Title" />
            <label htmlFor="start">Start Date</label>
            <input value={newEducation.startDate} onChange={e => setNewEducation({...newEducation, startDate: e.target.value})} type="date" id="start" />
            <label htmlFor="end">End Date</label>
            <input value={newEducation.endDate} onChange={e => setNewEducation({...newEducation, endDate: e.target.value})} type="date" id="end" />
            <button>Add</button>
        </form>
    )
}