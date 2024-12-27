import {
  Info,
  PersonStandingIcon,
  Construction,
  Route,
  Flag,
  Plus,
  Minus,
  Locate,
} from "lucide-react";
import React from "react";
import { useMap } from "react-leaflet";
import AboutUsDrawer from "../drawers/AboutUsDrawer/AboutUsDrawer";

function RightNavbar() {
  const map = useMap();

  const handleZoomIn = () => map.setZoom(map.getZoom() + 1);
  const handleZoomOut = () => map.setZoom(map.getZoom() - 1);

  return (
    <div className="absolute z-[410] bottom-1/4 right-0 lg:bottom-10 mb-4 lg:mb-0 fade-in">
      <div className="flex flex-col">
        <div className="flex flex-col px-3 py-4 m-4 space-y-8 rounded-full bg-primary-50">
          <AboutUsDrawer />
          <button>
            <PersonStandingIcon size={18} color="#271832" />
          </button>
        </div>

        <div className="flex flex-col px-3 py-4 m-4 space-y-8 rounded-full bg-primary-50">
          <button>
            <Construction size={18} color="#271832" />
          </button>
          {/* TODO: implement logic after adding chariot in map. */}
          <button>
            <Route size={18} color="#271832" />
          </button>
          <button>
            <Flag size={18} color="#271832" />
          </button>
        </div>

        <div className="flex flex-col px-3 py-4 m-4 space-y-8 rounded-full bg-primary-50">
          <button onClick={handleZoomIn}>
            <Plus size={18} color="#271832" />
          </button>
          <button onClick={handleZoomOut}>
            <Minus size={18} color="#271832" />
          </button>
          {/* TODO: implement logic after adding chariot in map. */}
          <button>
            <Locate size={18} color="#271832" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightNavbar;
