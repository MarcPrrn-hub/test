import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import BlocklyComponent from './Blockly';

import Gamepad from './Gamepad/gamepad';
import Gui from './js/gui';
import Game from './js/game';

import levels from './config/levels';
import {tb_c, tb, Blocks} from './config/blockly';

import Map from './components/map';
import LevelBar from './components/levelBar';
import Capacity from './components/capacity';

// IL RESTE CAPACITY / LEVEL BAR A GERER + GAMEPADINIT A SUPP 
// COMMENT RECUP SIMPLEWORKSPACE, GAME, GUI DU USEEFFECT

function App() {

const simpleWorkspace = useRef();

const [id , SetId] = useState(6);
const [categories, SetCategories] = useState(false);
const [start, SetStart] = useState(true) ;
const [capacity, setCapacity] = useState(0);

const ToolBox = categories ? tb_c : tb 

  useEffect(() => {

        //init the gamepad
        Gamepad.init({
            toolbox : ToolBox,
            blocks: Blocks,
        })
        // create the gamepad and the game
        const
        gamepad = new Gamepad({
            'start': start, // enable/disable start block
            'magicJson': true, // look at the game.js file to see how this option work
            'customHighlight': true, // if false use the blockly highlight method
            workspace : simpleWorkspace.current.workspace
        }),
    
        gui = new Gui(),
        game = new Game(gui, gamepad)
    
        // load the level
        game.loadLevel(levels[id])
    
        document.getElementById('load').onclick = () =>  game.loadCode() + console.clear()
        document.getElementById('play').onclick = () => gamepad.play()
        document.getElementById('pause').onclick = () => gamepad.pause()
  }, [id])


    return (
    
        <>  

      <BlocklyComponent ref={simpleWorkspace}
      readOnly={false} 
      trashcan={true} 
      horizontalLayout = {false}
      move={{
        scrollbars: true,
        drag: true,
        wheel: true
      }}
      > 
    </BlocklyComponent>
 <main>

    <div id="blockly-div"> 
        
        <div id="game-div">

            <header>
                    <LevelBar SetId={SetId} />
            </header>

            <Map id={id} />

            <Capacity levels={levels} id={id} setCapacity={setCapacity} simpleWorkspace={simpleWorkspace} />
            <div className="buttons">
              <button id="play" className="button green" >Lancer</button>
              <button id="pause" className="button green"  >Pause</button> 
              <button id="load" className="button violet" > Valider </button>
          </div>

        </div>

    </div>

</main>  
    </>
  );

}

export default App;
