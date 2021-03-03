
import map from '../images/map.png';
import pegman from '../images/pegman.png';
import mapConfig from '../config/map';

import Tiles from './tiles';

export default function Map( {id} ) {

    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id={id} width="400px"
        height="400px" viewBox="0 0 400 400">
        <image href={map} className="maze" width={mapConfig.MapWidth} height={mapConfig.MapHeight}></image>
        <Tiles id={id} />
        <clipPath id="pegmanClipPath">
            <rect id="clipRect" width={mapConfig.RectWidth} height={mapConfig.RectHeight}></rect> 
        </clipPath>
        <image id="pegman" href={pegman} height={mapConfig.PegmanHeight} width={mapConfig.PegmanWidth}
            clipPath="url(#pegmanClipPath)" transform="rotate(0, 0, 0)"></image>
        </svg>
        </>
    )
}
