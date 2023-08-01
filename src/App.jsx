import { useState } from 'react'
import './styles/App.css'
import InfoForm from './components/InfoForm';
import InfoList from './components/InfoList';
import WorkForm from './components/WorkForm';
import WorkList from './components/WorkList';
import SkillsForm from './components/SkillsForm';
import SkillsList from './components/SkillsList';

function App() {
  const [info, setInfo] = useState({name: "", email: "", tel: "", location: "", display: false});
  const [work, setWork] = useState([]);
  const [education, setEducation] = useState();
  const [skills, setSkills] = useState([]);

  function addInfo(name, email, tel, location) {
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
    function editInfo() {
      setInfo({...info, display: false});
    }
    function removeInfo() {
      setInfo({name: "", email: "", tel: "", location: "", display: false});
    }

    function addWork(company, title, description, startDate, endDate) {
      setWork(() => {
        return ([
          ...work,
          { id: crypto.randomUUID(),
            company: company, 
            title: title, 
            description: description, 
            startDate: startDate,
            endDate: endDate
          }
        ])
      })
    }
    function editWork(id) {
      
    }
    function removeWork(id) {
      setWork(work => {
        return work.filter(job => job.id !== id)
      })
    }

    function addSkill(skill) {
      setSkills(() => {
        return ([
          ...skills,
          { id: crypto.randomUUID(),
            skill: skill
          }
        ])
      })
    }
    function removeSkill(id) {
      setSkills(skills => {
        return (skills.filter(skill => skill.id !== id));
      })
    }

  return (
    <>
      {info.display ? <InfoList {...info} remove={removeInfo} edit={editInfo} /> : <InfoForm {...info} onSubmit={addInfo} />}
      <h2>Work Experience</h2>
      <WorkList work={work} editWork={editWork} removeWork={removeWork} />
      <WorkForm {...work} onSubmit={addWork} />
      <h2>Education</h2>
      <h2>Skills</h2>
      <SkillsForm onSubmit={addSkill} />
      <SkillsList skills={skills} removeSkill={removeSkill} />
    </>
  )
}

export default App
