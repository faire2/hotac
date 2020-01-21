import React from 'react';
import {Squad} from "./Squad";

export default function SquadGenerator(props) {
    let i = 0;
    let squadId = 0;
    return (
        <div className="row shipStats">
            {props.aiShips.map(function (shipType) {
                squadId = i;
                i++;
                return <div key={i} className="col-l-6">
                    <Squad shipType={shipType} squadId={squadId} handleShipRemoval={props.handleShipRemoval}/>
                </div>;
            })
            }

        </div>
    )
};

