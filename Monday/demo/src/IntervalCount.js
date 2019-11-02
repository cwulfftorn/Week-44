import React, {useState, useEffect} from 'react';

export default function IntervalCount(){
    const [count,setCount] = useState(0)
    const [startCount,setStartCount] = useState(false)

    useEffect(function(){
        // What I  want to Do
        // ()=> {What I want to clean up}

        // Part one --> what u want to do
        if(startCount === false){
            return
        }
        console.log("In use effect")
        const setInt = setInterval(()=>{
            setCount(count=>count+1)
        },500)

        // Part 2 --> Only if you need clean up
        return ()=> {
            console.log("Cleaned up")
            clearInterval(setInt)
        }

    },[startCount])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setStartCount(!startCount)}>Start Count</button>
        </div>
    )
}