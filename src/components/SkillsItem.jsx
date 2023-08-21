export default function SkillsItem({ skill, id, removeSkill}) {
    return (
        <li className="skills-item">
            <label>{skill}</label>
            <button onClick={() => removeSkill(id)}>✖</button>
        </li>
    )
}