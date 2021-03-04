import React from 'react';

export default function Buttons({game, gamepad, levels, SetId, id, check, setCheck}) {

    const load = () => {
        game.loadCode();
        console.clear();
      }
    
      const play = () => {
        gamepad.play();
      }
     
      const pause = () => {
        gamepad.pause();
      }

      const nextLevel = () => {
        SetId(id+1);  
        game.loadLevel(levels[id+1]);
        console.clear();
        setCheck(false);
      }

    return (

    <div className="buttons">
              <button onClick={play} className="button green" >Lancer</button>
              <button onClick={pause} className="button green" >Pause</button> 
              <button onClick={load} className="button violet" > Valider </button>
              <div style={{display: check===false ? "none" : "block" }}>
              <button onClick={nextLevel} className="button violet" > Niveau suivant </button>
              </div>
    </div>
    )
}
