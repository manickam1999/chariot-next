import React from "react";
import AntPath from "../map/AntPath";
import {
    POLICE_COORD,
    ROADBLOCK_ANTPATH,
    ROADBLOCK_COORD,
} from "@/constants/coordinates";
import RoadBlockMarker from "../markers/RoadBlock";
import PoliceMarker from "../markers/Police";

function Roadblock() {
    return (
        <>
            {ROADBLOCK_ANTPATH.map((position, index) => (
                <AntPath
                    key={`antpath-${index}`}
                    positions={position}
                    options={{
                        delay: 800,
                        hardwareAccelerated: true,
                        paused: true,
                        color: "red",
                        opacity: 0.9,
                        pulseColor: "white",
                        weight: 8,
                        lineCap: "square",
                        lineJoin: "mitre",
                    }}
                />
            ))}

            {ROADBLOCK_COORD.map((position, index) => (
                <RoadBlockMarker
                    key={`roadblock-${index}`}
                    position={position}
                />
            ))}

            {POLICE_COORD.map((position, index) => (
                <PoliceMarker key={`police-${index}`} position={position} />
            ))}
        </>
    );
}

export default Roadblock;
