import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import React, { useState } from "react";
import { HeartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import TNCScene from "./TNCScene";
import BankAccountScene from "./BankAccountScene";

function SupportDrawer() {
  const [scene, setScene] = useState<0 | 1>(0);

  const handleSceneChange = (scene: 0 | 1) => {
    setScene(scene);
  };

  return (
    <Drawer onClose={() => setScene(0)}>
      <DrawerTrigger asChild>
        <Button>
          <HeartIcon
            size={30}
            strokeWidth={1}
            className="stroke-primary-850 dark:stroke-dark_inversed-850"
          />
          <span className="capitalize">Support Us</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-3 w-full">
        <div className="py-5 flex flex-col w-full gap-y-3">
          <div className="flex flex-col items-center">
            <span className="font-medium text-primary-850 text-2xl dark:text-dark_inversed-850">
              Support The Development
            </span>
            <span className="italic text-md dark:text-dark_inversed-900">
              {scene === 0
                ? "Your donation makes a difference"
                : "Thank you for your support!"}
            </span>
          </div>
          {scene === 0 ? (
            <TNCScene handleSceneChange={handleSceneChange} />
          ) : (
            <BankAccountScene />
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default SupportDrawer;
