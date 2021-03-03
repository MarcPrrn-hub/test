import React from 'react';
import Blockly from 'blockly';

export default function Capacity({levels, id, setCapacity, simpleWorkspace}) {

    // simpleWorkspace.workspace.addChangeListener(() => {
    //     setCapacity(Blockly.getMainWorkspace().remainingCapacity())
    // })


    return (

        <div id="capacity" style={{display: levels[id].maxBlocks===null ? "none" : "block" }}>
                Il te reste 10 blocs disponibles.
        </div>
    )
}
