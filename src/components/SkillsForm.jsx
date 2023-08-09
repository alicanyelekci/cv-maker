import { useState } from "react"

export default function SkillsForm(props) {
    const [newSkill, setNewSkill] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if(newSkill === '') return;
        
        props.onSubmit(newSkill);
        setNewSkill('');
    }

    return(
        <form className="skills-form" onSubmit={handleSubmit}>
            <input value={newSkill} onChange={(e) => setNewSkill(e.target.value)} type="text" placeholder="Skill" />
            <button className="add-btn">Add Skill</button>
        </form>
    )
}