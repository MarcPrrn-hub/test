import levels from '../config/levels';

export default function LevelBar( {SetId, game} ) {

    const changeLevel = (id) => {
        // SetId(id);
        // game.loadLevel(levels[id])
        // console.clear()
    }

    return levels.map(level =>

             <button className="button level" onClick={changeLevel(level.id)} > {level.id} </button> 
    
     )
}