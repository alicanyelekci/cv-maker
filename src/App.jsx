import { useState } from 'react'
import './styles/App.css'
import InfoForm from './components/InfoForm';
import InfoList from './components/InfoList';

function App() {
  const [info, setInfo] = useState({name: "", email: "", tel: "", location: "", display: false});

  function addInfo(name, email, tel, location) {
    console.log("info", info);

    setInfo(() => {
      return (
        { name: name, 
          email: email, 
          tel: tel, 
          location: location,
          display: true
        }
      )
    })
    }

    function removeInfo() {
      setInfo({name: "", email: "", tel: "", location: "", display: false});
    }
    
    function editInfo() {
      setInfo({...info, display: false});
    }

  return (
    <>
      {info.display ? <InfoList {...info} remove={removeInfo} edit={editInfo} /> : <InfoForm {...info} onSubmit={addInfo} />}
      {}
    </>
  )
}

export default App
