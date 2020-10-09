import hinnyShipActions from "../../data/hinny/HinnyShipActions";
import fgaShipActions from "../../data/fga/FgaShipActions";
import {AI} from "../../enums";
import sepaActions from "../../data/separatists/sepaActions";

export default function SquadActions(props) {
    switch (props.aiEngine) {
        case AI.HINNY:
            return hinnyShipActions(props);
        case AI.FGA:
            return fgaShipActions(props);
        case AI.SEPARATISTS:
            return sepaActions(props);
        default:
            console.log("Ai engine not recognized in component SquadActions: " + props.aiEngine);
    }
}