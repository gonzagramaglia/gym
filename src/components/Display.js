import React, {useState} from "react"
import data from "../data"
import Exercise from "./Exercise"

export default function Display(props){
    
    document.body.style.backgroundColor = props.darkMode ? "black" : "white"
 
    const [routineChoice, setRoutineChoice] = useState("MAY2023")
    const [bodyChoice, setBodyChoice] = useState("")
    
    function setRoutine(event){
        
        setRoutineChoice(event.target.value)
        
    }
    
    function setChoice(event){
        
        setBodyChoice(event.target.value)
        setBodyChoice(event.target.id)
        
        document.getElementById('upper').classList.remove('selected')
        document.getElementById('lower').classList.remove('selected')
        document.getElementById('full').classList.remove('selected')
        event.target.classList.add('selected')
    }
    
    const exercises = data.map( exercise => {
        
        return bodyChoice == exercise.body && routineChoice == exercise.routine
            ? (<Exercise
                    key={exercise.id}
                    exercise={exercise}
                />)
            : ""
    })
    
    
    return(
        <div className="choices">
            <select onChange={setRoutine}>
                <option value="MAY2023">MAY 2023</option>
                <option value="MARCHAPRIL2023">MARCH/APRIL 2023</option>
                <option value="JANFEBMARCH2023">JAN/FEB/MARCH 2023</option>
            </select>
            <div className="body--type-container">
                <div className="body--type" id="upper" onClick={setChoice}>UPPER</div>
                <div className="body--type" id="lower" onClick={setChoice}>LOWER</div>
                <div className="body--type" id="full" onClick={setChoice}>FULL</div>
            </div>
            <section className="exercises-list">
                {exercises}
            </section>
        </div>
        
    )
}