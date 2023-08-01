export default function InfoList({ name, email, tel, location, remove, edit }) {
    return (
        <>
            <h1>{name}</h1>
            <p>{email} {tel} {location}</p>
            <button onClick={edit}>Edit</button>
            <button onClick={remove}>Remove</button>
        </>
    )
}