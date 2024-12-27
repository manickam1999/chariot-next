import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import { Info } from "lucide-react";
import AboutUsTabs from "./AboutUsTabs";

function AboutUsDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button>
          <Info size={18} color="#271832" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="px-3 w-full">
        <div className="flex flex-col py-10">
          <DrawerTitle className="text-center pb-5">About Us</DrawerTitle>
          <AboutUsTabs />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default AboutUsDrawer;
