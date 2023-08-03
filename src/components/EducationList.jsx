import EducationItem from "./EducationItem"

export default function EducationList({ education, editEducation, removeEducation }) {
    return(
        <>
            {education.map(ed => {
                return (
                    <WorkItem {...ed} key={ed.id} editEducation={editEducation} removeEducation={removeEducation} />
                )
            })}
        </>
    )
}