import hinnyAttack from "../../data/hinny/HinnyAttack";
import fgaAttack from "../../data/fga/FgaAttack";
import {AI} from "../../enums";
import sepaAttack from "../../data/separatists/sepaAttack";

export default function SquadAttack(props) {
    switch (props.aiEngine) {
        case AI.HINNY:
            return hinnyAttack(props);
        case AI.FGA:
            return fgaAttack(props);
        case AI.SEPARATISTS:
            return sepaAttack(props);
        default:
            console.log("Ai engine not recognized in component SquadAttack: " + props.aiEngine);
    }
}