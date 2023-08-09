import { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';

import InfoForm from './components/InfoForm';
import InfoList from './components/InfoList';
import WorkForm from './components/WorkForm';
import WorkList from './components/WorkList';
import EducationForm from './components/EducationForm';
import EducationList from './components/EducationList';
import SkillsForm from './components/SkillsForm';
import SkillsList from './components/SkillsList';

function App() {
  const [info, setInfo] = useState({name: "", email: "", tel: "", location: "", display: false});
  const [work, setWork] = useState([]);
  const [sortedWork, setSortedWork] = useState([]);
  const [editedWork, setEditedWork] = useState({});
  const [education, setEducation] = useState([]);
  const [sortedEducation, setSortedEducation] = useState([]);
  const [editedEducation, setEditedEducation] = useState({});
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const sortedWork = [...work].sort((a, b) => (a.startDate > b.startDate) ? -1 : (b.startDate > a.startDate) ? 1 : 0);
    setSortedWork(sortedWork);
  }, [work]);
  
  useEffect(() => {
    const sortedEducation = [...education].sort((a, b) => (a.startDate > b.startDate) ? -1 : (b.startDate > a.startDate) ? 1 : 0);
    setSortedEducation(sortedEducation);
  }, [education]);

  
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
      let edit = work.filter(job => job.id === id);
      setEditedWork({...edit});
      setWork(work => {
        return work.filter(job => job.id !== id)
      })
    }
    function removeWork(id) {
      setWork(work => {
        return work.filter(job => job.id !== id)
      })
    }

    function addEducation(school, department, gpa, startDate, endDate) {
      setEducation(() => {
        return ([
          ...education,
          { id: crypto.randomUUID(),
            school: school, 
            department: department, 
            gpa: gpa, 
            startDate: startDate,
            endDate: endDate
          }
        ])
      })
    }
    function editEducation(id) {
      let edit = education.filter(ed => ed.id === id);
      setEditedEducation({...edit});
      setEducation(education => {
        return education.filter(ed => ed.id !== id)
      })
    }
    function removeEducation(id) {
      setEducation(education => {
        return education.filter(ed => ed.id !== id)
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

    function handleDownload() {

    }

  return (
    <>
      {info.display ? <InfoList {...info} remove={removeInfo} edit={editInfo} /> : <InfoForm {...info} onSubmit={addInfo} />}
      <h2>Work Experience</h2>
      <WorkForm work={editedWork[0]} onSubmit={addWork} />
      <WorkList work={sortedWork} editWork={editWork} removeWork={removeWork} />
      <h2>Education</h2>
      <EducationForm education={editedEducation[0]} onSubmit={addEducation} />
      <EducationList education={sortedEducation} editEducation={editEducation} removeEducation={removeEducation} />
      <h2>Skills</h2>
      <SkillsForm onSubmit={addSkill} />
      <SkillsList skills={skills} removeSkill={removeSkill} />
      <button onClick={handleDownload}>Download CV ↓</button>
    </>
  )
}

export default App
