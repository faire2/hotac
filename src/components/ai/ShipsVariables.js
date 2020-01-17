import React, {useState} from "react";
import Variables from "./Variables";

const ShipsHeader = () => (
    <div>
        <div className="row">
            <div className="col-4">
                <h3>ID:</h3>
            </div>
            <div className="col-4">
                <h3>Shields:</h3>
            </div>
            <div className="col-4">
                <h3>Hull:</h3>
            </div>
        </div>
    </div>
);

export function ShipsVariables(props) {
    const [tokenIds, setTokenIds] = useState([0]);

    function handleTokenIdChange(value, index) {
        const tTokenIds = [...tokenIds];
        tTokenIds.splice(index, 1, value);
        setTokenIds(tTokenIds);
    };

    function handleAddShip() {
        const tTokenIds = [...tokenIds];
        tTokenIds.push(0);
        setTokenIds(tTokenIds);
    }

    function handleRemoveShip(index) {
        const tTokensId = [...tokenIds];
        tTokensId.splice(index, 1);
        setTokenIds(tTokensId);
    }

    return (
        <div>
            <ShipsHeader/>
            {
                tokenIds.map((tokenId) =>
                    <Variables key={tokenIds.indexOf(tokenId)} maxShields={props.maxShield} maxHull={props.maxHull}
                               tokenIdIndex={tokenIds.indexOf(tokenId)}
                               handleTokenIdChange={handleTokenIdChange} handleRemoveShip={handleRemoveShip}/>)
            }
            <br/>
            <button className="btn btn-primary btn-sm" onClick={handleAddShip}>Add a ship</button>
        </div>
    )
};