import React from 'react';

export default function LevelBar( {SetId, game, levels, unlock} ) {


    const changeLevel = (id) => {
        if(id in unlock) {
            SetId(id);  
            game.loadLevel(levels[id]);
            console.clear();
        }
        else alert('tu n as pas encore débloqué le niveau')
    }

    return ( 
        levels.map(level =>
             <button onClick={() => changeLevel(level.id - 1)} className={level.id-1 in unlock ? "button level unlock" : "button level lock"} > {level.id} </button> 
     )
     )
}