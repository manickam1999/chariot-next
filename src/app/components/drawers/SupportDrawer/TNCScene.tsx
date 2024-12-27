import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";

function TNCScene({
  handleSceneChange,
}: {
  handleSceneChange: (scene: 0 | 1) => void;
}) {
  const [isAccepted, setIsAccepted] = useState<boolean>(false);

  /* TODO: add full TNC*/
  return (
    <div className="flex flex-col items-center w-full gap-y-3">
      <div className="gap-y-2 rounded-md border border-[#CBD5E1] p-2 flex flex-col w-full h-40 overflow-y-auto">
        <span>Terms and Conditions</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </div>
      <div className="flex items-center justify-center gap-x-2">
        <Checkbox
          onCheckedChange={(checked) => setIsAccepted(checked as boolean)}
          className="border-[#CBD5E1]"
        />
        <span className="text-sm">I accept the Terms and Conditions</span>
      </div>
      <Button
        disabled={!isAccepted}
        onClick={() => handleSceneChange(1)}
        variant="outline"
        className="flex justify-center gap-x-2 items-center"
      >
        <HeartIcon strokeWidth={1} />
        <span>Support now!</span>
      </Button>
    </div>
  );
}

export default TNCScene;
