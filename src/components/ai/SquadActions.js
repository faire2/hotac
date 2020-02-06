import {AI} from "../../data/Ships";
import HinnyShipActions from "../../data/hinny/HinnyShipActions";
import fgaShipActions from "../../data/fga/ShipActions";

export default function SquadActions(props) {
    switch (props.aiEngine) {
        case AI.HINNY:
            return HinnyShipActions(props);
        case AI.FGA:
            return fgaShipActions(props);
        default:
            console.log("Ai engine not recognized in component SquadActions: " + props.aiEngine);
    }
}