export default function SkillsItem({ skill, id, removeSkill}) {
    return (
        <li className="skills-item">
            <label>{skill}</label>
            <div onClick={() => removeSkill(id)}>X</div>
        </li>
    )
}