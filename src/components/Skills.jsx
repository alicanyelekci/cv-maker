import SkillsForm from "./SkillsForm"
import SkillsList from "./SkillsList"

export default function Skills({ skills, addSkill, removeSkill }) {
    return(
        <>
        <h2>SKILLS</h2>
        <SkillsForm onSubmit={addSkill} />
        <SkillsList skills={skills} removeSkill={removeSkill} />
        </>
    )
}