export default function InfoList({ name, email, tel, location, remove, edit }) {
    return (
        <>
            <h1>{name}</h1>
            <h3>{email} {tel} {location}</h3>
            <button onClick={edit}>Edit</button>
            <button onClick={remove}>Remove</button>
        </>
    )
}