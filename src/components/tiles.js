import map_start from '../images/map_start.png';
import map_arrival from '../images/map_arrival.png';
import map_main from '../images/map_main.png';
import levels from '../config/levels';


const drawTile = (tile, indexX,indexY) => {
    let map;
    switch(tile){
    case 1:
        map = map_start;
        break
    case 2:
        map = map_main;
        break
    case 3: 
        map = map_arrival;
        break
    default:
        map = null;
    }
    return <image href={map} x={50*indexX} y={50*indexY} width="50" height="50"></image>
}

export default function Case ( {id}) {
    return levels[id].tiles.map ( (row, indexY) => row.map( (tile, indexX) =>  drawTile(tile,indexX,indexY)  ) );      
} 