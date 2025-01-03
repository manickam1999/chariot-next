import { Route, Plus, Minus, Locate } from "lucide-react";
import React from "react";
import { useMap } from "react-leaflet";
// import AboutUsDrawer from "../drawers/AboutUsDrawer/AboutUsDrawer";
// import DevelopersDrawer from "../drawers/DevelopersDrawer/DevelopersDrawer";
import CheckpointDrawer from "../drawers/CheckpointDrawer/CheckpointDrawer";
import RoadblockDrawer from "../drawers/RoadblockDrawer/RoadblockDrawer";
import { MAP_COORDINATES } from "@/constants/coordinates";
import { useGetProgressInfo } from "@/hooks/useGetProgressInfo";

function RightNavbar() {
    const map = useMap();
    const { vehiclePosition } = useGetProgressInfo();

    const handleZoomIn = () => map.setZoom(map.getZoom() + 1);
    const handleZoomOut = () => map.setZoom(map.getZoom() - 1);
    const handleFocus = () => map.setView(vehiclePosition, 25);
    const handleOverview = () => map.setView(MAP_COORDINATES.center, 15);

    return (
        <div className="absolute z-[410] bottom-1/4 right-0 lg:bottom-10 mb-4 lg:mb-0 fade-in">
            <div className="flex flex-col">
                {/* <div className="flex flex-col px-3 py-4 m-4 space-y-8 rounded-full bg-primary-50 dark:bg-dark_inversed-100"> */}
                {/*     <AboutUsDrawer /> */}
                {/*     <DevelopersDrawer /> */}
                {/* </div> */}

                <div className="flex flex-col px-3 py-4 m-4 space-y-8 rounded-full bg-primary-50 dark:bg-dark_inversed-100">
                    <RoadblockDrawer />
                    <button onClick={handleOverview}>
                        <Route
                            size={18}
                            className="stroke-primary-850 dark:stroke-dark_inversed-850"
                        />
                    </button>
                    <CheckpointDrawer />
                </div>

                <div className="flex flex-col px-3 py-4 m-4 space-y-8 rounded-full bg-primary-50 dark:bg-dark_inversed-100">
                    <button onClick={handleZoomIn}>
                        <Plus
                            size={18}
                            className="stroke-primary-850 dark:stroke-dark_inversed-850"
                        />
                    </button>
                    <button onClick={handleZoomOut}>
                        <Minus
                            size={18}
                            className="stroke-primary-850 dark:stroke-dark_inversed-850"
                        />
                    </button>
                    <button onClick={handleFocus}>
                        <Locate
                            size={18}
                            className="stroke-primary-850 dark:stroke-dark_inversed-850"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RightNavbar;
