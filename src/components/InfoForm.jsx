import { useState } from "react";

export default function InfoForm(props) {
    const [newInfo, setNewInfo] = useState({...props});

    function handleSubmit(e) {
        e.preventDefault();
        if(newInfo.name === "" || newInfo.email === "") return;

        props.onSubmit(newInfo.name, newInfo.email, newInfo.tel, newInfo.location);
    }

    return(
        <form className="info-form" onSubmit={handleSubmit} >
            <label htmlFor="name">Full Name*</label>
            <input value={newInfo.name} onChange={e => setNewInfo({...newInfo, name: e.target.value})} type="text" id="name" placeholder="Name" />
            <label htmlFor="email">Email*</label>
            <input value={newInfo.email} onChange={e => setNewInfo({...newInfo, email: e.target.value})} type="email" id="email" placeholder="Email" />
            <label htmlFor="tel">Phone Number</label>
            <input value={newInfo.tel} onChange={e => setNewInfo({...newInfo, tel: e.target.value})} type="text" id="tel" placeholder="Phone Number" />
            <label htmlFor="location">Location</label>
            <input value={newInfo.location} onChange={e => setNewInfo({...newInfo, location: e.target.value})} type="text" id="location" placeholder="Location" />
            <button className="add-btn">Save Info</button>
        </form>
    )
}