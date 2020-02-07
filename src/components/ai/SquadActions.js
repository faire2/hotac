import {AI} from "../../data/Ships";
import ShipActions from "../../data/hinny/ShipActions";
import fgaShipActions from "../../data/fga/FgaShipActions";

export default function SquadActions(props) {
    switch (props.aiEngine) {
        case AI.HINNY:
            return ShipActions(props);
        case AI.FGA:
            return fgaShipActions(props);
        default:
            console.log("Ai engine not recognized in component SquadActions: " + props.aiEngine);
    }
}