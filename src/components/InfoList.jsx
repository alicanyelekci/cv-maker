export default function InfoList({ name, email, tel, location, remove, edit }) {
    return (
        <div className="info-item">
            <h1>{name}</h1>
            <div className="details">
                <img src="src/assets/mail.png"/>
                <p>{email}</p>
                {tel === '' ? null : <img src="src/assets/telephone.png"/>}
                <p>{tel}</p>
                {location === '' ? null : <img src="src/assets/location.png"/>}
                <p>{location}</p>
            </div>
            <div className="buttons">
                <button onClick={edit}>Edit</button>
                <button onClick={remove}>Remove</button>
            </div>
        </div>
    )
}