import EducationItem from "./EducationItem"

export default function EducationList({ education, editEducation, removeEducation }) {
    return(
        <div className="education-list">
            {education.map(ed => {
                return (
                    <EducationItem {...ed} key={ed.id} editEducation={editEducation} removeEducation={removeEducation} />
                )
            })}
        </div>
    )
}