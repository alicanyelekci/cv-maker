import SkillsItem from "./SkillsItem"

export default function SkillsList({ skills, removeSkill }) {
    return (
        <ul className="skills-list">
            {skills.map(skill => {
                return(
                    <SkillsItem {...skill} key={skill.id} removeSkill={removeSkill} />
                )
            })}
        </ul>
    )
}