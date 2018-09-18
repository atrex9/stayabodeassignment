import React, { Component } from 'react';
import './EiffelTower.css';
import EiffelTowerImg from './img/img-01.png';
import EiffelTowerImg2x from './img/img-01@2x.png';
import EiffelTowerImg3x from './img/img-01@3x.png';
import EiffelTowerImgCopy1x from './img/img-01-copy.png';
import EiffelTowerImgCopy2x from './img/img-01-copy@2x.png';
import EiffelTowerImgCopy3x from './img/img-01-copy@3x.png';
import mapImg from "./img/img-map.png";
import mapImg2x from "./img/img-map@2x.png";
import mapImg3x from "./img/img-map@3x.png";


class EiffelTower extends React.Component {
    render() {
        return (
            <div id="EiffelTower">
                <picture>
                    <source media="(min-width: 376px)" srcSet={`${EiffelTowerImg2x} 2x, ${EiffelTowerImg3x} 3x`} />
                    <source media="(min-width:0px) and (max-width:375px)" srcSet={`${EiffelTowerImgCopy1x} 1x, ${EiffelTowerImgCopy2x} 2x, ${EiffelTowerImgCopy3x} 3x`} />
                    <img
                        src={EiffelTowerImg}
                        className="img_01" />
                </picture>
                <label className="-copy-6">Eiffel Tower</label>
                <label className="-copy-5">Tour Eifel . Since 1887</label>
                <div className="Nav">
                    <button className="BGButton1 layer3" >General</button>
                    <button className="BGButton2 layer3">History</button>
                    <button className="BGButton3 layer3">Literature</button>
                    <button className="BGButton4 layer3">Politics</button>
                    <button className="BGButton5 layer3">Arts</button>
                    <button className="BGButton6 layer3">News</button>
                </div>
                <p className="The-Eiffel-Tower-is">The Eiffel Tower is a wrought iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.
                <img src={mapImg}
                    srcSet={`${mapImg2x} 2x, ${mapImg3x} 3x`}
                    className="img_map"/>
                 Constructed from 1887–89 as the entrance to the 1889 World's Fair, it was initially criticized by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognisable structures in the world.[3] The Eiffel Tower is the most-visited paid monument in the world; 6.91 million people ascended it in 2015.

                The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest structure in France after the Millau Viaduct.

                The tower has three levels for visitors, with restaurants on the first and second levels. The top level's upper platform is 276 m (906 ft) above the ground – the highest observation deck accessible to the public in the European Union. Tickets can be purchased to ascend by stairs or lift to the first and second levels. The climb from ground level to the first level is over 300 steps, as is the climb from the first level to the second. Although there is a staircase to the top level, it is usually accessible only by lift.</p>

            </div>
        );
    }
}

export default EiffelTower;