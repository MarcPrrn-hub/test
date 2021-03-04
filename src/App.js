import './App.css';
import React, { useRef, useState, useEffect } from 'react';

//BLOCKLY COMPONENT
import BlocklyComponent from './Blockly';

//GAMEPAD GUI GAME 
import Gamepad from './Gamepad/gamepad';
import Gui from './js/gui';
import Game from './js/game';

//CONFIG
import levels from './config/levels';
import {tb_c, tb, Blocks} from './config/blockly';

//COMPONENTS
import Map from './components/map';
import LevelBar from './components/levelBar';
import Capacity from './components/capacity';
import Buttons from './components/buttons';


function App() {

//Blockly workspace 
const simpleWorkspace = useRef();

//Id of the current level
const [id , SetId] = useState(0);
const [check, setCheck] = useState(false);
const [unlock, setUnlock] = useState([id]);

//Gamepad const : "Instructions" buttons and categories display (pb with true)
const categories =false ;
const start = true ;

const [gamepad, setGamepad] = useState(0);
const [game, setGame] = useState(0);


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
        game = new Game(gui, gamepad, setCheck, setUnlock, unlock, id)

        setGamepad(gamepad);
        setGame(game);
    
        // load the level
        game.loadLevel(levels[id])
    
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
              <LevelBar levels={levels} SetId={SetId} game={game} unlock={unlock} />
            </header>

            <Map id={id} />
            <Capacity levels={levels} id={id} simpleWorkspace={simpleWorkspace} />
            <Buttons game={game} gamepad={gamepad} check={check} id={id} levels={levels} SetId={SetId} setCheck={setCheck} />
        </div>

    </div>

</main>  
    </>
  );

}

export default App;
