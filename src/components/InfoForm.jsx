import { useState } from "react";

export default function InfoForm(props) {
    const [newInfo, setNewInfo] = useState({...props});

    function handleSubmit(e) {
        e.preventDefault();
        if(newInfo.name === "" || newInfo.email === "") return;

        props.onSubmit(newInfo.name, newInfo.email, newInfo.tel, newInfo.location);
    }

    return(
        <form onSubmit={handleSubmit} >
            <input value={newInfo.name} onChange={e => setNewInfo({...newInfo, name: e.target.value})} type="text" placeholder="Name" />
            <input value={newInfo.email} onChange={e => setNewInfo({...newInfo, email: e.target.value})} type="email" placeholder="Email" />
            <input value={newInfo.tel} onChange={e => setNewInfo({...newInfo, tel: e.target.value})} type="number" placeholder="Phone Number" />
            <input value={newInfo.location} onChange={e => setNewInfo({...newInfo, location: e.target.value})} type="text" placeholder="Location" />
            <button>Add</button>
        </form>
    )
}