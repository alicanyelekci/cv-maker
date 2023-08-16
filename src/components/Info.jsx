import InfoList from "./InfoList"
import InfoForm from "./InfoForm"

export default function Info({ info, addInfo, editInfo, removeInfo }) {
    return (
        <>
        {info.display ? <InfoList {...info} remove={removeInfo} edit={editInfo} /> : <InfoForm {...info} onSubmit={addInfo} />}
        </>
    )
}