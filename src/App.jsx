import { useState, useEffect } from 'react';

import Info from './components/Info';
import Work from './components/Work';
import Education from './components/Education';
import Skills from './components/Skills';
import DownloadPage from './components/DownloadPage';
import Footer from './components/Footer';

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
      });
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

  return (
    <div className="container">
      <h1 className="header">CV MAKER</h1>
      <div className="body">
        <Info info={info} addInfo={addInfo} editInfo={editInfo} removeInfo={removeInfo} />
        <Work editedWork={editedWork} sortedWork={sortedWork} addWork={addWork} editWork={editWork} removeWork={removeWork} />
        <Education editedEducation={editedEducation} sortedEducation={sortedEducation} addEducation={addEducation} editEducation={editEducation} removeEducation={removeEducation} />
        <Skills skills={skills} addSkill={addSkill} removeSkill={removeSkill} />
        <DownloadPage name={info.name} />
      </div>
      <Footer />
    </div>
  )
}

export default App
