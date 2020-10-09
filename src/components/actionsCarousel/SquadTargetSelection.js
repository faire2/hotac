import hinnyTargetSelection from "../../data/hinny/HinnyTargetSelection";
import fgaTargetSelection from "../../data/fga/FgaTargetSelection";
import {AI} from "../../enums";
import sepaTargetSelection from "../../data/separatists/sepaTargetSelection";

export default function SquadTargetSelection(props) {
    switch (props.aiEngine) {
        case AI.HINNY:
            return hinnyTargetSelection(props);
        case AI.FGA:
            return fgaTargetSelection(props);
        case AI.SEPARATISTS:
            return sepaTargetSelection(props);
        default:
            console.log("Ai engine not recognized in component SquadTargetSelection: " + props.aiEngine);
    }
}