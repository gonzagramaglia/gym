import React from "react"

export default function Exercise(props){
    
    // Display of the repetitions of each exercise
    let reps = ""
    props.exercise.reps.map( rep => (
        typeof(rep)=="number"
            ? reps += `${rep} • ` 
            : reps += `${rep} `
        )
    )
    reps = reps.slice(0, -3)
    
    // Display of the rest time of each exercise
    let rest = ""
    props.exercise.rest.length === 1 
        ? rest = `${props.exercise.rest[0]}'`
        : rest = `${props.exercise.rest[0]}' ${props.exercise.rest[1]}''`
    
    
    // Preparing the display of the weekly tracking of each exercise
    let trackingArray = []
    for (let week in props.exercise.tracking) {
        // If the exercise was completed and did not require any weight, nothing is shown
        // (In another part of the code, a tilde is added)
        props.exercise.tracking[week].completed && props.exercise.tracking[week].kg == 0
            ? trackingArray.push(``)
            // If the kg are 99 they are not shown
            : props.exercise.tracking[week].kg == 99
                ? trackingArray.push(``)
                // If the rir is 99 it is not shown
                : props.exercise.tracking[week].rir == 99 
                    ? trackingArray.push(`${props.exercise.tracking[week].kg}kg`)
                    // If the exercise was not completed, the rir is not shown
                    // (In another part of the code this "0kg" is replaced by a square)
                    : !props.exercise.tracking[week].completed 
                        ? trackingArray.push(`${props.exercise.tracking[week].kg}kg`)
                        // All other cases are shown accordingly: kg and rir
                        : trackingArray.push(`${props.exercise.tracking[week].kg}kg (${props.exercise.tracking[week].rir})`)
    }
    
   // Display of the weekly tracking of each exercise
    // The trackid is to provide a key to each p element. React asked me to do it. I don't know if I resolved it in the best way
    let trackId = 1
    const tracking = trackingArray.map( week => (
            
            week != "0kg" 
                ? <p key={trackId++} className="completed">{week} ✅&nbsp;</p>
                : <p key={trackId++}>🔲&nbsp;</p>
            
        ))
    
    
    return (
        
        <div className="exercise">
            <img src={props.exercise.imgUrl} className="exercise--image"/>
            <div className="exercise--info">
                <h3>{props.exercise.name}</h3>
                <p>{reps}</p>
                <p>{rest}</p>
            </div>
            <div className="exercise--tracker">
                {tracking}
            </div>
        </div>
    )
}