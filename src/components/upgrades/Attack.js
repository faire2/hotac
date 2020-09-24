import React from "react";

export const Attack = (props) =>
    <div className="attack d-flex flex-row">
        <div>
            {props.bullsEye ? <i className="xwi x-bullseyearc"/> : <i className="xwi x-frontarc"/>}{props.attack}
        </div>
        <div className="range">
            <i className="xwi x-rangebonusindicator"/><span className="blackFontColor"> {props.range}</span>
        </div>
    </div>;