import React,{useState,useEffect} from 'react';
import Blockly from 'blockly';

export default function Capacity({levels, id, simpleWorkspace}) {

    const [capacity, setCapacity] = useState(0);

    useEffect(() => {
        simpleWorkspace.current.workspace.addChangeListener(() => {
        setCapacity(Blockly.getMainWorkspace().remainingCapacity())
    }, [simpleWorkspace])

    })

    return (

        <div style={{display: capacity===Infinity ? "none" : "block" }}>
                Il te reste {capacity} blocs disponibles.
        </div>
    )
}
