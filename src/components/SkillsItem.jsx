export default function SkillsItem({ skill, id, removeSkill}) {
    return (
        <li>
            <label>{skill}</label>
            <button onClick={() => removeSkill(id)}>X</button>
        </li>
    )
}