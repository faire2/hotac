import React, {useContext} from "react";
import {TopMenu} from "./menus/TopMenu";
import Squadrons from "./squadView/Squadrons";
import {GlobalContext} from "../context/Contexts";

export const SquadView = () => {
    const globalContext = useContext(GlobalContext);
    return (
        <div>
            <TopMenu />
            <Squadrons squadrons={globalContext.squadrons}/>
        </div>
    )
};
