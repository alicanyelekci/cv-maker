import EducationForm from "./EducationForm"
import EducationList from "./EducationList"

export default function Education({ editedEducation, sortedEducation, addEducation, editEducation, removeEducation }) {
    return(
        <>
        <h2>EDUCATION</h2>
        <EducationForm education={editedEducation[0]} onSubmit={addEducation} />
        <EducationList education={sortedEducation} editEducation={editEducation} removeEducation={removeEducation} />
        </>
    )
}