import { useState } from 'react'
import './App.css'
import Info from './components/Info'
import Work from './components/Work'
import Education from './components/Education'
import Skill from './components/Skill'

function App() {
  return (
    <>
      <Info name={name} mail={mail} phone={phone} location={location} />
      <h2>Work Experience</h2>
      <Work />
      <h2>Education</h2>
      <Education />
      <h2>Skills</h2>
      <Skill />
    </>
  )
}

export default App
