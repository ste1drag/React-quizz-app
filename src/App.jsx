import { useState } from 'react'
import Quiz from "./Quiz.jsx";
import {jsQuizz} from "./constants.js";
import './App.css'

function App() {


  return (
    < Quiz questions={ jsQuizz.questions }/>
  )
}

export default App
